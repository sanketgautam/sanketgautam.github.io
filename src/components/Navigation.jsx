import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/sanketgautam', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/sanketgautam', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sanketg@uw.edu', label: 'Email' },
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
          
          {/* Left: Social icons + Location */}
          <div className="flex items-center gap-4">
            {/* Social icons */}
            <div className="hidden sm:flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 text-[#2D1B69] hover:text-[#4C1D95] hover:bg-[#4C1D95]/10 rounded-lg transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-[#2D1B69]/20" />

            {/* Location */}
            <div className="hidden sm:flex items-center gap-1.5 text-[#2D1B69]/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Seattle, WA</span>
            </div>
          </div>

          {/* Right: Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-[#2D1B69] hover:text-[#4C1D95] rounded-lg hover:bg-[#4C1D95]/5 transition-all duration-200 font-medium tracking-wide"
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
            className="md:hidden p-2 text-[#2D1B69] rounded-lg hover:bg-[#4C1D95]/5 transition-colors"
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
                  className="block px-3 py-2.5 text-[#2D1B69] hover:text-[#4C1D95] rounded-lg hover:bg-[#4C1D95]/5 transition-all font-medium tracking-wide"
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

              {/* Mobile social links */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#2D1B69]/10 mt-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="p-2 text-[#2D1B69] hover:text-[#4C1D95] rounded-lg transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
