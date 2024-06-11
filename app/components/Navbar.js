import React from 'react'
import Link from "next/link";


const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center bg-gray-400 text-white p-4 font-bold">
      <div className="text-xl">
        <Link href="/">Logo</Link>
      </div>
      <ul className="flex gap-5 pr-10 items-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
        <button className="ms-20 p-2 bg-red-500 rounded-lg">
          LogIn
        </button>
        <button className="p-2 bg-green-500 rounded-lg">
          Sign Up
        </button>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
