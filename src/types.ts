export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  progress: number; // 0 to 100
  iconName: string; // Used to map to Lucide icons
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  category: 'SaaS Dashboard' | 'E-commerce Platform' | 'AI Assistant' | 'Portfolio Website' | 'Task Manager' | 'Analytics Dashboard';
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  review: string;
  rating: number; // 1-5
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'location';
  value: string;
  label: string;
  iconName: string;
}
