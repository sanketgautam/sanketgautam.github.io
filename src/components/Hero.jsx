import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

// PNW Mountain silhouette SVG
const MountainSilhouette = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMinYMax slice">
    {/* Far mountains */}
    <path d="M0 200 L50 120 L100 160 L150 80 L200 140 L250 60 L300 130 L350 90 L400 150 L400 200 Z" 
          fill="#4B2E83" opacity="0.08"/>
    {/* Mid mountains */}
    <path d="M0 200 L30 150 L80 180 L120 130 L180 170 L220 110 L280 160 L320 120 L380 170 L400 140 L400 200 Z" 
          fill="#4B2E83" opacity="0.12"/>
    {/* Trees silhouette */}
    <path d="M0 200 L10 180 L15 200 L25 170 L30 200 L45 165 L50 200 L60 175 L70 200 L85 160 L95 200 L110 170 L120 200 Z" 
          fill="#4B2E83" opacity="0.15"/>
    <path d="M380 200 L385 175 L390 200 L395 180 L400 200 Z" 
          fill="#4B2E83" opacity="0.15"/>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F3EEFF] via-white to-[#FDF8F0] overflow-hidden">
      
      {/* PNW Mountain decoration - top left */}
      <div className="absolute top-0 left-0 w-80 h-48 opacity-60 pointer-events-none">
        <MountainSilhouette />
      </div>

      {/* UW Husky Badge - top left corner */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-20 left-6 hidden md:flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#4B2E83]/20 rounded-xl px-4 py-3 shadow-lg"
      >
        <span className="text-3xl">🐺</span>
        <div className="flex flex-col">
          <span className="text-[#4B2E83] font-bold text-sm">Go Huskies!</span>
          <span className="text-[#B7A57A] text-xs font-medium">UW Seattle</span>
        </div>
      </motion.div>

      {/* Seattle/PNW indicator - top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute top-20 right-6 hidden md:flex items-center gap-2 text-[#4B2E83]/60 text-sm"
      >
        <span>📍</span>
        <span className="font-medium">Seattle, WA</span>
        <span className="text-[#4B2E83]/30">|</span>
        <span>🌲</span>
        <span className="text-[#4B2E83]/40">PNW</span>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-2 h-2 bg-[#B7A57A] rounded-full opacity-40 hidden lg:block" />
      <div className="absolute top-48 right-32 w-3 h-3 bg-[#4B2E83] rounded-full opacity-20 hidden lg:block" />
      <div className="absolute top-40 left-40 w-2 h-2 bg-[#4B2E83] rounded-full opacity-30 hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#4B2E83] font-mono text-sm sm:text-base mb-4 tracking-wider font-medium">
            Hi, my name is
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4"
        >
          <span className="bg-gradient-to-r from-[#4B2E83] via-[#6B4EAD] to-[#4B2E83] bg-clip-text text-transparent">
            Sanket Gautam
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-[#4B2E83] via-[#8B6EC7] to-[#B7A57A] bg-clip-text text-transparent">
            I build intelligent systems.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#4B2E83]/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Software Engineer at{' '}
          <span className="text-[#4B2E83] font-medium">Amazon</span> with 7+ years
          building large-scale distributed systems. MS CS at the{' '}
          <span className="text-[#4B2E83] font-medium">University of Washington</span> (3.9 GPA).
          Passionate about{' '}
          <span className="text-[#6B4EAD] font-semibold">Agentic AI</span>,
          multi-agent orchestration, and entrepreneurship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-[#4B2E83] to-[#6B4EAD] hover:from-[#6B4EAD] hover:to-[#8B6EC7] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#4B2E83]/25 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border-2 border-[#4B2E83]/20 text-[#4B2E83] hover:border-[#4B2E83]/40 hover:bg-[#4B2E83]/5 font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: 'https://github.com/sanketgautam', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/sanketgautam', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sanketg@uw.edu', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              className="p-3 text-[#4B2E83]/50 hover:text-[#4B2E83] rounded-lg hover:bg-[#4B2E83]/5 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#4B2E83]/40 hover:text-[#4B2E83] transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
