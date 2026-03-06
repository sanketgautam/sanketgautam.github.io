import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen, Trophy } from 'lucide-react'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Washington — Paul G. Allen School',
    location: 'Seattle, WA',
    status: 'In Progress (2026)',
    gpa: '3.9 GPA',
    focus: ['Artificial Intelligence', 'NLP', 'Computer Vision', 'HCI', 'Entrepreneurship'],
    coursework: [
      'CSEP 561: Network Systems',
      'CSEP 517: Natural Language Processing',
      'CSEP 510: Human-Computer Interaction',
      'CSEP 589: Software Entrepreneurship',
    ],
    accent: 'blue',
  },
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'NIT Bhopal (MANIT)',
    location: 'India',
    status: 'Completed (2018)',
    gpa: '3.4 GPA',
    focus: ['Computer Science', 'Machine Learning', 'Software Engineering'],
    coursework: [],
    accent: 'emerald',
  },
]

const awards = [
  'Won "People\'s Choice Award" at Amazon Selling Partner Services Hackathon 2025',
  'Received "Awesome Amazonian" award for contributions at work',
  'Among top 20 selected teams for startup incubation at Hack In the North 2.0',
  'Lumora AI pitch featured in GeekWire coverage of UW entrepreneurship program',
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 section-gradient-line" />

      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-12" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="p-6 sm:p-8 bg-slate-800/40 border border-slate-700/40 rounded-xl hover:border-slate-600/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`p-3 rounded-xl ${edu.accent === 'blue' ? 'bg-blue-500/10' : 'bg-emerald-500/10'} flex-shrink-0`}
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  <GraduationCap className={`w-6 h-6 ${edu.accent === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`} />
                </motion.div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full w-fit ${
                      edu.accent === 'blue'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-slate-300 font-medium">{edu.institution}</p>
                  <p className="text-slate-500 text-sm mb-1">{edu.location}</p>
                  <p className="text-emerald-400 text-sm font-medium mb-4">{edu.gpa}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {edu.focus.map((area, j) => (
                      <motion.span
                        key={area}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + j * 0.05 }}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 border border-slate-600/30 rounded-lg"
                      >
                        {area}
                      </motion.span>
                    ))}
                  </div>

                  {edu.coursework.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-400 font-medium">Key Coursework</span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-1">
                        {edu.coursework.map((course) => (
                          <p key={course} className="text-sm text-slate-300 font-mono">{course}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 p-6 sm:p-8 bg-slate-800/40 border border-slate-700/40 rounded-xl hover:border-amber-500/20 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="p-2 rounded-lg bg-amber-500/10"
              whileHover={{ rotate: [0, -15, 15, 0], transition: { duration: 0.4 } }}
            >
              <Trophy className="w-5 h-5 text-amber-400" />
            </motion.div>
            <h3 className="text-lg font-semibold text-white">Awards & Recognition</h3>
          </div>
          <ul className="space-y-2">
            {awards.map((award, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <span className="text-amber-400 mt-1">★</span>
                {award}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
