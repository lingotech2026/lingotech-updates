export type PageId = 'home' | 'team' | 'about' | 'blog' | 'contact' | 'services';

export interface NavLink {
  label: string;
  href: string;
  id: PageId;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'Services', href: '/services', id: 'services' },
  { label: 'About Us', href: '/about', id: 'about' },
  { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'Contact', href: '/contact', id: 'contact' },
  { label: 'Team', href: '/team', id: 'team' },
];
