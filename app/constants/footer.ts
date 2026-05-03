export interface FooterLink {
  label: string;
  href: string;
  isPlaceholder?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'Software Development', href: '/services' },
      { label: 'Mobile App Development', href: '/services' },
      { label: 'Search Engine Optimization (SEO)', href: '/services' },
      { label: 'Web Design & UX', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Team', href: '/team' },
    ],
  },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: 'twitter' | 'linkedin' | 'instagram';
  isPlaceholder?: boolean;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter', isPlaceholder: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/lingotech-solution-pvt-ltd/', icon: 'linkedin', isPlaceholder: true },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram', isPlaceholder: true },
];
