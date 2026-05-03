export interface Technology {
    id: string;
    name: string;
    iconClass: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export const TECHNOLOGIES: Technology[] = [
    // Frontend
    { id: 'react', name: 'React', iconClass: 'devicon-react-original', category: 'frontend' },
    { id: 'nextjs', name: 'Next.js', iconClass: 'devicon-nextjs-original', category: 'frontend' },
    { id: 'typescript', name: 'TypeScript', iconClass: 'devicon-typescript-plain', category: 'frontend' },
    { id: 'javascript', name: 'JavaScript', iconClass: 'devicon-javascript-plain', category: 'frontend' },
    { id: 'html5', name: 'HTML5', iconClass: 'devicon-html5-plain', category: 'frontend' },
    { id: 'css3', name: 'CSS3', iconClass: 'devicon-css3-plain', category: 'frontend' },
    { id: 'tailwind', name: 'Tailwind CSS', iconClass: 'devicon-tailwindcss-original', category: 'frontend' },
    
    // Backend
    { id: 'nodejs', name: 'Node.js', iconClass: 'devicon-nodejs-plain', category: 'backend' },
    { id: 'python', name: 'Python', iconClass: 'devicon-python-plain', category: 'backend' },
    { id: 'express', name: 'Express', iconClass: 'devicon-express-original', category: 'backend' },
    { id: 'fastapi', name: 'FastAPI', iconClass: 'devicon-fastapi-plain', category: 'backend' },
    { id: 'django', name: 'Django', iconClass: 'devicon-django-plain', category: 'backend' },

    // Database
    { id: 'mongodb', name: 'MongoDB', iconClass: 'devicon-mongodb-plain', category: 'database' },
    { id: 'postgresql', name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain', category: 'database' },
    { id: 'mysql', name: 'MySQL', iconClass: 'devicon-mysql-plain', category: 'database' },
    { id: 'redis', name: 'Redis', iconClass: 'devicon-redis-plain', category: 'database' },

    // DevOps & Cloud
    { id: 'docker', name: 'Docker', iconClass: 'devicon-docker-plain', category: 'devops' },
    { id: 'aws', name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark', category: 'devops' },
    { id: 'gcp', name: 'Google Cloud', iconClass: 'devicon-googlecloud-plain', category: 'devops' },

    // Tools
    { id: 'git', name: 'Git', iconClass: 'devicon-git-plain', category: 'tools' },
    { id: 'github', name: 'GitHub', iconClass: 'devicon-github-original', category: 'tools' },
    { id: 'vscode', name: 'VS Code', iconClass: 'devicon-vscode-plain', category: 'tools' },
    { id: 'figma', name: 'Figma', iconClass: 'devicon-figma-plain', category: 'tools' },
];
