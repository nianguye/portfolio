import Link from "next/link";
import { Sidebar } from "./sidebar";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-[#90D5FF]/95 border border-transparent shadow-none rounded-b-2xl">
      <div className="relative flex h-16 items-center justify-end mx-auto px-8">
        <nav className="flex gap-6">
          <Sidebar />
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline"
            >
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
