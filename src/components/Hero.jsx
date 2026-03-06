import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light purple gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F3EEFF] via-white to-[#FDF8F0]" />
        {/* Floating purple orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#4B2E83]/8 rounded-full blur-3xl animate-gradient-shift" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#B7A57A]/10 rounded-full blur-3xl animate-gradient-shift" style={{ animationDelay: '5s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#8B6EC7]/6 rounded-full blur-2xl animate-gradient-shift" style={{ animationDelay: '10s' }} />

        {/* Paw print pattern overlay */}
        <div className="absolute inset-0 paw-pattern" />

        {/* Floating husky emojis */}
        <motion.div
          className="absolute top-32 left-[10%] text-5xl select-none"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          🐾
        </motion.div>
        <motion.div
          className="absolute top-48 right-[15%] text-4xl select-none"
          animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        >
          🐺
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[15%] text-4xl select-none"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 }}
        >
          🏔️
        </motion.div>
        <motion.div
          className="absolute bottom-48 right-[10%] text-5xl select-none"
          animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.5 }}
        >
          🐾
        </motion.div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(75,46,131,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(75,46,131,0.3) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Husky mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
          className="mb-6"
        >
          <span className="text-6xl sm:text-7xl inline-block animate-wag" style={{ animationDuration: '2s' }}>
            🐺
          </span>
        </motion.div>

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
            View My Work 🐾
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
            { icon: Mail, href: 'mailto:sk2gautam@gmail.com', label: 'Email' },
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
