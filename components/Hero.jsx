// components/Hero.jsx
import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Ahmed'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="typewriter neon-blue">{displayText}</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 neon-green glow-green">
          Full-Stack Developer & Digital Architect
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Crafting robust digital solutions with cutting-edge technologies and elegant design.
        </p>
        <button 
          onClick={scrollToProjects}
          className="cta-button text-black font-bold py-3 px-8 rounded-full inline-block"
        >
          View My Universe
        </button>
      </div>
    </section>
  )
}