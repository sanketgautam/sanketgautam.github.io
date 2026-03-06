# Project 3: Personal Website Implementation Guide

## Handoff Document for sanketgautam.me

**Project:** CSEP-561 Winter 2026 - Project 3 Alternative
**Domain:** sanketgautam.me
**Due Date:** March 13, 2026 @ 11:59PM PT
**Hosting:** GitHub Pages
**Framework:** React with Tailwind CSS

---

## Owner Information

### About Sanket Gautam

#### Professional Summary
Software Engineer at Amazon (Seattle) with 7+ years of experience across Alexa, AWS, Retail, and Selling Partner Services. Currently pursuing a Master's in Computer Science at the University of Washington, focusing on AI, computer vision, and entrepreneurship.

#### Current Role
- **Title:** Software Development Engineer (SDE)
- **Company:** Amazon
- **Location:** Seattle, Washington
- **Teams:** Alexa, AWS, Retail, Selling Partner Services

#### Education
| Degree | Institution | Focus Areas | Status |
|--------|-------------|-------------|--------|
| M.S. Computer Science | University of Washington | AI, Computer Vision, Entrepreneurship | In Progress (2026) |
| B.Tech Computer Science | MANIT Bhopal | Computer Science | Completed |

#### Current Coursework (UW)
- CSEP 561: Computer Networks / Network Systems (Winter 2026)

#### Core Interests & Expertise
1. **Agentic AI** (Primary Focus)
   - Multi-agent systems
   - Orchestration frameworks
   - MCP servers
   - Multi-step automation workflows

2. **Technical Skills**
   - Languages: Python, Java, JavaScript/TypeScript, Go
   - AI/ML: Multi-agent systems, computer vision, LLMs
   - Cloud: AWS (7+ years), distributed systems
   - Tools: React, Node.js, Docker, Kubernetes

#### Projects to Highlight
1. **OpenClaw AI Assistant** - Multi-agent personal AI system running on Mac Studio M4 Max. Voice synthesis, browser automation, proactive scheduling. Open source contributor.
2. **Personal Automation Platform** - WhatsApp/Slack/Telegram integrated assistant with 10+ custom skills, phone call capability, local LLM inference
3. **Multi-Agent Orchestration** - Sub-agent spawning system with parallel task execution, cross-session communication
4. **Local AI Stack** - Qwen 72B inference, Qwen3-TTS/ASR, vector embeddings - all running locally on Apple Silicon
5. **UW Network Projects** - SDN, Mininet, network systems coursework
6. **Amazon Scale Systems** - Built and maintained services handling millions of requests (Alexa, AWS, Retail)

#### Career Goals
- Transition to AI/ML focused role (targeting Google L5)
- Build recognition in agentic AI space
- Launch AI company focused on intelligent personal systems
- O-1A visa pathway through extraordinary ability in AI

#### Personal Interests
- Finance and investing (active portfolio management, AI-driven sectors)
- Fitness and health tracking
- Travel and outdoor adventures (PNW hiking)
- Family

#### Contact & Links
- **Email:** sk2gautam@gmail.com
- **LinkedIn:** linkedin.com/in/sanketgautam
- **GitHub:** github.com/sanketgautam
- **Location:** Seattle, WA

---

## Technical Requirements

### Technology Stack
| Component | Technology |
|-----------|------------|
| Framework | React + Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | GitHub Pages |
| Domain | sanketgautam.me (Namecheap) |

### Design
- Dark mode first (slate-900 background)
- Color palette: Slate 900 primary, Blue 500 accent, Emerald 500 secondary accent
- Typography: Inter for text, JetBrains Mono for code
- Subtle Framer Motion animations (fade-ins, scroll reveals)
- Mobile responsive

### Sections Required
1. Hero - Name, title, tagline, CTA buttons, social links
2. About - Professional summary, highlights
3. Experience - Amazon roles timeline
4. Projects - Grid of project cards with tech stack tags
5. Skills - Categorized display
6. Education - UW + undergrad
7. Contact - Email, LinkedIn, form

### Deployment
- GitHub Actions workflow for auto-deploy to GitHub Pages
- CNAME file for sanketgautam.me
- HTTPS via GitHub Pages

### GitHub
- Add professor `kheimerl` as collaborator
- Meaningful commit history
- Comprehensive README with AI tools documentation
