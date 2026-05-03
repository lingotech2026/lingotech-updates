import {
  LucideIcon,
  Users,
  Zap,
  TrendingUp,
  Target,
  Award,
  Clock,
  Shield,
  SearchCheck,
  Lightbulb,
  Code2,
  FlaskConical,
  Rocket,
} from 'lucide-react';

export interface RoadmapStep {
  icon: LucideIcon;
  title: string;
  description: string;
  outcome: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const MISSION_CONTENT = [
  "We are a dedicated team of technology professionals committed to delivering innovative solutions that drive business growth. With years of industry experience and a passion for excellence, we help organizations navigate the digital landscape with confidence.",
  "Our mission is to transform complex business challenges into elegant technological solutions. We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering solutions that exceed expectations.",
  "Our expertise spans cutting-edge technologies and proven methodologies, ensuring your projects are built on solid foundations with scalability, security, and performance in mind. We don't just write code—we craft solutions that make a real difference to your business.",
];

export const ABOUT_BENEFITS: Benefit[] = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with years of industry experience and a proven track record of delivering exceptional results.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Fast turnaround without compromising on quality. We understand the importance of timelines in the business world.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built to grow with your business needs. Our solutions are designed with scalability and future expansion in mind.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "We focus on understanding and achieving your business objectives through targeted technological solutions.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure that every deliverable meets the highest standards.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock dedicated support to ensure your systems run smoothly and issues are resolved promptly.",
  },
];

export const ABOUT_FEATURES: string[] = [
  "Cutting-edge technology stack",
  "24/7 dedicated support",
  "Agile development methodology",
  "Transparent communication",
  "Cost-effective solutions",
  "Proven track record",
  "Scalable architecture",
  "Security-first approach",
  "Regular progress updates",
  "Scalable solutions for global markets",
  "Custom solutions",
  "Industry best practices",
];

export const ABOUT_VALUES: Value[] = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business dealings and relationships.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, continuously improving and innovating our solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and work closely with our clients to achieve shared goals.",
  },
];

export const PRODUCT_ROADMAP_STEPS: RoadmapStep[] = [
  {
    icon: SearchCheck,
    title: "Discovery & Strategy",
    description: "We align business goals, user needs, and technical constraints through workshops, research, and product planning.",
    outcome: "Clear vision, roadmap priorities, and success metrics",
  },
  {
    icon: Lightbulb,
    title: "UX/UI Design",
    description: "Our team translates ideas into user flows, wireframes, and polished interfaces focused on clarity, usability, and brand consistency.",
    outcome: "Validated design system and high-fidelity prototypes",
  },
  {
    icon: Code2,
    title: "Agile Development",
    description: "We build in iterative sprints with clean architecture, secure coding standards, and transparent progress updates.",
    outcome: "Scalable product increments ready for testing",
  },
  {
    icon: FlaskConical,
    title: "Testing & QA",
    description: "Comprehensive functional, performance, and regression testing ensures reliability before release.",
    outcome: "Production-ready quality with reduced risk",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "After go-live, we monitor performance, gather feedback, and continuously improve features for long-term growth.",
    outcome: "Measured outcomes and ongoing product evolution",
  },
];
