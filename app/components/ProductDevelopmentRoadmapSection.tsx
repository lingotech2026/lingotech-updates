/**
 * Product Development Roadmap Section
 * Displays the development process as an interactive visual roadmap
 */

import { PRODUCT_ROADMAP_STEPS } from "../constants/about";
import {
  STEP_COLORS,
  DESKTOP_ROADMAP_LAYOUT,
  DESKTOP_PROGRESS_VALUES,
  MOBILE_PROGRESS_VALUES,
} from "../constants/roadmap";
import { PlaneTakeoff } from "lucide-react";
import RoadmapHeader from "./roadmap/RoadmapHeader";
import RoadmapPath from "./roadmap/RoadmapPath";
import DesktopRoadmapStep from "./roadmap/DesktopRoadmapStep";
import MobileRoadmapStep from "./roadmap/MobileRoadmapStep";

export default function ProductDevelopmentRoadmapSection() {

  return (
   <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40 bg-linear-to-b from-background via-surface to-background overflow-hidden">
      {/* Ambient Background Gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-600/4 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-secondary-600/4 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Content Container */}
    <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-400 mx-auto">
        {/* Section Header */}
        <RoadmapHeader />

        {/* Desktop Roadmap Visualization */}
      <div className="hidden xl:block relative h-168 rounded-2xl md:rounded-3xl bg-linear-to-br from-surface/95 via-surface/80 to-surface/95 backdrop-blur-xl border border-border/40 p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-visible">
          {/* Enhanced Background Blur Effects */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-80 h-64 md:h-80 bg-primary-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-80 h-64 md:h-80 bg-secondary-600/5 rounded-full blur-3xl" />
          </div>

          {/* SVG Path */}
          <RoadmapPath />

          {/* Decorative Icon */}
          <div className="absolute right-[8%] top-[10%] text-primary-600/20 animate-float" aria-hidden="true">
            <PlaneTakeoff className="w-16 h-16 rotate-12" strokeWidth={1.5} />
          </div>

          {/* Roadmap Steps */}
          {PRODUCT_ROADMAP_STEPS.map((step, index) => {
            const layout = DESKTOP_ROADMAP_LAYOUT[index];
            const colors = STEP_COLORS[index];
            const progressDashArray = DESKTOP_PROGRESS_VALUES[index];

            return (
              <DesktopRoadmapStep
                key={step.title}
                Icon={step.icon}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                colors={colors}
                layout={layout}
                progressDashArray={progressDashArray}
                animationDelay={index * 150}
              />
            );
          })}
        </div>

        {/* Mobile & Tablet Roadmap */}
        <div className="xl:hidden space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
          {PRODUCT_ROADMAP_STEPS.map((step, index) => {
            const isLast = index === PRODUCT_ROADMAP_STEPS.length - 1;
            const colors = STEP_COLORS[index];
            const progressDashArray = MOBILE_PROGRESS_VALUES[index];

            return (
              <MobileRoadmapStep
                key={step.title}
                Icon={step.icon}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                colors={colors}
                progressDashArray={progressDashArray}
                isLast={isLast}
                animationDelay={index * 100}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
