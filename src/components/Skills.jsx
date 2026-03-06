import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Languages',
    emoji: '⚡',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'PHP', 'Dart', 'Go'],
  },
  {
    title: 'AI / ML',
    emoji: '🧠',
    skills: ['Multi-Agent Systems', 'LLMs & NLP', 'Computer Vision', 'TTS/ASR', 'MLX', 'CNNs'],
  },
  {
    title: 'Cloud & Systems',
    emoji: '☁️',
    skills: ['AWS (7+ years)', 'Distributed Systems', 'Microservices', 'Docker', 'Elasticsearch', 'NoSQL/SQL'],
  },
  {
    title: 'Frameworks & Tools',
    emoji: '🔧',
    skills: ['React', 'Node.js', 'Spring', 'Django', 'Flutter', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Architecture',
    emoji: '🏗️',
    skills: ['SOA', 'Event-Driven', 'API Design (OpenAPI)', 'CI/CD', 'Security Certification', 'HIPAA'],
  },
  {
    title: 'Leadership',
    emoji: '🎓',
    skills: ['Mentoring (12+ engineers)', 'Cross-Team Coordination', 'ORR Leadership', 'Hackathon Judging', 'Scrum Master'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3EEFF] via-[#FAFBFF] to-[#FDF8F0]" />
      <div className="absolute top-0 left-0 right-0 section-gradient-line" />
      <div className="absolute inset-0 paw-pattern pointer-events-none" />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2E83] mb-2">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4B2E83] to-[#B7A57A] rounded-full mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, emoji, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 bg-white border border-[#4B2E83]/8 rounded-xl transition-all duration-300 hover:border-[#4B2E83]/20 hover:shadow-lg hover:shadow-[#4B2E83]/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{emoji}</span>
                <h3 className="text-[#4B2E83] font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.04 }}
                    className="px-3 py-1.5 text-sm text-[#4B2E83]/70 bg-[#4B2E83]/5 border border-[#4B2E83]/10 rounded-lg hover:bg-[#4B2E83]/10 hover:text-[#4B2E83] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
