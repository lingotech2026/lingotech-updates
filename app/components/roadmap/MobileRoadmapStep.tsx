/**
 * Mobile Roadmap Step Component
 * Displays a roadmap step in mobile/tablet view with icon, progress, and content
 */

import { LucideIcon } from "lucide-react";
import StepIcon from "./StepIcon";
import { StepColor, PROGRESS_RING_CONFIG } from "@/app/constants/roadmap";

interface MobileRoadmapStepProps {
  /** Lucide icon component */
  Icon: LucideIcon;
  /** Step number (1-indexed) */
  stepNumber: number;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Color configuration */
  colors: StepColor;
  /** Progress dash array value */
  progressDashArray: number;
  /** Whether this is the last step */
  isLast: boolean;
  /** Animation delay in milliseconds */
  animationDelay: number;
}

export default function MobileRoadmapStep({
  Icon,
  stepNumber,
  title,
  description,
  colors,
  progressDashArray,
  isLast,
  animationDelay,
}: MobileRoadmapStepProps) {
  const { radius, strokeWidth, backgroundStrokeWidth, circumference } = PROGRESS_RING_CONFIG.mobile;

  return (
    <div
      className="relative pl-24 md:pl-28 animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Connecting Line */}
      {!isLast && (
        <div
          className="absolute left-10 md:left-11 top-24 bottom-0 w-0.5"
          style={{
            background: 'repeating-linear-gradient(to bottom, rgba(20, 42, 77, 0.12) 0px, rgba(20, 42, 77, 0.12) 8px, transparent 8px, transparent 14px)'
          }}
          aria-hidden="true"
        />
      )}

      {/* Step Icon */}
      <div className="absolute left-0 top-0">
        <StepIcon
          Icon={Icon}
          colors={colors}
          progressDashArray={progressDashArray}
          circumference={circumference}
          radius={radius}
          strokeWidth={strokeWidth}
          backgroundStrokeWidth={backgroundStrokeWidth}
          gradientId={`mobileGradient-${stepNumber}`}
          iconSize="w-7 h-7 md:w-8 md:h-8"
          containerSize="w-20 h-20 md:w-24 md:h-24"
          iconContainerSize="w-14 h-14 md:w-16 md:h-16"
        />
      </div>

      {/* Step Content Card */}
      <div className="group">
        <div className="p-px rounded-2xl bg-linear-to-br from-primary-600/12 via-secondary-600/8 to-primary-600/12 hover:from-primary-600/18 hover:via-secondary-600/12 hover:to-primary-600/18 transition-all duration-300">
          <div className="rounded-2xl border border-border/40 bg-surface/95 backdrop-blur-sm p-6 md:p-8 shadow-lg hover:shadow-xl hover:bg-surface transition-all duration-300">
            {/* Step Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-extrabold tracking-[0.15em] uppercase ${colors.label} bg-primary-600/5 px-3.5 py-1.5 rounded-full border border-border/20`}>
                Step {String(stepNumber).padStart(2, "0")}
              </span>
              <div className="h-px flex-1 bg-linear-to-r from-border/40 to-transparent" aria-hidden="true" />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-700 mb-3.5 leading-snug group-hover:text-primary-600 transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-body leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
