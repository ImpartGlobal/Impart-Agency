import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <div className="font-display text-[120px] lg:text-[180px] font-bold leading-none text-brand-border select-none mb-4">
          404
        </div>
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-brand-muted text-lg max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
