import { Skill, Experience, Project, Testimonial, ContactInfo } from './types';

export const portfolioOwner = {
  name: 'G P Pragathi',
  profession: 'Full Stack Developer',
  headline: 'Architecting Scalable Frontends & Robust Cloud-Native Backends.',
  shortBio: 'I am a highly driven Full Stack Developer specializing in building scalable enterprise web applications, high-performance APIs, and interactive user interfaces. Committed to writing clean, maintainable, and ATS-optimized code to solve complex, real-world business challenges.',
  resumeUrl: '#resume-placeholder', // Customizable placeholder
  email: 'gppragathi97@gmail.com',
  phone: '+91 XXXXX XXXXX', // Customizable placeholder
  location: 'Bengaluru, India',
  socials: {
    github: 'https://github.com/your-github-username',
    linkedin: 'https://linkedin.com/in/your-linkedin-username',
    twitter: 'https://x.com/your-twitter-username'
  }
};

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React / Next.js', category: 'Frontend', progress: 95, iconName: 'Layers' },
  { name: 'TypeScript', category: 'Frontend', progress: 92, iconName: 'Code' },
  { name: 'Tailwind CSS', category: 'Frontend', progress: 95, iconName: 'Palette' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', progress: 94, iconName: 'FileCode' },
  { name: 'State Management (Zustand/Redux)', category: 'Frontend', progress: 88, iconName: 'Workflow' },

  // Backend
  { name: 'Node.js / Express', category: 'Backend', progress: 90, iconName: 'Server' },
  { name: 'Python / FastAPI', category: 'Backend', progress: 82, iconName: 'Terminal' },
  { name: 'REST & GraphQL APIs', category: 'Backend', progress: 90, iconName: 'Cpu' },

  // Database
  { name: 'PostgreSQL', category: 'Database', progress: 85, iconName: 'Database' },
  { name: 'MongoDB', category: 'Database', progress: 88, iconName: 'FolderClosed' },
  { name: 'Redis', category: 'Database', progress: 80, iconName: 'Zap' },

  // Tools & Cloud
  { name: 'Git & GitHub', category: 'Tools', progress: 92, iconName: 'GitBranch' },
  { name: 'Docker / Kubernetes', category: 'Tools', progress: 82, iconName: 'Box' },
  { name: 'AWS Cloud Services', category: 'Tools', progress: 80, iconName: 'Cloud' },
  { name: 'CI/CD Pipelines', category: 'Tools', progress: 85, iconName: 'Compass' }
];

export const experiencesData: Experience[] = [
  {
    company: 'TechNexus Solutions',
    role: 'Senior Full Stack Developer',
    duration: '2024 - Present',
    description: 'Architected and deployed production-grade microservices and serverless architectures using Node.js, Express, and AWS, enhancing overall system reliability by 35%. Led development of high-performance React and Next.js applications, optimizing bundle sizes and implementing server-side rendering (SSR) to cut first contentful paint (FCP) by 1.2s. Designed and optimized relational schemas (PostgreSQL) and NoSQL databases (MongoDB), implementing advanced query indexing that reduced API latency by 45%.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'AWS']
  },
  {
    company: 'CloudCore Systems',
    role: 'Full Stack Developer',
    duration: '2022 - 2024',
    description: 'Developed and maintained critical high-throughput web portals, handling over 50,000 active monthly users with React, TypeScript, and Tailwind CSS. Built and integrated robust, secure REST and GraphQL APIs, incorporating modern authentication standards (JWT, OAuth) and role-based access control (RBAC). Containerized applications using Docker and implemented automated CI/CD pipelines via GitHub Actions to streamline dev-to-production deployment times by 30%.',
    technologies: ['TypeScript', 'Express', 'MongoDB', 'Docker', 'Redis', 'React']
  },
  {
    company: 'Apex Software Labs',
    role: 'Software Engineer',
    duration: '2021 - 2022',
    description: 'Designed reusable component libraries using React, Tailwind CSS, and Storybook, securing WCAG AA accessibility standards across all customer-facing views. Built real-time collaborative features and chat widgets utilizing WebSockets, enabling seamless instant communication. Conducted rigorous unit, integration, and end-to-end testing with Jest and Cypress, raising test coverage metrics from 60% to 88%.',
    technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Git']
  }
];

