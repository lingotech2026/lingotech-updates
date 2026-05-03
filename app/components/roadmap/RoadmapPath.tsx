/**
 * Roadmap Path SVG Component
 * Displays the animated path connecting roadmap steps in desktop view
 */

import { SVG_VIEWBOX } from "@/app/constants/roadmap";

export default function RoadmapPath() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${SVG_VIEWBOX.width} ${SVG_VIEWBOX.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(20, 42, 77, 0.25)" />
          <stop offset="25%" stopColor="rgba(14, 165, 233, 0.25)" />
          <stop offset="50%" stopColor="rgba(20, 42, 77, 0.25)" />
          <stop offset="75%" stopColor="rgba(14, 165, 233, 0.25)" />
          <stop offset="100%" stopColor="rgba(20, 42, 77, 0.25)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 50 470 Q 180 490, 320 260 Q 420 120, 600 150 Q 720 170, 840 400 Q 940 560, 1080 180"
        stroke="url(#pathGradient)"
        strokeWidth="3"
        strokeDasharray="10 6"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        className="animate-dash"
      />
    </svg>
  );
}
