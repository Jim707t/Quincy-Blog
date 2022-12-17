import React from 'react'

export default function Navbar() {
  return (
    <nav className="mt-6 mt-6 w-1000">
      <ul className="flex justify-center items-center space-x-4">
        <li><a href="/" className="text-md font-semibold text-gray-600 hover:text-gray-800">Home</a></li>
        <li><a href="/blog" className="text-md font-semibold text-gray-600 hover:text-gray-800">Blog</a></li>
        <li><a href="/project" className="text-md font-semibold text-gray-600 hover:text-gray-800">Project</a></li>
        <li><a href="/about" className="text-md font-semibold text-gray-600 hover:text-gray-800">About</a></li>
      </ul>

    </nav>

  )
}
