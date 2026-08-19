'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
// Die Vorlage importiert aus 'framer-motion'. Im Projekt liegt 'motion' —
// dasselbe Paket unter seinem neuen Namen, gleiche API.
import { motion } from 'motion/react';

/*
  ABWEICHUNG VON DER VORLAGE — und warum.

  Die Vorlage steuert das Aufziehen, indem sie wheel- und touchmove-
  Ereignisse abfaengt (preventDefault) und die Seite per
  window.scrollTo(0,0) auf Position 0 festhaelt, bis das Medium ganz
  aufgezogen ist. Auf dem iPhone des Betreibers hat genau das die Seite
  eingefroren: Wischen bewegte nichts mehr (Bildschirmvideo vom 18.08.,
  ausserdem nachgestellt — scrollY blieb ueber sechs Wischgesten bei 0).

  Deshalb laeuft das Aufziehen jetzt ueber den echten Scroll: Der Hero
  liegt in einer 220dvh hohen Strecke, die Buehne klebt darin (sticky).
  Der Fortschritt ist die Position in dieser Strecke. Nichts wird
  abgefangen, nichts festgehalten — Wischen, Mausrad, Tastatur und
  Bildlaufleiste funktionieren normal, und die Optik (Masse, Titelfahrt,
  Einblendung) ist unveraendert die der Vorlage.

  Unveraendert uebernommen: alle Render-Teile, Massformeln
  (mediaWidth/mediaHeight/textTranslateX), Farben ueber die zwei
  Branding-Klassen statt text-blue-200.
*/

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [viewport, setViewport] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = trackRef.current;
        if (!el) return;
        const strecke = el.offsetHeight - window.innerHeight;
        const y = -el.getBoundingClientRect().top;
        const p = strecke > 0 ? Math.min(Math.max(y / strecke, 0), 1) : 1;
        setScrollProgress(p);
        setShowContent(p >= 0.85);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  /* Abweichung von der Vorlage: Auf dem Desktop haelt der Kasten das
     Seitenverhaeltnis des Videos (16:9). Die Vorlage startet mit einem
     3:4-Kasten (300x400) — das Querformat-Video zeigte darin per
     object-cover nur einen 42%-Streifen aus der Bildmitte und wirkte
     dadurch nicht mittig. Breitenverlauf und Deckel (95vw / 85vh) sind
     unveraendert die der Vorlage; nur die Hoehe folgt jetzt der Breite.
     Auf dem Handy bleiben die Formeln der Vorlage — dort ist das Video
     hochkant und der Kasten passt. */
  let mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  let mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  if (!isMobileState && viewport.w > 0) {
    let w = Math.min(mediaWidth, viewport.w * 0.95);
    let h = (w * 9) / 16;
    const maxH = viewport.h * 0.85;
    if (h > maxH) {
      h = maxH;
      w = (h * 16) / 9;
    }
    mediaWidth = w;
    mediaHeight = h;
  }
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className='transition-colors duration-700 ease-in-out overflow-x-hidden'>
      {/* Die Scroll-Strecke, die Buehne klebt darin. Ihre Hoehe steht in
          globals.css und ist auf dem Handy deutlich kuerzer: dort stoesst
          das Medium wegen maxWidth 95vw schon bei 11% der Strecke an die
          Bildschirmbreite, der Rest waere totes Scrollen. */}
      <div ref={trackRef} className='relative scroll-expand-track'>
        <section
          className='sticky top-0 flex flex-col items-center justify-start overflow-hidden'
          style={{ height: '100dvh' }}
        >
          <div className='relative w-full flex flex-col items-center h-full'>
            <motion.div
              className='absolute inset-0 z-0 h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              <Image
                src={bgImageSrc}
                alt='Background'
                width={1920}
                height={1080}
                className='w-screen h-screen'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
              />
              <div className='absolute inset-0 bg-black/10' />
            </motion.div>

            <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
              <div className='flex flex-col items-center justify-center w-full relative' style={{ height: '100dvh' }}>
                <div
                  className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl'
                  style={{
                    width: `${mediaWidth}px`,
                    height: `${mediaHeight}px`,
                    maxWidth: '95vw',
                    maxHeight: '85vh',
                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {mediaType === 'video' ? (
                    mediaSrc.includes('youtube.com') ? (
                      <div className='relative w-full h-full pointer-events-none'>
                        <iframe
                          width='100%'
                          height='100%'
                          src={
                            mediaSrc.includes('embed')
                              ? mediaSrc +
                                (mediaSrc.includes('?') ? '&' : '?') +
                                'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                              : mediaSrc.replace('watch?v=', 'embed/') +
                                '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                                mediaSrc.split('v=')[1]
                          }
                          className='w-full h-full rounded-xl'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>

                        <motion.div
                          className='absolute inset-0 bg-black/30 rounded-xl'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    ) : (
                      <div className='relative w-full h-full pointer-events-none'>
                        <video
                          src={mediaSrc}
                          poster={posterSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload='auto'
                          className='w-full h-full object-cover rounded-xl'
                          controls={false}
                          disablePictureInPicture
                          disableRemotePlayback
                        />
                        <div
                          className='absolute inset-0 z-10'
                          style={{ pointerEvents: 'none' }}
                        ></div>

                        <motion.div
                          className='absolute inset-0 bg-black/30 rounded-xl'
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    )
                  ) : (
                    <div className='relative w-full h-full'>
                      <Image
                        src={mediaSrc}
                        alt={title || 'Media content'}
                        width={1280}
                        height={720}
                        className='w-full h-full object-cover rounded-xl'
                      />

                      <motion.div
                        className='absolute inset-0 bg-black/50 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )}

                  <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                    {date && (
                      <p
                        className='text-2xl ent-hero-text'
                        style={{ transform: `translateX(-${textTranslateX}vw)` }}
                      >
                        {date}
                      </p>
                    )}
                    {scrollToExpand && (
                      <p
                        className='ent-hero-text font-medium text-center'
                        style={{ transform: `translateX(${textTranslateX}vw)` }}
                      >
                        {scrollToExpand}
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                    textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                  }`}
                >
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold ent-hero-titel transition-none'
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {firstWord}
                  </motion.h2>
                  <motion.h2
                    className='text-4xl md:text-5xl lg:text-6xl font-bold text-center ent-hero-titel transition-none'
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {restOfTitle}
                  </motion.h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <motion.section
        className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.section>
    </div>
  );
};

export default ScrollExpandMedia;
