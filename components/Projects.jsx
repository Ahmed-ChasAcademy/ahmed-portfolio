// components/Projects.jsx
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time analytics and AI recommendations.",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Advanced NLP model that generates human-like content for marketing teams.",
    category: "ai",
    technologies: ["Python", "TensorFlow", "Flask"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Fitness Tracker App",
    description: "Mobile application that tracks workouts, nutrition, and provides personalized plans.",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "#",
    live: "#"
  }
]

const categories = ["all", "web", "mobile", "ai"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 neon-green glow-green">
          <span className="neon-blue">Featured</span> Projects
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my most innovative and challenging work
        </p>
        
        {/* Project Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 transition capitalize ${
                activeFilter === category ? 'bg-gray-800' : ''
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 neon-blue">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-400 hover:text-cyan-400 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-green-400 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}