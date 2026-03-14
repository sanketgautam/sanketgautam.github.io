import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Wolf/Husky SVG silhouette - crisp and clean
const WolfIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Howling wolf silhouette */}
    <path d="M50 5 L35 25 L25 15 L20 35 L30 45 L25 60 L35 75 L45 80 L50 95 L55 80 L65 75 L75 60 L70 45 L80 35 L75 15 L65 25 L50 5 Z"/>
    {/* Inner ear details */}
    <path d="M35 25 L25 15 L20 35 L30 30 Z" opacity="0.7"/>
    <path d="M65 25 L75 15 L80 35 L70 30 Z" opacity="0.7"/>
    {/* Snout detail */}
    <ellipse cx="50" cy="55" rx="8" ry="6" opacity="0.3"/>
  </svg>
)

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
          ? 'bg-white/80 backdrop-blur-md border-b border-[#4B2E83]/10 shadow-lg shadow-[#4B2E83]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <WolfIcon className="w-10 h-10 text-[#4C1D95] hover:scale-110 transition-transform" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-[#3B1F6E] hover:text-[#4C1D95] rounded-lg hover:bg-[#4C1D95]/5 transition-all duration-200 font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Sanket_Gautam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-sm font-medium text-white bg-[#4C1D95] rounded-full hover:bg-[#6B4EAD] transition-all duration-200 hover:shadow-lg hover:shadow-[#4C1D95]/25 tracking-wide"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#3B1F6E] rounded-lg hover:bg-[#4C1D95]/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#4B2E83]/10"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-[#3B1F6E] hover:text-[#4C1D95] rounded-lg hover:bg-[#4C1D95]/5 transition-all font-medium tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Sanket_Gautam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-white bg-[#4C1D95] rounded-full text-center font-medium mt-2"
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
