import Link from "next/link"
import { Button } from "@/components/ui/button"

// Este componente es la barra de navegación principal que aparece en todas las páginas
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo del sitio */}
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Fabricio GR.dev
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex gap-2">
          {/* Cada uno es un botón de shadcn con estilo "ghost" (solo texto) */}
          <Link href="/about"><Button variant="ghost" className="text-gray-800 hover:text-blue-600">About</Button></Link>
          <Link href="/projects"><Button variant="ghost" className="text-gray-800 hover:text-blue-600">Projects</Button></Link>
          <Link href="/skills"><Button variant="ghost" className="text-gray-800 hover:text-blue-600">Skills</Button></Link>
          <Link href="/experience"><Button variant="ghost" className="text-gray-800 hover:text-blue-600">Experience</Button></Link>
          <Link href="/contact"><Button variant="ghost" className="text-gray-800 hover:text-blue-600">Contact</Button></Link>
        </div>
      </div>
    </nav>
  )
}
