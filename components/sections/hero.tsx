"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;

      const { left, top, width, height } =
        divRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      divRef.current.style.background = `radial-gradient(
        circle at ${x * 100}% ${y * 100}%, 
        hsl(var(--primary) / 0.15), 
        transparent 50%
      )`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      ref={divRef}
    >
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4 mb-8"
          >
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-primary font-medium">Frontend Developer</span>
          </motion.div>

          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="text-primary">Ahmed Elkwawy</span>
          </motion.h1>

          <motion.p
            className="body-lg text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A passionate Frontend Developer with a strong focus on clean code,
            seamless user experiences, and thoughtful design. I build modern,
            responsive web interfaces that balance performance and aesthetics,
            always aiming to create meaningful digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://github.com/elkwawy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-muted p-3 rounded-full transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-elkwawy-0a3973224"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card hover:bg-muted p-3 rounded-full transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
