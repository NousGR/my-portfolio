// pages/index.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    // Using bg-background for the main background (now dark)
    // text-center for content alignment
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      {/* Circular Image */}
      <Image
        src="/avatar.png" // Assuming you named your new avatar this and placed it in /public
        alt="Fabricio Avatar with Nous mask" // Updated alt text
        width={120}
        height={120}
        className="rounded-full mb-4 border border-border shadow-sm" // Using border-border from theme
      />

      {/* Large Title - using text-foreground for light text on dark background */}
      <h1 className="text-5xl font-bold text-foreground">
        Hi, I&apos;m Fabricio {/* Name changed, emoji removed */}
      </h1>

      {/* Description - using text-muted-foreground for slightly dimmer text */}
      <p className="mt-4 text-xl text-muted-foreground max-w-xl">
        I&apos;m a frontend developer passionate about creating clean,
        responsive, and interactive web applications.
      </p>

      {/* Button to view projects - This will use the --primary color (blue) */}
      <div className="mt-6">
        <Button className="text-base px-6 py-3">View Projects</Button>
      </div>

      {/* Social Icons - text color should be visible on dark theme */}
      {/* Using text-muted-foreground, hover states can use text-primary or specific icon colors */}
      <div className="flex gap-5 mt-8 text-muted-foreground">
        {/* GitHub */}
        <a
          href="https://github.com/tugithub" // Remember to update this link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors" // Hover changes to primary (blue)
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/tulinkedin" // Remember to update this link
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors" // Hover changes to primary (blue)
        >
          <FaLinkedin size={28} />
        </a>

        {/* Email */}
        <a
          href="mailto:tucorreo@gmail.com" // Remember to update this link
          className="hover:text-primary transition-colors" // Hover changes to primary (blue)
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </main>
  );
}
