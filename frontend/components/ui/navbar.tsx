// components/ui/navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This component is the main navigation bar that appears on all pages
export function Navbar() {
  return (
    // Navbar background should adapt if we use bg-background or a card-like color
    // For now, let's use a slightly different shade of dark, like card background
    // And ensure border is visible on dark theme
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Site Logo / Brand Name */}
        {/* Applying the custom font variable and ensuring text color is from foreground */}
        <Link
          href="/"
          className="text-xl font-semibold text-foreground"
          style={{ fontFamily: "var(--font-brand)" }} // Apply Raleway font here
        >
          Fabricio Gonzales Rumay {/* Updated brand name */}
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-2">
          {/* Each one is a shadcn button with "ghost" style */}
          {/* Text color should be text-foreground or a muted variant from our theme */}
          <Link href="/about">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              About
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Projects
            </Button>
          </Link>
          <Link href="/skills">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Skills
            </Button>
          </Link>
          <Link href="/experience">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Experience
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
