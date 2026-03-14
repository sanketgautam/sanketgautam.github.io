import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import HuskyIcon from './HuskyIcon'

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 bg-[#4B2E83]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Husky branding section */}
        <div className="flex items-center gap-3">
          <HuskyIcon className="w-10 h-10 text-white" />
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-wide">Go Huskies!</span>
            <p className="text-white/60 text-xs">
              &copy; {new Date().getFullYear()} Sanket Gautam
            </p>
          </div>
        </div>

        {/* Center text */}
        <p className="text-white/50 text-sm text-center hidden md:block">
          Built with React, Tailwind CSS & Framer Motion
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
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
              whileHover={{ y: -2, scale: 1.1 }}
              className="text-white/40 hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
