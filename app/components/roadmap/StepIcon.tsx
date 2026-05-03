/**
 * Step Icon Component with Progress Ring
 * Displays an icon within a progress ring indicator
 */

import { LucideIcon } from "lucide-react";
import ProgressRing from "./ProgressRing";
import { StepColor } from "@/app/constants/roadmap";

interface StepIconProps {
  /** Lucide icon component */
  Icon: LucideIcon;
  /** Color configuration */
  colors: StepColor;
  /** Progress dash array value */
  progressDashArray: number;
  /** Circumference of the progress ring */
  circumference: number;
  /** Radius of the progress circle */
  radius: number;
  /** Stroke width for progress arc */
  strokeWidth: number;
  /** Background stroke width */
  backgroundStrokeWidth: number;
  /** Unique gradient ID */
  gradientId: string;
  /** Icon size (w-* h-* classes) */
  iconSize?: string;
  /** Container size (w-* h-* classes) */
  containerSize?: string;
  /** Icon container size (w-* h-* classes) */
  iconContainerSize?: string;
  /** Whether to show percentage label on hover */
  showPercentage?: boolean;
  /** Percentage value to display */
  percentage?: number;
}

export default function StepIcon({
  Icon,
  colors,
  progressDashArray,
  circumference,
  radius,
  strokeWidth,
  backgroundStrokeWidth,
  gradientId,
  iconSize = "w-9 h-9",
  containerSize = "w-32 h-32",
  iconContainerSize = "w-20 h-20",
  showPercentage = false,
  percentage,
}: StepIconProps) {
  return (
    <div className="group cursor-pointer">
      <div className={`relative ${containerSize} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        {/* Outer Glow Effect */}
        <div
          className="absolute inset-0 rounded-full bg-linear-to-br from-primary-600/20 to-secondary-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        />

        {/* Progress Ring */}
        <ProgressRing
          progress={progressDashArray}
          circumference={circumference}
          radius={radius}
          strokeWidth={strokeWidth}
          backgroundStrokeWidth={backgroundStrokeWidth}
          gradientId={gradientId}
          gradientStart={colors.gradient1}
          gradientEnd={colors.gradient2}
          gradientMiddle={colors.gradient1}
        />

        {/* Icon Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${iconContainerSize} rounded-full bg-linear-to-br from-surface to-background shadow-2xl flex items-center justify-center ${colors.label} group-hover:shadow-3xl group-hover:from-background group-hover:to-surface transition-all duration-500 border border-border/40 ${colors.ring} ring-1`}>
            <Icon className={`${iconSize} transition-transform duration-500 group-hover:scale-115`} strokeWidth={2} aria-hidden="true" />
          </div>
        </div>

        {/* Percentage Label (optional) */}
        {showPercentage && percentage !== undefined && (
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true">
            <span className={`text-xs font-extrabold ${colors.label} bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xl border border-border/50 whitespace-nowrap`}>
              {percentage}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
