'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="skills" className="section-spacing">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground">
            I've worked with a range of technologies in the web development world, 
            from frontend to backend. Here are the main technologies I specialize in.
          </p>
        </div>
        
        <div className="mb-10">
          <Tabs defaultValue={skills[0].category} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              {skills.map((category) => (
                <TabsTrigger 
                  key={category.category}
                  value={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={cn(
                    "data-[state=active]:text-primary",
                    "data-[state=active]:shadow-none",
                    "data-[state=active]:border-b-2",
                    "data-[state=active]:border-primary",
                    "data-[state=active]:rounded-none",
                    "data-[state=active]:bg-transparent"
                  )}
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skills.map((category) => (
              <TabsContent 
                key={category.category} 
                value={category.category} 
                className="pt-4"
              >
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                  variants={container}
                  initial="hidden"
                  animate={activeCategory === category.category ? "show" : "hidden"}
                >
                  {category.items.map((skill) => (
                    <motion.div 
                      key={skill.name}
                      className="flex flex-col items-center gap-3 bg-card hover:bg-card/80 p-6 rounded-lg border border-border transition-all duration-300"
                      variants={item}
                    >
                      <div className="relative w-12 h-12 flex items-center justify-center bg-muted rounded-md">
                        {/* This would ideally be an SVG icon */}
                        <div className="text-2xl font-bold text-primary">{skill.name[0]}</div>
                      </div>
                      <span className="font-medium text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}