export const projectsData: Project[] = [
  {
    title: 'Enterprise Analytics & Operations Dashboard',
    description: 'A real-time, interactive bento-grid dashboard tracking critical business KPIs, telemetry data streams, and predictive system analytics. Built with sub-second performance filtering and beautiful data visualizations using Recharts and D3.',
    category: 'Analytics Dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    githubUrl: 'https://github.com/your-github-username/enterprise-analytics-dashboard',
    liveUrl: 'https://your-dashboard-placeholder.com'
  },
  {
    title: 'Apex Headless E-Commerce Platform',
    description: 'A highly optimized headless storefront with lightning-fast static page generation, edge-computed shopping sessions, Stripe payment gateway integration, and fully secure, automated order workflows.',
    category: 'E-commerce Platform',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'GraphQL'],
    githubUrl: 'https://github.com/your-github-username/apex-headless-ecommerce',
    liveUrl: 'https://your-ecommerce-placeholder.com'
  },
  {
    title: 'Agentic Conversational AI Platform',
    description: 'An advanced full-stack chat application integrating state-of-the-art Gemini LLM services. Features dynamic contextual conversation memory, multi-modal file uploads, real-time code compilation preview, and responsive markdown rendering.',
    category: 'AI Assistant',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', '@google/genai', 'Tailwind CSS', 'Express'],
    githubUrl: 'https://github.com/your-github-username/agentic-ai-platform',
    liveUrl: 'https://your-ai-placeholder.com'
  },
  {
    title: 'Synchronous Collaborative Workspace',
    description: 'A real-time team workflow management platform with instant drag-and-drop kanban boards, real-time cursor tracking, automated event actions, and high-throughput state updates synchronized over secure WebSockets.',
    category: 'Task Manager',
    imageUrl: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'WebSockets', 'Zustand'],
    githubUrl: 'https://github.com/your-github-username/collaborative-workspace',
    liveUrl: 'https://your-workspace-placeholder.com'
  },
  {
    title: 'Secure Cloud Storage Drive',
    description: 'A full-stack cloud asset management tool featuring multi-format file uploads, drag-and-drop, secure URL sharing, token-based authorization access, and fully optimized image transformations on the fly.',
    category: 'SaaS Dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1543286386-7a38263be82e?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'D3.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/your-github-username/cloud-storage-drive',
    liveUrl: 'https://your-drive-placeholder.com'
  },
  {
    title: 'DevSpace Developer Portfolio',
    description: 'This exact premium, dark-themed responsive portfolio featuring bento layouts, interactive fluid hover states, and smooth spring animations to showcase professional achievements.',
    category: 'Portfolio Website',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide Icons'],
    githubUrl: 'https://github.com/your-github-username/dev-portfolio',
    liveUrl: 'https://your-portfolio-placeholder.com'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'ApexCorp SaaS',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Pragathi exceeded all our engineering expectations. She optimized our enterprise dashboard, which improved user engagement by 35% and cut load times to under a second. Her clear, professional communication and full stack technical mastery made collaboration seamless.',
    rating: 5
  },
  {
    name: 'Rohan Sen',
    role: 'Founder & CEO',
    company: 'PlatoFintech',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Pragathi built our financial MVP from the ground up in record time. The backend architecture is extremely secure and scales beautifully, while the frontend is visually striking and exceptionally responsive. She is an outstanding software professional.',
    rating: 5
  },
  {
    name: 'David Vance',
    role: 'Lead Architect',
    company: 'CloudLaunch',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80',
    review: 'Pragathi has a deep, intuitive understanding of cloud performance and code modularity. Her clean codebase, structured API designs, and focus on clean Tailwind components make her work exceptionally easy to scale and maintain.',
    rating: 5
  }
];

export const contactInfoData: ContactInfo[] = [
  {
    type: 'email',
    value: portfolioOwner.email,
    label: 'Send an email',
    iconName: 'Mail'
  },
  {
    type: 'phone',
    value: portfolioOwner.phone,
    label: 'Call or WhatsApp',
    iconName: 'Phone'
  },
  {
    type: 'location',
    value: portfolioOwner.location,
    label: 'Based in',
    iconName: 'MapPin'
  }
];
