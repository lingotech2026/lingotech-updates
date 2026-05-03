export interface Service {
    id: number;
    title: string;
    description: string;
    iconPath: string;
    backTitle: string;
    backPoints: string[];
}

export const SERVICES: Service[] = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Creating lasting impressions through crafted experiences. We build responsive, fast-loading, and SEO-friendly websites using modern frameworks.',
        iconPath: '/icons/WebDevelopment.jpg',
        backTitle: 'Web Development Services',
        backPoints: [
            'Custom website development',
            'Progressive Web Apps (PWA)',
            'E-commerce solutions',
            'CMS integration & customization',
            'Performance optimization',
        ],
    },
    {
        id: 2,
        title: 'Software Development',
        description: 'Empowering businesses through innovative software development. We build tailored solutions that solve complex challenges and drive efficiency.',
        iconPath: '/icons/Software Development.jpeg',
        backTitle: 'Software Solutions',
        backPoints: [
            'Requirement analysis & architecture',
            'Full-stack development',
            'API design & integration',
            'Cloud-native applications',
            'Quality assurance & testing',
        ],
    },
    {
        id: 3,
        title: 'Mobile App Development',
        description: 'From native to cross-platform: integration made seamless. High-performance iOS and Android applications built with modern frameworks.',
        iconPath: '/icons/mobile.jpg',
        backTitle: 'Mobile App Solutions',
        backPoints: [
            'iOS & Android development',
            'Cross-platform with React Native',
            'App Store optimization',
            'Push notifications & analytics',
            'Ongoing maintenance & updates',
        ],
    },
    {
        id: 4,
        title: 'Search Engine Optimization (SEO)',
        description: 'Boosting visibility and driving organic traffic to your business with data-driven strategies and proven methodologies.',
        iconPath: '/icons/SEO_1.jpg',
        backTitle: 'SEO Services',
        backPoints: [
            'Keyword research & analysis',
            'On-page & technical SEO',
            'Link building strategy',
            'Content optimization',
            'Analytics & reporting',
        ],
    },
    {
        id: 5,
        title: 'Web Design & UX',
        description: 'Designing intuitive and engaging user experiences that delight customers and improve conversion rates.',
        iconPath: '/icons/ux.jpeg',
        backTitle: 'Design & UX Services',
        backPoints: [
            'User research & personas',
            'Wireframing & prototyping',
            'Visual design systems',
            'Usability testing',
            'Responsive design',
        ],
    },
];
