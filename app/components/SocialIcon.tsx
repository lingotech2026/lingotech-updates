import { memo, useMemo } from 'react';
import { SocialLink } from '../constants/footer';
import { Icons } from './Icons';

interface SocialIconProps {
  social: SocialLink;
}

/**
 * Memoized social icon component to prevent unnecessary re-renders
 * Pre-builds icon map for efficient rendering
 */
const SocialIcon = memo(function SocialIcon({ social }: SocialIconProps) {
  // Pre-build icon map to avoid recreating on every render
  const iconMap = useMemo(() => ({
    twitter: <Icons.Twitter className="w-4 h-4 sm:w-5 sm:h-5" />,
    linkedin: <Icons.Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
    instagram: <Icons.Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
  }), []);

  const icon = iconMap[social.icon as keyof typeof iconMap];

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 sm:p-2.5 rounded-lg text-primary-600 hover:text-secondary-600 hover:bg-secondary-600/10 transition-all duration-200 inline-flex items-center justify-center min-w-[44px] min-h-[44px]"
      aria-label={`Visit our ${social.label}`}
    >
      {icon}
    </a>
  );
});

export default SocialIcon;
