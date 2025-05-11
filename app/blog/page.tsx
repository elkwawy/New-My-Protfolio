import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { posts } from '@/lib/data';
import { Metadata } from 'next';
import { format, parseISO } from 'date-fns';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Ahmed Elkwawy',
  description: 'Articles and tutorials on web development, design, and frontend technologies',
};

export default function BlogPage() {
  return (
    <div className="container-custom py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="heading-lg mb-6">Blog</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on web development, design trends, and frontend technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <article 
            key={post.id}
            className="group bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
          >
            <Link href={`/blog/${post.id}`} className="block">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {format(parseISO(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <Link href={`/blog/${post.id}`}>
                <h2 className="heading-sm mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}