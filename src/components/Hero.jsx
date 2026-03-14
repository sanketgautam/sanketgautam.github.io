import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

// Full-width PNW Mountain silhouette SVG - spans entire bottom
const MountainBackground = () => (
  <svg 
    viewBox="0 0 1440 400" 
    className="absolute bottom-0 left-0 w-full h-64 md:h-80 lg:h-96" 
    preserveAspectRatio="xMidYMax slice"
  >
    {/* Far mountains - lightest */}
    <path 
      d="M0 400 L0 280 L120 200 L240 260 L360 160 L480 220 L600 120 L720 200 L840 100 L960 180 L1080 80 L1200 160 L1320 120 L1440 180 L1440 400 Z" 
      fill="#4B2E83" opacity="0.06"
    />
    {/* Mid mountains */}
    <path 
      d="M0 400 L0 320 L100 260 L200 300 L320 220 L440 280 L560 180 L680 260 L800 160 L920 240 L1040 140 L1160 220 L1280 180 L1400 240 L1440 220 L1440 400 Z" 
      fill="#4B2E83" opacity="0.10"
    />
    {/* Near mountains - darker */}
    <path 
      d="M0 400 L0 340 L80 300 L160 340 L260 280 L360 330 L480 260 L580 320 L700 240 L820 300 L940 220 L1060 290 L1180 240 L1300 300 L1440 260 L1440 400 Z" 
      fill="#4B2E83" opacity="0.15"
    />
    {/* Trees on left */}
    <g fill="#4B2E83" opacity="0.20">
      <path d="M0 400 L20 340 L30 400 L50 330 L60 400 L85 310 L100 400 L130 320 L150 400 L180 300 L200 400 L235 310 L260 400 Z"/>
      <path d="M1200 400 L1220 350 L1240 400 L1270 330 L1300 400 L1340 340 L1380 400 L1420 320 L1440 360 L1440 400 Z"/>
    </g>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F3EEFF] via-white to-[#FDF8F0] overflow-hidden">
      
      {/* Full-width mountain background at bottom */}
      <MountainBackground />

      {/* Large Husky/Wolf on the left */}
      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-4 md:left-12 lg:left-20 top-1/3 -translate-y-1/2 hidden md:block"
      >
        <div className="relative">
          <span className="text-8xl lg:text-9xl filter drop-shadow-lg">🐺</span>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#4B2E83] text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
          >
            Go Huskies!
          </motion.div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#4B2E83]/40 hover:text-[#4B2E83] transition-colors"
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
