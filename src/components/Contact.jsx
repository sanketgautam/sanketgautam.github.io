import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, ArrowUpRight } from 'lucide-react'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'sk2gautam@gmail.com', href: 'mailto:sk2gautam@gmail.com', emoji: '📧' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/sanketgautam', href: 'https://linkedin.com/in/sanketgautam', emoji: '💼' },
  { icon: Github, label: 'GitHub', value: 'github.com/sanketgautam', href: 'https://github.com/sanketgautam', emoji: '🐙' },
  { icon: MapPin, label: 'Location', value: 'Seattle, WA', href: null, emoji: '📍' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)
    window.location.href = `mailto:sk2gautam@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3EEFF] via-[#FAFBFF] to-[#FDF8F0]" />
      <div className="absolute top-0 left-0 right-0 section-gradient-line" />
      
      {/* Floating husky */}
      <motion.div
        className="absolute bottom-20 right-10 text-6xl select-none opacity-10"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      >
        🐾
      </motion.div>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2E83] mb-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4B2E83] to-[#B7A57A] rounded-full mx-auto mb-6" />
          <p className="text-[#1E1B3A]/60 max-w-lg mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or collaborations in AI and software engineering. Go Huskies! 🐾
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactLinks.map(({ label, value, href, emoji }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="group flex items-center gap-4 p-4 bg-white border border-[#4B2E83]/8 rounded-xl hover:border-[#4B2E83]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#4B2E83]/5"
              >
                <span className="text-2xl">{emoji}</span>
                <div className="flex-1">
                  <p className="text-sm text-[#1E1B3A]/40">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#4B2E83] hover:text-[#6B4EAD] transition-colors font-medium flex items-center gap-1"
                    >
                      {value}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-[#4B2E83] font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-[#4B2E83]/15 rounded-lg text-[#1E1B3A] placeholder:text-[#4B2E83]/30 focus:outline-none focus:border-[#4B2E83]/40 focus:ring-2 focus:ring-[#4B2E83]/10 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-[#4B2E83]/15 rounded-lg text-[#1E1B3A] placeholder:text-[#4B2E83]/30 focus:outline-none focus:border-[#4B2E83]/40 focus:ring-2 focus:ring-[#4B2E83]/10 transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-[#4B2E83]/15 rounded-lg text-[#1E1B3A] placeholder:text-[#4B2E83]/30 focus:outline-none focus:border-[#4B2E83]/40 focus:ring-2 focus:ring-[#4B2E83]/10 transition-all resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#4B2E83] to-[#6B4EAD] hover:from-[#6B4EAD] hover:to-[#8B6EC7] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#4B2E83]/25"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
