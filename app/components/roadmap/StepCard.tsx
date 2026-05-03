/**
 * Step Card Component
 * Displays step details with title and description
 */

import { StepColor } from "@/app/constants/roadmap";

interface StepCardProps {
  /** Step number (1-indexed) */
  stepNumber: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Color configuration */
  colors: StepColor;
  /** Additional CSS classes for positioning (optional) */
  className?: string;
}

export default function StepCard({
  stepNumber,
  title,
  description,
  colors,
  className = "",
}: StepCardProps) {
  return (
    <div className={`group/card ${className}`}>
      <div className="relative p-px rounded-2xl bg-linear-to-br from-primary-600/15 via-secondary-600/10 to-primary-600/15 group-hover/card:from-primary-600/25 group-hover/card:via-secondary-600/15 group-hover/card:to-primary-600/25 transition-all duration-500">
        <div className="bg-linear-to-br from-surface via-surface/98 to-background/95 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border border-border/30">
          {/* Step Label */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className={`text-[10px] font-extrabold tracking-[0.15em] uppercase ${colors.label} bg-linear-to-r from-primary-600/8 to-secondary-600/8 px-3.5 py-1.5 rounded-full border border-border/20`}>
              Step {String(stepNumber).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-border/40 to-transparent" aria-hidden="true" />
          </div>

          {/* Title */}
          <h3 className="text-xl xl:text-2xl font-bold text-primary-700 leading-snug mb-3 group-hover/card:text-primary-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-body/90 text-sm xl:text-[15px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
