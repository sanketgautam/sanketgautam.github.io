import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Cpu, Award } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    title: '7+ Years',
    subtitle: 'at Amazon',
    description: 'Alexa AI, AWS, Retail & Selling Partner Services',
    emoji: '💼',
  },
  {
    icon: GraduationCap,
    title: 'MS CS (3.9)',
    subtitle: 'UW Seattle',
    description: 'Paul G. Allen School of Computer Science',
    emoji: '🎓',
  },
  {
    icon: Cpu,
    title: 'Agentic AI',
    subtitle: 'Primary Focus',
    description: 'Multi-agent orchestration & intelligent systems',
    emoji: '🤖',
  },
  {
    icon: Award,
    title: 'Mentor & Judge',
    subtitle: 'DubHacks, GEN1, UNESCO',
    description: 'Mentored 12+ engineers, hackathon judge',
    emoji: '🏆',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-gradient-line" />
      
      {/* Subtle paw prints background */}
      <div className="absolute inset-0 paw-pattern pointer-events-none" />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2E83] mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4B2E83] to-[#B7A57A] rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5 text-[#1E1B3A]/80 leading-relaxed"
          >
            <p>
              I'm a Software Engineer at <span className="text-[#4B2E83] font-medium">Amazon</span> in
              Seattle, where I've spent over seven years building large-scale distributed systems
              across Alexa AI, AWS, Retail, and Selling Partner Services. I'm also pursuing my{' '}
              <span className="text-[#4B2E83] font-medium">Master's in Computer Science</span> at
              the University of Washington's Paul G. Allen School (3.9 GPA), focusing on AI,
              NLP, and entrepreneurship.
            </p>
            <p>
              My primary passion lies in{' '}
              <span className="text-[#6B4EAD] font-semibold">Agentic AI</span> and building
              intelligent systems that create meaningful value. At UW, I co-built{' '}
              <span className="text-[#4B2E83] font-medium">Lumora AI</span>, a CRM platform for
              wealth managers, which we pitched to 16 VCs at Pioneer Square Labs. The experience
              was featured in GeekWire.
            </p>
            <p>
              Growing up as a first-generation college graduate from a small town in India, I
              believe deeply in using technology to expand access and strengthen communities.
              I mentor first-gen CS students through UW's GEN1 program, judged at DubHacks '25,
              and guided young women in tech through UNESCO Technovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, title, subtitle, description, emoji }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4, transition: { duration: 0.2 } }}
                className="p-5 bg-white border border-[#4B2E83]/10 rounded-xl transition-all duration-300 group hover:border-[#4B2E83]/25 hover:shadow-lg hover:shadow-[#4B2E83]/5"
              >
                <span className="text-2xl mb-3 block">{emoji}</span>
                <h3 className="text-[#4B2E83] font-semibold text-lg">{title}</h3>
                <p className="text-[#6B4EAD] text-sm font-medium">{subtitle}</p>
                <p className="text-[#1E1B3A]/50 text-sm mt-1">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
