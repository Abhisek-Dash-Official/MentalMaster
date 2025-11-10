import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white border-2 border-gray-900 border-b-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Mental Master Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">Mental Master</span>
        </div>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/basics" className="hover:text-gray-300 transition">
            Basics
          </Link>
          <Link href="/tricks" className="hover:text-gray-300 transition">
            Tricks
          </Link>
        </nav>
      </div>
    </header>
  );
}
