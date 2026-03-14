import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, MapPin } from 'lucide-react'

// Wolf/Husky SVG logo - gradient purple with geometric style
const WolfLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} fill="none">
    <defs>
      <linearGradient id="faceGradient" x1="10" y1="8" x2="84" y2="88" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7C5CFF"/>
        <stop offset="55%" stopColor="#5B3FCF"/>
        <stop offset="100%" stopColor="#2F225F"/>
      </linearGradient>
      <linearGradient id="centerGradient" x1="50" y1="42" x2="50" y2="82" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4B34A0"/>
        <stop offset="100%" stopColor="#22163F"/>
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#120C24" floodOpacity="0.22"/>
      </filter>
    </defs>
    <g transform="translate(0, 4)" filter="url(#softShadow)">
      <path d="M50 90 L22 62 L11 35 L24 8 L39 27 L50 21 L61 27 L76 8 L89 35 L78 62 Z" fill="url(#faceGradient)" stroke="#22163F" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M24 8 L39 27 L28 31 L20 20 Z" fill="#FFFFFF" opacity="0.18"/>
      <path d="M76 8 L61 27 L72 31 L80 20 Z" fill="#FFFFFF" opacity="0.18"/>
      <path d="M26 16 L35 29 L21 33 Z" fill="#FFFFFF" opacity="0.96"/>
      <path d="M74 16 L65 29 L79 33 Z" fill="#FFFFFF" opacity="0.96"/>
      <path d="M31 46 L44 50 L35 54 Z" fill="#FFFFFF" opacity="0.96"/>
      <path d="M69 46 L56 50 L65 54 Z" fill="#FFFFFF" opacity="0.96"/>
      <path d="M21 60 L35 69 L40 59 L28 50 Z" fill="#FFFFFF" opacity="0.14"/>
      <path d="M79 60 L65 69 L60 59 L72 50 Z" fill="#FFFFFF" opacity="0.14"/>
      <path d="M45 50 L55 50 L61 70 L50 81 L39 70 Z" fill="url(#centerGradient)"/>
      <path d="M50 22 L57 48 L50 46 L43 48 Z" fill="#FFFFFF" opacity="0.10"/>
      <path d="M46.5 74.5 L53.5 74.5 L50 80.5 Z" fill="#120C24"/>
    </g>
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
          
          {/* Left: Wolf logo + Location */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center hover:scale-105 transition-transform">
              <WolfLogo className="w-12 h-12" />
            </a>

            {/* Location - hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1.5 text-[#2D1B69]/70 text-sm pl-2 border-l border-[#2D1B69]/15">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Seattle, WA</span>
            </div>
          </div>

          {/* Right: Nav links + Social + Resume */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm text-[#2D1B69] hover:text-[#4C1D95] rounded-lg hover:bg-[#4C1D95]/5 transition-all duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-[#2D1B69]/15 mx-2" />

            {/* Social icons */}
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-2 text-[#2D1B69]/70 hover:text-[#4C1D95] hover:bg-[#4C1D95]/10 rounded-lg transition-all duration-200"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}

            {/* Resume button */}
            <a
              href="/Sanket_Gautam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-medium text-white bg-[#4C1D95] rounded-full hover:bg-[#6B4EAD] transition-all duration-200 hover:shadow-lg hover:shadow-[#4C1D95]/25"
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
                  className="block px-3 py-2.5 text-[#2D1B69] hover:text-[#4C1D95] rounded-lg hover:bg-[#4C1D95]/5 transition-all font-medium"
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
