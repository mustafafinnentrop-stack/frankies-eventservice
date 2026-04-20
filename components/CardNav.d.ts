import { ReactNode, MouseEvent } from 'react';

export interface CardNavLink {
  label: string;
  href?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export interface CardNavItem {
  label: string;
  bgColor?: string;
  textColor?: string;
  links?: CardNavLink[];
}

export interface CardNavProps {
  logo?: string;
  logoText?: ReactNode;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

declare const CardNav: (props: CardNavProps) => JSX.Element;
export default CardNav;
