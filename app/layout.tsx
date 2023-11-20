import "./globals.css"
import type { Metadata } from "next"
import "./fonts.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


export const metadata: Metadata = {
  title: "Biblioteca Magic",
  description: "Coletânea de cartas, coleções e regras",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
          <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
            {children}
          </ThemeProvider>
          <Footer />
      </body>
    </html>
  );
}
