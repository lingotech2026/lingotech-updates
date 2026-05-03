/**
 * Shared constants for repeated UI strings and messages
 * Improves maintainability and reduces duplication
 */

import { Award, Target, TrendingUp, Zap, LucideIcon } from 'lucide-react';

export interface CompanyStat {
  icon: LucideIcon;
  value: string;
  label: string;
  iconColor: string;
  bgGradient: string;
}

/**
 * Company statistics displayed in the Why Choose Us section
 */
export const COMPANY_STATS: readonly CompanyStat[] = [
  {
    icon: Award,
    value: '2+',
    label: 'Projects Delivered',
    iconColor: 'text-blue-600',
    bgGradient: 'from-blue-50 to-blue-100'
  },
  {
    icon: Target,
    value: '98%',
    label: 'Client Satisfaction',
    iconColor: 'text-green-600',
    bgGradient: 'from-green-50 to-green-100'
  },
  {
    icon: TrendingUp,
    value: '3x',
    label: 'Average ROI',
    iconColor: 'text-purple-600',
    bgGradient: 'from-purple-50 to-purple-100'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support Available',
    iconColor: 'text-orange-600',
    bgGradient: 'from-orange-50 to-orange-100'
  },
] as const;
