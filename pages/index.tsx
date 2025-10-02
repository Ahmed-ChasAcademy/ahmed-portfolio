import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Layout/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Layout/Footer'

export default function Home() {
  useEffect(() => {
    const initParticles = async () => {
      if (typeof window !== 'undefined') {
        // Import particles.js properly
        const particlesJS = (await import('particles.js')).default
        
        // Check if particlesJS is available
        if (particlesJS && typeof particlesJS === 'function') {
          particlesJS("particles-js", {
            particles: {
              number: { 
                value: 80, 
                density: { 
                  enable: true, 
                  value_area: 800 
                } 
              },
              color: { 
                value: ["#00f0ff", "#00ff9d"] 
              },
              shape: { 
                type: ["circle", "triangle"],
                polygon: { nb_sides: 6 }
              },
              opacity: { 
                value: 0.5, 
                random: true 
              },
              size: { 
                value: 3, 
                random: true 
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#00f0ff",
                opacity: 0.2,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { 
                  enable: true, 
                  mode: "grab" 
                },
                onclick: { 
                  enable: true, 
                  mode: "push" 
                },
                resize: true
              }
            }
          })
        } else {
          console.warn('particlesJS not available')
        }
      }
    }

    initParticles()
  }, [])

  return (
    <>
      <Head>
        <title>Ahmed | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer & Digital Architect" />
      </Head>
      
      <div 
        id="particles-js" 
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}