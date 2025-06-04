import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    // Added 'animated-gradient-background' class for the cool background effect!
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center animated-gradient-background">
      {/* My avatar image! */}
      {/* Added some hover effects: it will scale up a bit and get a nice shadow. */}
      <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
        <Image
          src="/avatar.png" 
          alt="Fabricio Avatar with Nous mask" 
          width={120}
          height={120}
          // The shadow uses the primary color, it should look nice on hover.
          className="rounded-full border-2 border-primary shadow-sm hover:shadow-lg hover:shadow-primary/30" 
        />
      </div>
      

      {/* The main greeting. */}
      {/* Added 'animate-fadeInUp' for a smooth entrance. Delay added with style attribute. */}
      <h1 
        className="text-5xl font-bold text-foreground animate-fadeInUp"
        style={{ animationDelay: '0.2s' }} // Title appears a bit after page loads
      >
        Hi, I&apos;m Fabricio 
      </h1>

      {/* A short description about me. */}
      {/* Added 'text-justify' to make the text block look neater. */}
      {/* Also added 'animate-fadeInUp' with a slightly longer delay. */}
      <p 
        className="mt-4 text-xl text-muted-foreground max-w-2xl text-justify animate-fadeInUp"
        style={{ animationDelay: '0.5s' }} // Paragraph appears after the title
      >
        A Mechatronics Industrial graduate building a path in Full Stack Development.
        Currently enhancing my skills with the IBM Full Stack Software Developer specialization,
        I&apos;m passionate about creating scalable, responsive, and interactive web applications
        using technologies like React, Node.js, and more.
      </p>

      {/* Button to see my projects. */}
      {/* Added hover effect: scales up slightly. */}
      {/* Also added 'animate-fadeInUp' for its entrance. */}
      <div 
        className="mt-6 animate-fadeInUp"
        style={{ animationDelay: '0.8s' }} // Button appears after the paragraph
      >
        <Button className="text-base px-6 py-3 transform transition-transform duration-300 hover:scale-105">
          View Projects
        </Button>
      </div>

      {/* Links to my social media. */}
      {/* These icons will also fade in. */}
      <div 
        className="flex gap-5 mt-8 text-muted-foreground animate-fadeInUp"
        style={{ animationDelay: '1.1s' }} // Social icons appear last
      >
        {/* GitHub link */}
        <a
          href="https://github.com/tugithub" 
          target="_blank"
          rel="noopener noreferrer"
          // Added a scale effect on hover for icons too!
          className="hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn link */}
        <a
          href="https://linkedin.com/in/tulinkedin" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Email link */}
        <a
          href="mailto:fabriciorumay523@gmail.com" 
          className="hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </main>
  );
}