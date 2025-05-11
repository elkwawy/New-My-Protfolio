import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="heading-xl mb-4">404</h1>
        <h2 className="heading-md mb-6">Page Not Found</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-[500px] mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}