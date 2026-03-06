import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Software Development Engineer II',
    company: 'Amazon — Selling Partner Services & Buy with Prime',
    period: '2020 – Present',
    description:
      'Leading cross-team technical initiatives for Amazon\'s seller ecosystem, driving architecture decisions for returns processing and data labeling platforms.',
    highlights: [
      'Led Operation Readiness Reviews for Buy with Prime Returns 1.0 launch with 12+ engineers across 3 teams, driving 120+ technical requirements for availability, security, and durability',
      'Designed asynchronous architecture for Buy with Prime Returns event processing, collaborating with Sr. Engineers across Amazon Returns platform',
      'Presented organization-wide talks on Code Smells & Refactoring, Securing API Gateway Endpoints, and Exploring Scala for Integration Tests',
      'Built headless architectural layer for Alexa data labeling platform, reducing new customer onboarding from 60 days to under 10 days',
      'Eliminated ~2 hours of monthly downtime by performing heap memory analysis on distributed EC2 instances for legacy ML task routing system',
      'Mitigated PHI data privacy issues in Alexa data labeling per HIPAA guidelines with staged rollout strategy',
      'Team scrum master for ~9 months — agile planning, estimations, and project tracking with stakeholders',
    ],
  },
  {
    title: 'Software Development Engineer',
    company: 'Amazon — Retail & Global Selling',
    period: '2018 – 2020',
    description:
      'Built search infrastructure and authentication systems serving thousands of global sellers on Amazon\'s marketplace platforms.',
    highlights: [
      'Designed and implemented search for Build International Listings Tool using Elasticsearch, handling 1M+ product offer results for thousands of global sellers',
      'Developed SSO-like migration experience moving sellers from legacy SPN website to Seller Central, handling AuthN and AuthZ with marketplace authorization',
      'Built claims submission system for Amazon SPN with end-to-end encryption for customer-critical data in transit',
      'Created reusable currency conversion feature with configurable 2-level distributed caching and exponential back-off with jitter',
    ],
  },
  {
    title: 'SDE Intern',
    company: 'Amazon — Service Provider Network',
    period: 'Summer 2017',
    description:
      'Built seller communication tooling and automated localization testing frameworks during internship.',
    highlights: [
      'Developed prototype for Seller-Provider Communication Tool with custom rollout toggle',
      'Automated post-launch localization testing and report generation for Global Selling using Selenium',
    ],
  },
  {
    title: 'Technical Trainee',
    company: 'DRDO — Nuclear Radiation Management',
    period: '2016 – 2017',
    description:
      'Researched and implemented FFT solutions for Computed Tomography image reconstruction at India\'s Defence Research and Development Organisation.',
    highlights: [
      'Implemented efficient Fast Fourier Transform solutions for CT image reconstruction under Dr. D.K. Tripathi (Scientist \'F\')',
      'Solutions designed for use in military equipment applications',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3EEFF] via-[#FAFBFF] to-[#FDF8F0]" />
      <div className="absolute top-0 left-0 right-0 section-gradient-line" />
      
      {/* Floating accent */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#4B2E83]/[0.03] rounded-full blur-3xl pointer-events-none hidden md:block" />

      <div ref={ref} className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2E83] mb-2">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4B2E83] to-[#B7A57A] rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4B2E83] via-[#B7A57A] to-[#4B2E83]/10" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-[#4B2E83] border-2 border-white shadow-lg shadow-[#4B2E83]/30" />

                <motion.div
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="p-6 bg-white border border-[#4B2E83]/10 rounded-xl hover:border-[#4B2E83]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#4B2E83]/5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#4B2E83]">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#6B4EAD]">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-sm text-[#B7A57A] font-mono mt-1 sm:mt-0 px-3 py-1 bg-[#B7A57A]/10 rounded-full font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#1E1B3A]/70 text-sm mb-3">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.15 + j * 0.05 }}
                        className="flex items-start gap-2 text-sm text-[#1E1B3A]/60"
                      >
                        <ChevronRight className="w-4 h-4 text-[#B7A57A] flex-shrink-0 mt-0.5" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
