import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { posts } from '@/lib/data';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Metadata } from 'next';
import { format, parseISO } from 'date-fns';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((post) => post.id === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Ahmed Elkwawy',
    };
  }
  
  return {
    title: `${post.title} | Ahmed Elkwawy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Ahmed Elkwawy'],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((post) => post.id === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container-custom py-20 md:py-28">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to All Posts
      </Link>
      
      <article className="max-w-3xl mx-auto">
        <h1 className="heading-lg mb-6">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>5 min read</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          />
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}