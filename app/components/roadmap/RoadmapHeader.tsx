/**
 * Section Header Component for Roadmap
 * Displays the title, subtitle, and decorative elements
 */

export default function RoadmapHeader() {
  return (
    <div className="mb-16 md:mb-20 lg:mb-28 text-center space-y-6">

      {/* Main Title */}
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 leading-[1.15] tracking-tight">
          Product Development{' '}
          <span className="block mt-2 bg-linear-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
            Roadmap
          </span>
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-body max-w-3xl mx-auto leading-relaxed">
          A structured approach that transforms your vision into a market-ready product
        </p>
      </div>
    </div>
  );
}
