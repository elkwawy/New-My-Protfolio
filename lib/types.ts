// Project type
export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  content: string;
}

// Testimonial type
export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

// Blog post type
export interface PostType {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  content: string;
}

// Skill type
export interface SkillType {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}