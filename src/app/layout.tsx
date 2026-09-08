import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio & Catálogo Editorial",
  description: "Ingeniería de software y activos digitales minimalistas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col justify-between">
        <header className="sticky top-0 bg-[#fcfcfc]/90 backdrop-blur-md pt-6 px-6 md:px-16 z-50 flex justify-between items-center border-b border-gray-200 pb-4">
          <Link href="/" className="block">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold">
              [ PORTFOLIO ARCHIVE ]
            </span>
          </Link>

          <nav className="flex items-center gap-2 bg-gray-100 p-1 rounded-full border border-gray-200">
            <Link
              href="/"
              className="px-5 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 text-gray-800 hover:text-black font-medium"
            >
              [ 01 ] CV & Historia
            </Link>
            <Link
              href="/catalog"
              className="px-5 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 text-gray-800 hover:text-black font-medium"
            >
              [ 02 ] Catálogo
            </Link>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="w-full bg-[#fcfcfc] border-t border-gray-200 py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-widest uppercase text-gray-500 z-20">
          <p>SOFTWARE ENGINEERING & DIGITAL ASSETS</p>
          <p>© 2026 ALL RIGHTS RESERVED.</p>
        </footer>
      </body>
    </html>
  );
}