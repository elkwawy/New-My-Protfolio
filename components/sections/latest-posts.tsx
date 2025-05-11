"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { posts } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { format, parseISO } from "date-fns";

export default function LatestPosts() {
  const latestPosts = posts.slice(0, 3);

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
    <section id="blog" className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-9">
          <div>
            <h2 className="heading-lg mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl">
              Read my thoughts on web development, design trends, technical
              tutorials.
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 text-primary font-medium flex items-center gap-1 group hover:underline"
          >
            View all posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={cn(
                "bg-card rounded-lg overflow-hidden border border-border transition-all duration-300",
                "hover:shadow-md hover:border-primary/20"
              )}
              variants={item}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "MMMM d, yyyy")}
                  </time>
                </div>
                <h3 className="heading-sm mb-3 line-clamp-2">
                  {post.title.length > 50
                    ? post.title.slice(0, 50) + "..."
                    : post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt.length > 75
                    ? post.excerpt.slice(0, 75) + "..."
                    : post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild size="sm">
                  <Link href={`/blog/${post.id}`}>Read Article</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
