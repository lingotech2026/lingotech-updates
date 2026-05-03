import Image from "next/image";

const tools = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export default function ToolsMarquee() {
  return (
    <section className="py-12 md:py-16 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 mb-10">
        <h2 className="text-xs md:text-sm font-bold text-gray-900 text-center mb-4 uppercase">
          OUR TOOLS & TECHNOLOGIES
        </h2>
        <p className="text-center text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are proud to work with the most modern and respected technologies in the industry. 
          By utilizing cutting-edge stacks, we help organizations succeed and grow.
        </p>
      </div>

      <div className="relative flex overflow-hidden whitespace-nowrap bg-white py-4 w-full">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee items-center gap-12 md:gap-20 whitespace-nowrap px-6">
          {tools.concat(tools).map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center justify-center shrink-0 w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                width={80}
                height={80}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
