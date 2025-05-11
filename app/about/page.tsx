import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { FileDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Me | Ahmed Elkwawy',
  description: 'Learn more about Ahmed Elkwawy, a frontend developer based in Cairo, Egypt',
};

export default function AboutPage() {
  return (
    <div className="container-custom py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Ahmed Elkwawy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              priority
            />
          </div>
        </div>
        
        <div>
          <h1 className="heading-lg mb-6">About Me</h1>
          
          <div className="space-y-4 text-lg mb-8">
            <p>
              Hello! I'm <span className="font-semibold">Ahmed Elkwawy</span>, a passionate Frontend Developer currently in my final year at the Faculty of Computers and Information.
            </p>
            <p>
              My journey in web development began with a simple curiosity about how websites work, which quickly evolved into a deep passion for creating beautiful, functional, and user-friendly interfaces.
            </p>
            <p>
              I specialize in modern frontend technologies like React, Next.js, and TypeScript, with a strong focus on creating responsive and accessible web applications. I'm also familiar with backend technologies, which helps me communicate effectively with backend developers and understand the full stack.
            </p>
            <p>
              As a freelancer, I've had the opportunity to work on diverse projects, from e-commerce websites to productivity applications, giving me a broad perspective on different business needs and user experiences.
            </p>
            <p>
              When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/ahmed-elkwawy-cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="heading-md text-center mb-10">My Journey</h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="relative pl-8 pb-8 border-l border-primary/30">
            <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary"></div>
            <div className="mb-1 text-xl font-bold">Computer Science Student</div>
            <div className="mb-2 text-primary">2020 - Present</div>
            <p className="text-muted-foreground">
              Pursuing my bachelor's degree in Computer Science at the Faculty of Computers and Information, where I've gained a solid foundation in programming, algorithms, and software development.
            </p>
          </div>
          
          <div className="relative pl-8 pb-8 border-l border-primary/30">
            <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary"></div>
            <div className="mb-1 text-xl font-bold">Freelance Frontend Developer</div>
            <div className="mb-2 text-primary">2021 - Present</div>
            <p className="text-muted-foreground">
              Working with clients around the world to create responsive, user-friendly web applications. Specializing in React, Next.js, and modern CSS frameworks.
            </p>
          </div>
          
          <div className="relative pl-8 pb-8 border-l border-primary/30">
            <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary"></div>
            <div className="mb-1 text-xl font-bold">Frontend Developer Intern</div>
            <div className="mb-2 text-primary">Summer 2022</div>
            <p className="text-muted-foreground">
              Worked on a team developing a web application for a local startup. Gained experience in agile development processes and collaborative coding.
            </p>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute top-0 left-0 w-4 h-4 -ml-2 rounded-full bg-primary"></div>
            <div className="mb-1 text-xl font-bold">Web Development Bootcamp</div>
            <div className="mb-2 text-primary">2020</div>
            <p className="text-muted-foreground">
              Completed an intensive bootcamp focusing on full-stack web development, where I built several projects from scratch and learned best practices in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}