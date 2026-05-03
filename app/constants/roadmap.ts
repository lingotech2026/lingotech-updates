/**
 * Configuration constants for Product Development Roadmap visualization
 */

export interface StepColor {
  gradient1: string;
  gradient2: string;
  label: string;
  ring: string;
}

export interface RoadmapLayout {
  pointClass: string;
  contentClass: string;
}

/**
 * Color palette for roadmap step progression
 * Alternates between primary and secondary brand colors
 */
export const STEP_COLORS: StepColor[] = [
  {
    gradient1: "#142A4D",
    gradient2: "#2563eb",
    label: "text-primary-600",
    ring: "ring-primary-600/20"
  },
  {
    gradient1: "#0ea5e9",
    gradient2: "#38bdf8",
    label: "text-secondary-600",
    ring: "ring-secondary-600/20"
  },
  {
    gradient1: "#0f1f3a",
    gradient2: "#142A4D",
    label: "text-primary-700",
    ring: "ring-primary-700/20"
  },
  {
    gradient1: "#0ea5e9",
    gradient2: "#38bdf8",
    label: "text-secondary-600",
    ring: "ring-secondary-600/20"
  },
  {
    gradient1: "#142A4D",
    gradient2: "#0ea5e9",
    label: "text-primary-600",
    ring: "ring-primary-600/20"
  },
];

/**
 * Desktop layout positioning for roadmap steps
 * Coordinates aligned with the SVG path curve
 */
export const DESKTOP_ROADMAP_LAYOUT: RoadmapLayout[] = [
  {
    pointClass: "left-[10%] top-[70%]",
    contentClass: "left-[5%] top-[6%] -translate-x-[20%] w-[270px]",
  },
  {
    pointClass: "left-[30%] top-[35%]",
    contentClass: "left-[25%] top-[45%] -translate-x-[20%] w-[270px]",
  },
  {
    pointClass: "left-[50%] top-[22%]",
    contentClass: "left-[45%] top-[32%] -translate-x-[20%] w-[270px]",
  },
  {
    pointClass: "left-[70%] top-[60%]",
    contentClass: "left-[65%] top-[2%] -translate-x-[20%] w-[270px]",
  },
  {
    pointClass: "left-[90%] top-[26%]",
    contentClass: "left-[85%] top-[37%] -translate-x-[20%] w-[270px]",
  },
];

/**
 * Progress percentages for each step
 */
export const STEP_PERCENTAGES = [10, 25, 80, 90, 100];

/**
 * Calculate progress dash array for desktop view (circumference: 276)
 */
export const DESKTOP_PROGRESS_VALUES = [27.6, 69, 179.4, 220.8, 276];

/**
 * Calculate progress dash array for mobile view (circumference: 264)
 */
export const MOBILE_PROGRESS_VALUES = [26.4, 66, 171.6, 211.2, 264];

/**
 * SVG viewBox dimensions for desktop roadmap
 */
export const SVG_VIEWBOX = {
  width: 1200,
  height: 670,
};

/**
 * Progress ring configuration
 */
export const PROGRESS_RING_CONFIG = {
  desktop: {
    radius: 44,
    strokeWidth: 4,
    backgroundStrokeWidth: 2,
    circumference: 276,
  },
  mobile: {
    radius: 42,
    strokeWidth: 4,
    backgroundStrokeWidth: 3,
    circumference: 264,
  },
};
