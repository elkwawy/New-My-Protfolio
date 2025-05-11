import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Ahmed Elkwawy',
  description: 'Explore my portfolio of frontend development projects',
};

export default function ProjectsPage() {
  return (
    <div className="container-custom py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="heading-lg mb-6">My Projects</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A collection of my work that showcases my skills in frontend development, 
          responsive design, and creating intuitive user experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="heading-sm mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild size="sm" variant="default">
                  <Link href={`/projects/${project.id}`}>View Details</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}