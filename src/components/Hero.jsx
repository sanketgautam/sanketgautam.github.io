import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Mountain } from 'lucide-react'

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
      fill="#4B2E83" opacity="0.12"
    />
    {/* Mid mountains */}
    <path 
      d="M0 400 L0 320 L100 260 L200 300 L320 220 L440 280 L560 180 L680 260 L800 160 L920 240 L1040 140 L1160 220 L1280 180 L1400 240 L1440 220 L1440 400 Z" 
      fill="#4B2E83" opacity="0.18"
    />
    {/* Near mountains - darker */}
    <path 
      d="M0 400 L0 340 L80 300 L160 340 L260 280 L360 330 L480 260 L580 320 L700 240 L820 300 L940 220 L1060 290 L1180 240 L1300 300 L1440 260 L1440 400 Z" 
      fill="#4B2E83" opacity="0.25"
    />
    {/* Trees on left */}
    <g fill="#4B2E83" opacity="0.30">
      <path d="M0 400 L20 340 L30 400 L50 330 L60 400 L85 310 L100 400 L130 320 L150 400 L180 300 L200 400 L235 310 L260 400 Z"/>
      <path d="M1200 400 L1220 350 L1240 400 L1270 330 L1300 400 L1340 340 L1380 400 L1420 320 L1440 360 L1440 400 Z"/>
    </g>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8E0F0] via-[#F5F2F8] to-[#EDE8F5] overflow-hidden">
      
      {/* Full-width mountain background at bottom */}
      <MountainBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#2D1B69] font-mono text-sm sm:text-base mb-4 tracking-wider font-medium">
            Hi, my name is
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-3"
        >
          <span className="bg-gradient-to-r from-[#4B2E83] via-[#6B4EAD] to-[#4B2E83] bg-clip-text text-transparent">
            Sanket Gautam
          </span>
        </motion.h1>

        {/* Location badge - with SVG icons instead of emoji */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-[#2D1B69]/80 text-sm mb-5"
        >
          <MapPin className="w-4 h-4" />
          <span className="font-medium">Seattle, WA</span>
          <span className="text-[#2D1B69]/30">•</span>
          <Mountain className="w-4 h-4" />
          <span>Pacific Northwest</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          <span className="text-[#2D1B69]">
            I build intelligent{' '}
          </span>
          <span className="text-[#4C1D95]">
            systems.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#2D1B69]/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Software Engineer at{' '}
          <span className="text-[#2D1B69] font-medium">Amazon</span> with 7+ years
          building large-scale distributed systems. MS CS at the{' '}
          <span className="text-[#2D1B69] font-medium">University of Washington</span> (3.9 GPA).
          Passionate about{' '}
          <span className="text-[#4C1D95] font-semibold">Agentic AI</span>,
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
            className="px-8 py-3.5 bg-gradient-to-r from-[#4B2E83] to-[#6B4EAD] hover:from-[#6B4EAD] hover:to-[#8B6EC7] text-white font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#4B2E83]/25 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border-[2.5px] border-[#4B2E83] text-[#4B2E83] hover:bg-[#4B2E83] hover:text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-6"
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
              className="p-3 text-[#2D1B69] bg-white/60 hover:bg-[#4C1D95] hover:text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Icon className="w-7 h-7" />
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#2D1B69]/50 hover:text-[#2D1B69] transition-colors"
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
