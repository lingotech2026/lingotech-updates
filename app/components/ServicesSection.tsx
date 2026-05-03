import { SERVICES } from '../constants/services';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <h2 className="text-xs md:text-sm font-bold text-gray-900 text-center mb-4 uppercase">
          Services We Provide
        </h2>
        <p className="text-center text-xs text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover our services, built for the success of businesses to transform operations, 
          increase productivity, and achieve scalable growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}