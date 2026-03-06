import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Brain, CloudCog, Wrench, Users, Shield } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'blue',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'PHP', 'Dart', 'Go'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'emerald',
    skills: ['Multi-Agent Systems', 'LLMs & NLP', 'Computer Vision', 'TTS/ASR', 'MLX', 'CNNs'],
  },
  {
    title: 'Cloud & Systems',
    icon: CloudCog,
    color: 'purple',
    skills: ['AWS (7+ years)', 'Distributed Systems', 'Microservices', 'Docker', 'Elasticsearch', 'NoSQL/SQL'],
  },
  {
    title: 'Frameworks & Tools',
    icon: Wrench,
    color: 'blue',
    skills: ['React', 'Node.js', 'Spring', 'Django', 'Flutter', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Architecture',
    icon: Shield,
    color: 'emerald',
    skills: ['SOA', 'Event-Driven', 'API Design (OpenAPI)', 'CI/CD', 'Security Certification', 'HIPAA'],
  },
  {
    title: 'Leadership',
    icon: Users,
    color: 'purple',
    skills: ['Mentoring (12+ engineers)', 'Cross-Team Coordination', 'ORR Leadership', 'Hackathon Judging', 'Scrum Master'],
  },
]

const colorMap = {
  blue: {
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-400',
    border: 'hover:border-blue-500/30',
    skill: 'hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30',
  },
  emerald: {
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    border: 'hover:border-emerald-500/30',
    skill: 'hover:bg-emerald-500/10 hover:text-emerald-300 hover:border-emerald-500/30',
  },
  purple: {
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-400',
    border: 'hover:border-purple-500/30',
    skill: 'hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500/30',
  },
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-800/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 section-gradient-line" />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, skills, color }, i) => {
            const colors = colorMap[color]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 bg-slate-800/40 border border-slate-700/40 rounded-xl transition-all duration-300 backdrop-blur-sm ${colors.border}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className={`p-2 rounded-lg ${colors.iconBg}`}
                    whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                  >
                    <Icon className={`w-5 h-5 ${colors.iconText}`} />
                  </motion.div>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.04 }}
                      className={`px-3 py-1.5 text-sm text-slate-300 bg-slate-700/50 border border-slate-600/30 rounded-lg transition-all duration-200 cursor-default ${colors.skill}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
