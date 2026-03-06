import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Washington',
    location: 'Seattle, WA',
    status: 'In Progress (2026)',
    focus: ['Artificial Intelligence', 'Computer Vision', 'Entrepreneurship'],
    coursework: ['CSEP 561: Computer Networks / Network Systems'],
    accent: 'blue',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'MANIT Bhopal',
    location: 'India',
    status: 'Completed',
    focus: ['Computer Science'],
    coursework: [],
    accent: 'emerald',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Education
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="p-6 sm:p-8 bg-slate-800/40 border border-slate-700/40 rounded-xl hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${edu.accent === 'blue' ? 'bg-blue-500/10' : 'bg-emerald-500/10'} flex-shrink-0`}>
                  <GraduationCap className={`w-6 h-6 ${edu.accent === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
                      edu.accent === 'blue'
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-slate-300 font-medium">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mb-4">{edu.location}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {edu.focus.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 border border-slate-600/30 rounded-lg"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {edu.coursework.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-400 font-medium">Current Coursework</span>
                      </div>
                      {edu.coursework.map((course) => (
                        <p key={course} className="text-sm text-slate-300 font-mono">{course}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
