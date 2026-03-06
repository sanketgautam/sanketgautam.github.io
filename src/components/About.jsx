import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Cpu, MapPin } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    title: '7+ Years',
    subtitle: 'at Amazon',
    description: 'Alexa, AWS, Retail & Selling Partner Services',
  },
  {
    icon: GraduationCap,
    title: 'MS CS',
    subtitle: 'UW Seattle',
    description: 'AI, Computer Vision & Entrepreneurship',
  },
  {
    icon: Cpu,
    title: 'Agentic AI',
    subtitle: 'Primary Focus',
    description: 'Multi-agent systems & orchestration',
  },
  {
    icon: MapPin,
    title: 'Seattle',
    subtitle: 'Washington',
    description: 'Building the future of intelligent systems',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-slate-300 leading-relaxed"
          >
            <p>
              I'm a Software Engineer at <span className="text-white font-medium">Amazon</span> in
              Seattle, where I've spent over seven years building large-scale
              systems across Alexa, AWS, Retail, and Selling Partner Services.
              Currently, I'm also pursuing my{' '}
              <span className="text-white font-medium">Master's in Computer Science</span> at
              the University of Washington.
            </p>
            <p>
              My primary passion lies in{' '}
              <span className="text-emerald-400 font-medium">Agentic AI</span> — designing
              multi-agent systems that can reason, plan, and act autonomously.
              I build orchestration frameworks, MCP servers, and multi-step
              automation workflows that push the boundaries of what personal
              AI systems can achieve.
            </p>
            <p>
              When I'm not coding, you'll find me managing my investment
              portfolio, hiking the Pacific Northwest trails, tracking fitness
              metrics, or spending time with family.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, title, subtitle, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-5 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300 group"
              >
                <Icon className="w-6 h-6 text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-blue-400 text-sm font-medium">{subtitle}</p>
                <p className="text-slate-400 text-sm mt-1">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
