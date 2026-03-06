import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Brain, CloudCog, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Go'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: ['Multi-Agent Systems', 'Computer Vision', 'LLMs', 'NLP', 'TTS/ASR'],
  },
  {
    title: 'Cloud & Systems',
    icon: CloudCog,
    skills: ['AWS (7+ years)', 'Distributed Systems', 'Microservices', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Tools & Frameworks',
    icon: Wrench,
    skills: ['React', 'Node.js', 'Vite', 'Tailwind CSS', 'Git'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-slate-800/20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Skills
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(({ title, icon: Icon, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="p-6 bg-slate-800/40 border border-slate-700/40 rounded-xl hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-slate-300 bg-slate-700/50 border border-slate-600/30 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
