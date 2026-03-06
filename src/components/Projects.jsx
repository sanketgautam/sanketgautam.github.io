import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Bot, Smartphone, Network, Server, Wifi, Cloud } from 'lucide-react'

const projects = [
  {
    title: 'OpenClaw AI Assistant',
    description:
      'Multi-agent personal AI system running on Mac Studio M4 Max. Features voice synthesis, browser automation, and proactive scheduling. Open source contributor.',
    tags: ['Python', 'Multi-Agent', 'Voice AI', 'Automation'],
    icon: Bot,
    accent: 'blue',
    link: 'https://github.com/sanketgautam',
  },
  {
    title: 'Personal Automation Platform',
    description:
      'WhatsApp, Slack, and Telegram integrated assistant with 10+ custom skills, phone call capability, and local LLM inference for private, intelligent automation.',
    tags: ['Node.js', 'LLM', 'WhatsApp API', 'Slack', 'Telegram'],
    icon: Smartphone,
    accent: 'emerald',
  },
  {
    title: 'Multi-Agent Orchestration',
    description:
      'Sub-agent spawning system with parallel task execution and cross-session communication. Enables complex workflows through coordinated AI agents.',
    tags: ['Python', 'Orchestration', 'MCP', 'Async'],
    icon: Network,
    accent: 'blue',
  },
  {
    title: 'Local AI Stack',
    description:
      'Full local AI inference stack running Qwen 72B, Qwen3-TTS/ASR, and vector embeddings — all on Apple Silicon. Zero cloud dependency for AI workloads.',
    tags: ['Qwen 72B', 'TTS/ASR', 'Apple Silicon', 'Vector DB'],
    icon: Server,
    accent: 'emerald',
  },
  {
    title: 'UW Network Projects',
    description:
      'Software-defined networking projects including SDN controllers, Mininet topologies, and network systems coursework at the University of Washington.',
    tags: ['SDN', 'Mininet', 'Python', 'Networking'],
    icon: Wifi,
    accent: 'blue',
  },
  {
    title: 'Amazon Scale Systems',
    description:
      'Built and maintained services handling millions of daily requests across Alexa, AWS, Retail, and Selling Partner Services at Amazon.',
    tags: ['Java', 'AWS', 'Distributed Systems', 'Microservices'],
    icon: Cloud,
    accent: 'emerald',
  },
]

const accentClasses = {
  blue: {
    border: 'hover:border-blue-500/30',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-400',
    tag: 'bg-blue-500/10 text-blue-300',
  },
  emerald: {
    border: 'hover:border-emerald-500/30',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-300',
  },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Projects
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-4" />
          <p className="text-slate-400 mb-12 max-w-2xl">
            A selection of projects I've built, from personal AI systems to
            large-scale distributed services at Amazon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const colors = accentClasses[project.accent]
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className={`group p-6 bg-slate-800/40 border border-slate-700/40 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/50 ${colors.border}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-lg ${colors.iconBg}`}>
                    <Icon className={`w-5 h-5 ${colors.iconText}`} />
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-300 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <Github className="w-5 h-5" />
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
