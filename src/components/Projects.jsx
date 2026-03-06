import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, Bot, Lightbulb, Sprout, Network, Server, Wifi, Brain } from 'lucide-react'

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
      'Multi-agent AI system running on Mac Studio M4 Max with 128GB RAM. Features voice synthesis (TTS/ASR), browser automation, proactive scheduling, and local LLM inference with zero cloud dependency.',
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
    accent: 'blue',
  },
  {
    title: 'Multi-Agent Orchestration Framework',
    description:
      'Sub-agent spawning system with parallel task execution, cross-session communication, and intelligent routing across multiple AI models (Claude, GPT, Qwen, Gemini).',
    tags: ['Python', 'Node.js', 'MCP', 'Orchestration', 'Async'],
    icon: Network,
    accent: 'emerald',
  },
  {
    title: 'Local AI Inference Stack',
    description:
      'Full local AI stack: Qwen 72B for reasoning, Qwen3-TTS for voice synthesis, Qwen3-ASR for transcription, and vector embeddings. All running on Apple Silicon M4 Max GPU at zero cloud cost.',
    tags: ['Qwen 72B', 'TTS/ASR', 'Apple Silicon', 'MLX', 'Vector DB'],
    icon: Server,
    accent: 'blue',
  },
  {
    title: 'NLP & Multilingual AI Research',
    description:
      'Explored LLMs and AI systems for bridging language barriers in CSE P 517 (NLP). Built on experience with Alexa\'s multilingual models to research democratizing access to information.',
    tags: ['NLP', 'LLMs', 'Multilingual', 'Python', 'Research'],
    icon: Brain,
    accent: 'emerald',
  },
  {
    title: 'SDN & Network Systems',
    description:
      'Software-defined networking projects including SDN controllers, Mininet topologies, and network protocol implementations for CSEP 561 at UW.',
    tags: ['SDN', 'Mininet', 'Python', 'OpenFlow', 'Networking'],
    icon: Wifi,
    accent: 'blue',
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
