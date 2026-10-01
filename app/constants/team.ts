export interface TeamMember {
  image: string;
  name: string;
  role: string;
  alt?: string;
  imageWidth?: number;
  imageHeight?: number;
  bio?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    image: '/team/shishab.jpeg',
    name: 'Shishab Shrestha',
    role: 'Co-Founder & CEO',
    alt: 'Shishab Shrestha - Co-Founder & CEO at Lingotech Solutions',
    imageWidth: 860,
    imageHeight: 1073,
    bio: 'Co-Founder & CEO leading strategy, partnerships, and operations at Lingotech Solutions.',
  },
  {
    image: '/team/nirajandhungel.png',
    name: 'Nirajan Dhungel',
    role: 'Co-Founder & CTO / Software Engineer',
    alt: 'Nirajan Dhungel - Co-Founder & CTO / Software Engineer at Lingotech Solutions',
    imageWidth: 1254,
    imageHeight: 1254,
    bio: 'Co-Founder & CTO at Lingotech Solutions, specialized in full-stack software engineering, scalable architectures, and modern web applications.',
  },
  {
    image: '/team/nirush.png',
    name: 'Nirush Man Shrestha',
    role: 'Co-Founder & CPO / Software Engineer',
    alt: 'Nirush Man Shrestha - Co-Founder & CPO / Software Engineer at Lingotech Solutions',
    imageWidth: 2048,
    imageHeight: 2048,
    bio: 'Co-Founder & CPO driving user experience, product design, and software engineering.',
  },
];
