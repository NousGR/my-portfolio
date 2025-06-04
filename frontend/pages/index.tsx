import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Home() {
  return (
    // Fondo claro + centro vertical y horizontal
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      
      {/* Imagen circular */}
      <Image
        src="/avatar.jpg"
        alt="Gustavo Avatar"
        width={120}
        height={120}
        className="rounded-full mb-4 border border-gray-300 shadow-sm"
      />

      {/* Título grande */}
      <h1 className="text-5xl font-bold text-gray-900">
        Hi, I&apos;m Gustavo 👨‍💻
      </h1>

      {/* Descripción */}
      <p className="mt-4 text-xl text-gray-600 max-w-xl">
        I&apos;m a frontend developer passionate about creating clean, responsive, and interactive web applications.
      </p>

      {/* Botón para ver proyectos */}
      <div className="mt-6">
        <Button className="text-base px-6 py-3">View Projects</Button>
      </div>

      {/* Íconos sociales */}
      <div className="flex gap-5 mt-8 text-gray-500">
        {/* GitHub */}
        <a
          href="https://github.com/tugithub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/tulinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin size={28} />
        </a>

        {/* Email */}
        <a
          href="mailto:tucorreo@gmail.com"
          className="hover:text-red-500 transition-colors"
        >
          <FaEnvelope size={28} />
        </a>
      </div>
    </main>
  )
}
