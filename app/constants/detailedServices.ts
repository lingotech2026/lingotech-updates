export interface DetailedService {
  title: string;
  description: string;
  features: string[];
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    title: 'Custom Software Development',
    description: 'We build tailored software solutions that solve complex business challenges and drive efficiency.',
    features: ['Requirement Analysis', 'Architecture Design', 'Full-stack Development', 'Quality Assurance'],
  },
  {
    title: 'Mobile App Development',
    description: 'Create high-performance iOS and Android applications with modern frameworks like React Native.',
    features: ['UI/UX Design', 'Cross-platform Coding', 'App Store Optimization', 'Maintenance'],
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Boost your online visibility and attract more leads with data-driven SEO and marketing strategies.',
    features: ['Keywords Research', 'On-page Optimization', 'Link Building', 'Content Strategy'],
  },
  {
    title: 'UI/UX Design',
    description: 'Design intuitive and engaging user experiences that delight your customers and improve conversion.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
  },
];
