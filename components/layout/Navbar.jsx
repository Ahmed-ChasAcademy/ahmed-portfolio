// components/Layout/Navbar.jsx
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold neon-blue glow-blue">Ahmed</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {['about', 'skills', 'projects', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="text-gray-300 hover:text-white transition capitalize"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition capitalize text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}