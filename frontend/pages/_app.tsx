import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Navbar } from "@/components/ui/navbar" // Importamos la navbar

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* La navbar aparece en todas las páginas */}
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
