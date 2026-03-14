import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Lumora AI',
    description:
      'Intelligent CRM platform for personal wealth managers, built during CSE P 589 (Software Entrepreneurship). Pitched to 16 venture capitalists at Pioneer Square Labs. Featured in GeekWire.',
    tags: ['AI/ML', 'React', 'Python', 'CRM', 'Entrepreneurship'],
    emoji: '💡',
    color: 'purple',
  },
  {
    title: 'Agentic AI Personal Assistant',
    description:
      'Built a fleet of personal staff agents on Mac Studio M4 Max (128GB). Orchestrates voice synthesis (TTS/ASR), browser automation, proactive scheduling, and local LLM inference with zero cloud dependency.',
    tags: ['Python', 'Multi-Agent', 'Voice AI', 'Local LLM', 'Automation'],
    emoji: '🤖',
    color: 'gold',
  },
  {
    title: 'GrowSpace',
    description:
      'Application connecting Seattle urban gardeners with neighbors who have unused growing spaces. Built in CSE P 510 (HCI) with human-centered design, prioritizing community connection.',
    tags: ['React', 'HCI', 'User Research', 'Community Design'],
    emoji: '🌱',
    color: 'purple',
  },
  {
    title: 'WordBook',
    description:
      'Cross-platform, multi-lingual & personalized vocabulary builder with features to help vocabulary learning. Includes support for finding connected words and phrases across browsers.',
    tags: ['Cross-Browser', 'JavaScript', 'NLP', 'Personalization'],
    emoji: '📚',
    color: 'gold',
  },
  {
    title: 'Pose Invariant Face Recognition',
    description:
      'Machine Learning model for improving efficiency of traditional Face Recognition systems. Designed and implemented using Convolutional Neural Networks (CNNs) and Extreme Learning Machines (ELMs).',
    tags: ['CNNs', 'ELMs', 'Python', 'Computer Vision', 'ML'],
    emoji: '👁️',
    color: 'purple',
  },
  {
    title: 'elth.ai — Virtual Health Assistant',
    description:
      'Core chatbot for assessing health symptoms, finding doctors, and booking appointments. Built clinic fetch, appointment booking, and Dialogflow integration with Facebook Messenger.',
    tags: ['Dialogflow', 'Chatbot', 'Healthcare', 'API Integration'],
    emoji: '💬',
    color: 'purple',
  },
]

const colorClasses = {
  purple: {
    border: 'hover:border-[#4B2E83]/30',
    tag: 'bg-[#4B2E83]/8 text-[#4B2E83] border border-[#4B2E83]/15',
    shadow: 'hover:shadow-[#4B2E83]/8',
  },
  gold: {
    border: 'hover:border-[#B7A57A]/40',
    tag: 'bg-[#B7A57A]/10 text-[#85754D] border border-[#B7A57A]/20',
    shadow: 'hover:shadow-[#B7A57A]/8',
  },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4B2E83]/[0.04] rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#B7A57A]/[0.06] rounded-full blur-3xl hidden md:block" />
      </div>
      <div className="absolute top-0 left-0 right-0 section-gradient-line" />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4B2E83] mb-2">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4B2E83] to-[#B7A57A] rounded-full mb-4" />
          <p className="text-[#1E1B3A]/60 mb-12 max-w-2xl">
            From AI startups pitched to VCs, to local inference stacks on Apple Silicon,
            to human-centered design at UW. Here's what I've been building. 🐾
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const colors = colorClasses[project.color]
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 bg-white border border-[#4B2E83]/8 rounded-xl transition-all duration-300 hover:shadow-xl ${colors.border} ${colors.shadow}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.span
                    className="text-3xl"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2, transition: { duration: 0.4 } }}
                  >
                    {project.emoji}
                  </motion.span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4B2E83]/30 hover:text-[#4B2E83] transition-colors p-1"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-[#4B2E83] mb-2 group-hover:text-[#6B4EAD] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#1E1B3A]/55 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md ${colors.tag}`}
                    >
                      {tag}
                    </span>
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
