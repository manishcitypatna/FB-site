
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-br from-background via-destructive/5 to-background">
      <AlertTriangle className="h-24 w-24 text-destructive mb-6 animate-pulse" />
      <h1 className="text-6xl md:text-8xl font-extrabold text-destructive mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Lost in Cyberspace?</h2>
      <p className="text-lg text-foreground/70 mb-10 max-w-md">
        It seems the page you're looking for has ventured into an uncharted digital territory or perhaps never existed.
      </p>
      <div className="flex items-center space-x-4">
        <Button asChild variant="default" size="lg">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Return to Homepage
          </Link>
        </Button>
         <Button asChild variant="outline" size="lg">
          <Link href="/contact">
            Contact Support
          </Link>
        </Button>
      </div>
      <div className="mt-16 text-xs text-muted-foreground">
        Error Code: <span className="font-mono">ERR_PAGE_NOT_FOUND_GSMA</span>
      </div>
    </div>
  );
}
