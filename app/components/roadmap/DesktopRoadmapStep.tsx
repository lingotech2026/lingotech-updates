/**
 * Desktop Roadmap Step Component
 * Displays a roadmap step in desktop view with positioned icon and content card
 */

import { LucideIcon } from "lucide-react";
import StepIcon from "./StepIcon";
import StepCard from "./StepCard";
import { StepColor, RoadmapLayout, PROGRESS_RING_CONFIG, STEP_PERCENTAGES } from "@/app/constants/roadmap";

interface DesktopRoadmapStepProps {
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
  /** Layout configuration for positioning */
  layout: RoadmapLayout;
  /** Progress dash array value */
  progressDashArray: number;
  /** Animation delay in milliseconds */
  animationDelay: number;
}

export default function DesktopRoadmapStep({
  Icon,
  stepNumber,
  title,
  description,
  colors,
  layout,
  progressDashArray,
  animationDelay,
}: DesktopRoadmapStepProps) {
  const { radius, strokeWidth, backgroundStrokeWidth, circumference } = PROGRESS_RING_CONFIG.desktop;
  const percentage = STEP_PERCENTAGES[stepNumber - 1];

  return (
    <div className="animate-fade-in" style={{ animationDelay: `${animationDelay}ms` }}>
      {/* Step Icon with Progress Ring */}
      <div
        className={`absolute ${layout.pointClass} z-20`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <StepIcon
          Icon={Icon}
          colors={colors}
          progressDashArray={progressDashArray}
          circumference={circumference}
          radius={radius}
          strokeWidth={strokeWidth}
          backgroundStrokeWidth={backgroundStrokeWidth}
          gradientId={`desktopGradient-${stepNumber}`}
          showPercentage={true}
          percentage={percentage}
        />
      </div>

      {/* Step Content Card */}
      <StepCard
        stepNumber={stepNumber}
        title={title}
        description={description}
        colors={colors}
        className={`absolute ${layout.contentClass} z-10`}
      />
    </div>
  );
}
