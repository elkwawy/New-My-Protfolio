// Importing necessary types
import { ProjectType, TestimonialType, PostType, SkillType } from "@/lib/types";

// Projects data
export const projects: ProjectType[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A fully functional e-commerce website with product catalog, shopping cart, and checkout e-commerce website with product catalog, shopping cart, and checkout.",
    image:
      "https://www.softwaresuggest.com/blog/wp-content/uploads/2021/05/An-Online-Store-How-to-Choose-Your-Best-Ecommerce-Platform-02.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe",],
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/ahmedElkwawy/ecommerce-platform",
    featured: true,
    content: `
      # E-Commerce Platform

      ## Overview
      This project is a comprehensive e-commerce solution built with modern web technologies. It features a responsive design, product search and filtering, shopping cart functionality, and secure checkout with Stripe integration.

      ## Technologies Used
      - React for UI components
      - Next.js for server-side rendering and routing
      - Tailwind CSS for styling
      - Stripe for payment processing
      - Vercel for deployment

      ## Challenges and Solutions
      One of the main challenges was implementing a performant product filtering system. I solved this by using efficient state management and memoization techniques to prevent unnecessary re-renders.

      ## Outcome
      The platform has been well-received by users, with positive feedback on its ease of use and responsiveness.
    `,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://taskmanager.example.com",
    githubUrl: "https://github.com/ahmedElkwawy/task-manager",
    featured: true,
    content: `
      # Task Management Application

      ## Overview
      A collaborative task management tool that enables teams to organize projects, assign tasks, and track progress in real-time.

      ## Technologies Used
      - React for the frontend
      - Firebase for authentication and real-time database
      - TypeScript for type safety
      - Tailwind CSS for styling

      ## Features
      - Real-time collaboration
      - Drag-and-drop task organization
      - Task assignments and due dates
      - Progress tracking and reporting

      ## Challenges and Solutions
      Implementing real-time updates while maintaining performance was challenging. I used Firebase's efficient listeners and optimized re-renders to keep the application responsive even with multiple users.
    `,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills.",
    image:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/ahmedElkwawy/portfolio",
    featured: true,
    content: `
      # Portfolio Website

      ## Overview
      A professionally designed portfolio website to showcase my projects, skills, and experience to potential clients and employers.

      ## Technologies Used
      - Next.js for server-side rendering and static site generation
      - TypeScript for type safety
      - Tailwind CSS for responsive styling
      - Framer Motion for animations

      ## Features
      - Responsive design that works on all devices
      - Theme switching (light/dark/system)
      - Project showcase with detailed case studies
      - Contact form with form validation

      ## Implementation Details
      I used Next.js's static site generation for optimal performance and SEO. The project pages are generated from markdown files, making it easy to add new projects or update existing ones.
    `,
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description:
      "A weather application with forecast data, location search, and interactive maps.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "JavaScript", "Weather API", "CSS"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/ahmedElkwawy/weather-app",
    featured: false,
    content: `
      # Weather Dashboard

      ## Overview
      An intuitive weather application that provides current conditions and forecasts for locations worldwide.

      ## Technologies Used
      - React for UI components
      - Weather API for data
      - CSS for styling
      - Geolocation API for user location

      ## Features
      - Current weather conditions
      - 5-day forecast
      - Location search
      - Save favorite locations
      - Automatic detection of user's location

      ## Learning Outcomes
      This project helped me improve my skills in working with third-party APIs and geolocation services, as well as enhancing my UI design capabilities for data visualization.
    `,
  },
];

// Testimonials data
export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      "Ahmed transformed our concept into a beautiful, functional website that exceeded our expectations. His attention to detail and commitment to quality are outstanding.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    content:
      "Working with Ahmed was a pleasure. He understood our vision immediately and delivered a product that perfectly aligned with our brand. His technical skills and creativity make him a standout developer.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "UI/UX Designer",
    content:
      "Ahmed is a developer who truly understands design. He implemented my designs with pixel-perfect accuracy and added thoughtful interactions that enhanced the user experience.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Blog posts data
