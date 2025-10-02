// components/Layout/Footer.jsx
export default function Footer() {
  const socialLinks = [
    { name: 'github', href: '#', color: 'hover:text-cyan-400' },
    { name: 'twitter', href: '#', color: 'hover:text-blue-400' },
    { name: 'linkedin', href: '#', color: 'hover:text-purple-400' },
    { name: 'youtube', href: '#', color: 'hover:text-red-400' },
  ]

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold neon-blue glow-blue mb-6 md:mb-0">Ahmed</div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`text-gray-400 transition ${social.color}`}
                aria-label={social.name}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {/* Add SVG paths for each social icon */}
                </svg>
              </a>
            ))}
          </div>
          
          <div className="text-gray-400">
            © {new Date().getFullYear()} Ahmed. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}