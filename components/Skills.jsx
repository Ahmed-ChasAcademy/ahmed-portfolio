// components/Skills.jsx
const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 neon-blue glow-blue">
          <span className="neon-green">My</span> Tech Arsenal
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="tech-icon p-4 rounded-lg">
                <img 
                  src={tech.icon} 
                  className="w-16 h-16" 
                  alt={tech.name}
                  loading="lazy"
                />
              </div>
              <span className="mt-2 text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}