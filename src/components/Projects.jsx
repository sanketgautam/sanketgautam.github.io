import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Bot, Lightbulb, Sprout, BookOpen, ScanFace, Wifi, MessageSquare, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Lumora AI',
    description:
      'Intelligent CRM platform for personal wealth managers, built during CSE P 589 (Software Entrepreneurship). Pitched to 16 venture capitalists at Pioneer Square Labs. Featured in GeekWire.',
    tags: ['AI/ML', 'React', 'Python', 'CRM', 'Entrepreneurship'],
    icon: Lightbulb,
    accent: 'blue',
  },
  {
    title: 'Agentic AI Personal Assistant',
    description:
      'Multi-agent AI system running on Mac Studio M4 Max (128GB). Features voice synthesis (TTS/ASR), browser automation, proactive scheduling, and local LLM inference with zero cloud dependency.',
    tags: ['Python', 'Multi-Agent', 'Voice AI', 'Local LLM', 'Automation'],
    icon: Bot,
    accent: 'emerald',
    link: 'https://github.com/sanketgautam',
  },
  {
    title: 'GrowSpace',
    description:
      'Application connecting Seattle urban gardeners with neighbors who have unused growing spaces. Built in CSE P 510 (HCI) with human-centered design, prioritizing community connection over transactions.',
    tags: ['React', 'HCI', 'User Research', 'Community Design'],
    icon: Sprout,
    accent: 'purple',
  },
  {
    title: 'WordBook',
    description:
      'Cross-platform, multi-lingual & personalized vocabulary builder with features to help vocabulary learning. Includes support for finding connected words and phrases across browsers.',
    tags: ['Cross-Browser', 'JavaScript', 'NLP', 'Personalization'],
    icon: BookOpen,
    accent: 'blue',
  },
  {
    title: 'Pose Invariant Face Recognition',
    description:
      'Machine Learning model for improving efficiency of traditional Face Recognition systems. Designed and implemented using Convolutional Neural Networks (CNNs) and Extreme Learning Machines (ELMs).',
    tags: ['CNNs', 'ELMs', 'Python', 'Computer Vision', 'ML'],
    icon: ScanFace,
    accent: 'emerald',
  },
  {
    title: 'SDN & Network Systems',
    description:
      'Software-defined networking projects including SDN controllers, Mininet topologies, and network protocol implementations for CSEP 561 at UW.',
    tags: ['SDN', 'Mininet', 'Python', 'OpenFlow', 'Networking'],
    icon: Wifi,
    accent: 'purple',
  },
  {
    title: 'elth.ai — Virtual Health Assistant',
    description:
      'Core chatbot for assessing health symptoms, finding doctors, and booking appointments. Built clinic fetch, appointment booking, and Dialogflow integration with Facebook Messenger.',
    tags: ['Dialogflow', 'Chatbot', 'Healthcare', 'API Integration'],
    icon: MessageSquare,
    accent: 'blue',
  },
]

const accentClasses = {
  blue: {
    border: 'hover:border-blue-500/40',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-400',
    tag: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
    glow: 'group-hover:shadow-blue-500/10',
  },
  emerald: {
    border: 'hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  purple: {
    border: 'hover:border-purple-500/40',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-400',
    tag: 'bg-purple-500/10 text-purple-300 border border-purple-500/20',
    glow: 'group-hover:shadow-purple-500/10',
  },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-4" />
          <p className="text-slate-400 mb-12 max-w-2xl">
            From AI startups pitched to VCs, to local inference stacks on Apple Silicon,
            to human-centered design at UW. Here's what I've been building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const colors = accentClasses[project.accent]
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-6 bg-slate-800/40 border border-slate-700/40 rounded-xl transition-all duration-300 hover:shadow-2xl ${colors.border} ${colors.glow} backdrop-blur-sm`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`p-2.5 rounded-lg ${colors.iconBg}`}
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    >
                      <Icon className={`w-5 h-5 ${colors.iconText}`} />
                    </motion.div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-300 transition-colors p-1"
                        aria-label={`View ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
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
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
