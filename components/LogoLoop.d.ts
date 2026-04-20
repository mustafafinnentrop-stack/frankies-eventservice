import { CSSProperties, ReactNode, Key } from 'react'

export interface LogoNodeItem {
  node: ReactNode
  title?: string
  href?: string
  ariaLabel?: string
}

export interface LogoImageItem {
  src: string
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
  alt?: string
  title?: string
  href?: string
}

export type LogoItem = LogoNodeItem | LogoImageItem

export interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  renderItem?: (item: LogoItem, key: Key) => ReactNode
  ariaLabel?: string
  className?: string
  style?: CSSProperties
}

declare const LogoLoop: React.MemoExoticComponent<(props: LogoLoopProps) => JSX.Element>
export { LogoLoop }
export default LogoLoop
