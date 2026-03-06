import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Software Development Engineer',
    company: 'Amazon - Selling Partner Services',
    period: 'Current',
    description:
      'Building and maintaining services that power Amazon\'s selling partner ecosystem, handling millions of daily requests at scale.',
    highlights: [
      'Designed APIs and microservices for seller-facing platforms',
      'Improved system reliability and reduced operational burden',
      'Mentored junior engineers on best practices and architecture',
    ],
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon - Retail',
    period: 'Previous',
    description:
      'Developed retail systems supporting Amazon\'s core shopping experience with high availability and low latency requirements.',
    highlights: [
      'Built distributed systems processing millions of transactions',
      'Optimized data pipelines for inventory and pricing systems',
      'Collaborated across teams to deliver customer-facing features',
    ],
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon - AWS',
    period: 'Previous',
    description:
      'Contributed to cloud infrastructure services that power millions of businesses worldwide.',
    highlights: [
      'Worked on core AWS services used by enterprise customers',
      'Implemented scalable cloud-native solutions',
      'Drove operational excellence and reliability improvements',
    ],
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon - Alexa',
    period: 'Previous',
    description:
      'Developed features for Alexa, Amazon\'s voice-first AI assistant serving hundreds of millions of users.',
    highlights: [
      'Built voice experience features and backend services',
      'Worked with NLP and conversational AI systems',
      'Delivered features to millions of Alexa-enabled devices',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-slate-800/20">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Experience
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-slate-700/50" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-900 shadow-lg shadow-blue-500/30" />

                <div className="p-6 bg-slate-800/40 border border-slate-700/40 rounded-xl hover:border-slate-600/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-sm text-slate-400 font-mono mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