export const posts: PostType[] = [
  {
    id: "modern-css-techniques",
    title: "Modern CSS Techniques You Should Know in 2023",
    excerpt:
      "Explore the latest CSS features and techniques that are revolutionizing web development.",
    date: "2023-04-15",
    image:
      "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["CSS", "Web Development", "Frontend"],
    content: `
      # Modern CSS Techniques You Should Know in 2023

      CSS has evolved significantly in recent years, with new features and capabilities that make it more powerful than ever. In this article, we'll explore some of the most exciting CSS techniques that every front-end developer should know.

      ## 1. CSS Grid Layout

      CSS Grid has revolutionized how we create layouts. It provides a two-dimensional grid-based layout system that makes it easy to design complex web pages.

      \`\`\`css
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
      }
      \`\`\`

      ## 2. CSS Custom Properties (Variables)

      CSS Variables allow you to store values in custom properties and reuse them throughout your stylesheet.

      \`\`\`css
      :root {
        --primary-color: #3490dc;
        --secondary-color: #ffed4a;
      }

      .button {
        background-color: var(--primary-color);
        color: white;
      }
      \`\`\`

      ## 3. CSS Animations and Transitions

      Modern websites use subtle animations to enhance user experience. CSS makes it easy to create smooth transitions and complex animations.

      \`\`\`css
      .card {
        transition: transform 0.3s ease;
      }

      .card:hover {
        transform: translateY(-5px);
      }
      \`\`\`

      ## 4. Container Queries

      Container queries are the future of responsive design, allowing you to style elements based on their container's size rather than the viewport.

      ## 5. Conclusion

      Staying up-to-date with modern CSS techniques will help you create more efficient, maintainable, and visually appealing websites. Experiment with these techniques in your next project!
    `,
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for React Developers",
    excerpt:
      "Learn how to leverage TypeScript effectively in your React projects for better code quality and developer experience.",
    date: "2023-05-22",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["TypeScript", "React", "Frontend"],
    content: `
      # TypeScript Best Practices for React Developers

      TypeScript has become an essential tool for React developers, providing type safety and improved developer experience. In this article, we'll cover best practices for using TypeScript in your React projects.

      ## 1. Define Prop Types Properly

      Always define your component props using interfaces or type aliases:

      \`\`\`typescript
      interface ButtonProps {
        text: string;
        onClick: () => void;
        variant?: 'primary' | 'secondary' | 'ghost';
        disabled?: boolean;
      }

      const Button: React.FC<ButtonProps> = ({ 
        text, 
        onClick, 
        variant = 'primary', 
        disabled = false 
      }) => {
        // Component implementation
      };
      \`\`\`

      ## 2. Use Discriminated Unions for State

      When managing complex state, use discriminated unions to handle different states:

      \`\`\`typescript
      type RequestState<T> = 
        | { status: 'idle' }
        | { status: 'loading' }
        | { status: 'success', data: T }
        | { status: 'error', error: Error };
      \`\`\`

      ## 3. Type Your Hooks Correctly

      Make sure to type your custom hooks properly:

      \`\`\`typescript
      function useUser<T>(): RequestState<T> {
        // Hook implementation
      }
      \`\`\`

      ## 4. Use TypeScript's Utility Types

      TypeScript provides several utility types that can be very helpful:

      \`\`\`typescript
      type UserFormValues = Pick<User, 'name' | 'email'>;
      type ReadOnlyUser = Readonly<User>;
      type PartialConfig = Partial<Config>;
      \`\`\`

      ## 5. Conclusion

      Adopting TypeScript in your React projects can significantly improve code quality and developer experience. By following these best practices, you'll be able to leverage TypeScript effectively and avoid common pitfalls.
    `,
  },
  {
    id: "nextjs-app-router",
    title: "Understanding Next.js App Router: A Complete Guide",
    excerpt:
      "A comprehensive guide to the new App Router in Next.js 13 and beyond.",
    date: "2023-06-10",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Next.js", "React", "Web Development"],
    content: `
      # Understanding Next.js App Router: A Complete Guide

      Next.js 13 introduced a new App Router with a completely new way of building applications. In this guide, we'll explore the App Router and how it differs from the Pages Router.

      ## 1. App Router Overview

      The App Router is built on React Server Components and provides a new way to build applications with shared layouts, nested routing, loading states, error handling, and more.

      ## 2. File-Based Routing

      The App Router uses a file-based routing system where folders define routes:

      \`\`\`
      app/
        layout.tsx
        page.tsx
        about/
          page.tsx
        blog/
          [slug]/
            page.tsx
      \`\`\`

      ## 3. Server Components vs. Client Components

      By default, components in the App Router are Server Components. You can opt into Client Components by adding the 'use client' directive at the top of your file:

      \`\`\`typescript
      'use client'

      import { useState } from 'react'

      export default function Counter() {
        const [count, setCount] = useState(0)
        return (
          <button onClick={() => setCount(count + 1)}>
            Count: {count}
          </button>
        )
      }
      \`\`\`

      ## 4. Data Fetching

      The App Router simplifies data fetching with async/await in Server Components:

      \`\`\`typescript
      async function getData() {
        const res = await fetch('https://api.example.com/data')
        return res.json()
      }

      export default async function Page() {
        const data = await getData()
        return <main>{/* Use data */}</main>
      }
      \`\`\`

      ## 5. Conclusion

      The Next.js App Router represents a significant shift in how we build React applications, offering improved performance, better developer experience, and more intuitive patterns for common use cases.
    `,
  },
];

// Skills data
export const skills: SkillType[] = [
  {
    category: "Core",
    items: [
      { name: "HTML5", icon: "/icons/html5.svg" },
      { name: "CSS3", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Framer Motion", icon: "/icons/framer.svg" },
    ],
  },
  {
    category: " UI Libraries",
    items: [
      { name: "Ant Design", icon: "/icons/Ant Design.svg" },
      { name: "Shadcn", icon: "/icons/shadcn.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Bootstrap", icon: "/icons/Bootstrap.svg" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux Toolkit", icon: "/icons/redux-toolkit.svg" },
      { name: "React Query", icon: "/icons/react-query.svg" },
      { name: "Context API", icon: "/icons/context-API.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
      { name: "Vite", icon: "/icons/vite.svg" },
      { name: "Vercel", icon: "/icons/vercel.svg" },
      { name: "Netlify", icon: "/icons/netlify.svg" },
    ],
  },
];
