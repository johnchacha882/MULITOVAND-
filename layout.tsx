import "./globals.css";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "MULITOVAND Techs", description: "Jifunze teknolojia kwa lugha unayoielewa - kozi 72 BURE" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sw"><body className="bg-white text-slate-800">
      <header className="sticky top-0 z-10 border-b bg-blue-700 text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold">MULITOVAND Techs</Link>
          <div className="flex gap-4 text-sm"><Link href="/">Nyumbani</Link><Link href="/#kozi">Kozi</Link><Link href="/#mawasiliano">Mawasiliano</Link><AuthNav /></div>
        </nav>
      </header>
      {children}
      <footer id="mawasiliano" className="mt-16 bg-blue-900 p-8 text-center text-sm text-blue-100">
        <p className="font-semibold">MULITOVAND Techs</p>
        <p>Simu: <a href="tel:+255622794234" className="underline">+255622794234</a> | Jumapili-Jumamosi 9:00 AM - 6:00 PM (Africa/Dar_es_Salaam)</p>
        <p>Kiswahili, English, Français, Español, العربية, 中文 | Jukwaa 24/7</p>
      </footer>
    </body></html>
  );
}
