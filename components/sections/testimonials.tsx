'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="testimonials" className="section-spacing">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground">
            What people say about working with me. I pride myself on delivering quality work 
            and maintaining great relationships with clients and teammates.
          </p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={item}>
              <Card className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <QuoteIcon 
                    className="h-8 w-8 text-primary/20 mb-4" 
                    strokeWidth={1.5}
                  />
                  <p className="text-muted-foreground mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t border-border">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}