/**
 * Reusable Progress Ring Component
 * Displays a circular progress indicator with gradient colors
 */

interface ProgressRingProps {
  /** Progress value (0-circumference) */
  progress: number;
  /** Circle circumference */
  circumference: number;
  /** Circle radius */
  radius: number;
  /** Stroke width for progress arc */
  strokeWidth: number;
  /** Background stroke width */
  backgroundStrokeWidth: number;
  /** Unique gradient ID */
  gradientId: string;
  /** Gradient start color */
  gradientStart: string;
  /** Gradient end color */
  gradientEnd: string;
  /** Optional middle gradient color */
  gradientMiddle?: string;
}

export default function ProgressRing({
  progress,
  circumference,
  radius,
  strokeWidth,
  backgroundStrokeWidth,
  gradientId,
  gradientStart,
  gradientEnd,
  gradientMiddle,
}: ProgressRingProps) {
  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="rgba(20, 42, 77, 0.08)"
        strokeWidth={backgroundStrokeWidth}
      />
      
      {/* Progress Arc */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeDasharray={`${progress} ${circumference}`}
        strokeLinecap="round"
        className="transition-all duration-700 ease-out drop-shadow-md"
      />
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradientStart} />
          {gradientMiddle && <stop offset="50%" stopColor={gradientMiddle} />}
          <stop offset="100%" stopColor={gradientEnd} />
        </linearGradient>
      </defs>
    </svg>
  );
}
