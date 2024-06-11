import Link from "next/link";
import "./globals.css"
export default function Page() {
  return (
    <nav className="flex justify-between bg-gray-400 text-white p-4 font-bold">
      <div className="text-xl">
        <Link href="/">Logo</Link>
      </div>
      <ul className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </ul>
    </nav>
  );
}
