import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#4B2E83]/10 shadow-lg shadow-[#4B2E83]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#4B2E83] to-[#6B4EAD] px-3 py-1.5 rounded-lg shadow-md hover:shadow-lg hover:from-[#6B4EAD] hover:to-[#8B6EC7] transition-all duration-300">
              <span className="text-xl">🐺</span>
              <span className="text-white font-bold text-sm hidden sm:inline">Sanket G.</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm text-[#4B2E83]/70 hover:text-[#4B2E83] rounded-lg hover:bg-[#4B2E83]/5 transition-all duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Sanket_Gautam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-[#4B2E83] rounded-lg hover:bg-[#6B4EAD] transition-all duration-200 hover:shadow-lg hover:shadow-[#4B2E83]/25"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#4B2E83] rounded-lg hover:bg-[#4B2E83]/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#4B2E83]/10"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-[#4B2E83]/70 hover:text-[#4B2E83] rounded-lg hover:bg-[#4B2E83]/5 transition-all font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Sanket_Gautam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-white bg-[#4B2E83] rounded-lg text-center font-medium"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
