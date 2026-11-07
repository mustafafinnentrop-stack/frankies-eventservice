import { MetadataRoute } from 'next'

/*
  lastModified = Tag der letzten inhaltlichen Aenderung der Seite (siehe Git).
  Bei jeder Aenderung an einer Seite hier nachziehen, sonst meldet die
  Sitemap Google ein falsches Datum.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://frankies-eventservice.de',
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://frankies-eventservice.de/cocktailbar-lennestadt',
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://frankies-eventservice.de/getraenkeservice-schuetzenfest',
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://frankies-eventservice.de/hochzeit-sauerland',
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://frankies-eventservice.de/eventservice-kreis-olpe',
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://frankies-eventservice.de/winterbar',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://frankies-eventservice.de/service',
      lastModified: new Date('2026-08-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://frankies-eventservice.de/einsaetze',
      lastModified: new Date('2026-11-07'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://frankies-eventservice.de/partner',
      lastModified: new Date('2026-08-18'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
