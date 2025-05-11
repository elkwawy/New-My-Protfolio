import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((project) => project.id === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | Ahmed Elkwawy',
    };
  }
  
  return {
    title: `${project.title} | Ahmed Elkwawy`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((project) => project.id === params.slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="container-custom py-20 md:py-28">
      <Link 
        href="/projects" 
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>
      
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden mb-10">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="heading-lg mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 mb-10">
          <Button asChild>
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Live Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View Code
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {project.content}
        </div>
      </div>
    </div>
  );
}