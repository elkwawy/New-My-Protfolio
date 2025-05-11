"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Projects() {
  // const [visibleProjects, setVisibleProjects] = useState(3);

  const featuredProjects = projects.filter((project) => project.featured);
  const displayedProjects = featuredProjects.slice(0, 3);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="heading-lg mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              My recent work showcasing my front-end skills.
            </p>
          </div>
          <Link
            href="/projects"
            className="mt-4 md:mt-0 text-primary font-medium flex items-center gap-1 group hover:underline"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              variants={item}
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
                <p className="text-muted-foreground mb-4 min-h-[4.5rem]">
                  {project.description.length > 106
                    ? `${project.description.slice(0, 106)}...`
                    : project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline">+{project.tags.length - 3}</Badge>
                  )}
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
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button 
        {visibleProjects < featuredProjects.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setVisibleProjects((prev) => prev + 3)}
              variant="outline"
              size="lg"
            >
              Load More Projects
            </Button>
          </div>
        )}
            */}
      </div>
    </section>
  );
}
