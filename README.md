# CSEP-561 Winter 2026 — Project 3 Alternative: Personal Website

**Student:** Sanket Gautam  
**Course:** CSEP-561 Network Systems (Winter 2026)  
**Instructor:** Kurtis Heimerl (@kheimerl)

---

## 🌐 Website URL

### **https://sanketgautam.me**

The website is live, publicly accessible, and served over HTTPS with a valid TLS certificate.

---

## Project Summary

This project implements an end-to-end personal portfolio website fulfilling all requirements:

| Requirement | Implementation | Status |
|-------------|----------------|--------|
| Valid TLD | `sanketgautam.me` via Namecheap | ✅ |
| Valid Certificate | Let's Encrypt via GitHub Pages (auto-provisioned) | ✅ |
| HTTPS Encryption | Enforced via GitHub Pages HTTPS settings | ✅ |
| Esthetically Pleasing | Modern React + Tailwind CSS design with animations | ✅ |
| Source Control | GitHub with visible commit history | ✅ |
| AI Usage Documented | See detailed section below | ✅ |

---

## Part 1: Website Development

### Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 19 + Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (auto-deploy on push) |

### Website Sections

- **Hero** — Animated intro with gradient text, PNW mountain silhouette background
- **About** — Professional summary with highlight cards
- **Experience** — Amazon career timeline (7+ years: Alexa, AWS, Retail, SPS)
- **Projects** — Featured projects including Agentic AI systems
- **Skills** — Categorized display (Languages, AI/ML, Cloud, Tools)
- **Education** — UW MS CS (3.9 GPA) + MANIT B.Tech
- **Contact** — Contact form with email link

### Design Philosophy

The website uses University of Washington brand colors (#4B2E83 purple, #B7A57A gold) as a nod to my current graduate program. The geometric wolf/husky logo in the navbar is a custom SVG designed to reflect the UW Husky mascot. The Pacific Northwest mountain silhouette in the hero section represents my Seattle location.

---

## Part 2: Top-Level Domain (TLD) Setup

### Domain Details

| Property | Value |
|----------|-------|
| Domain | `sanketgautam.me` |
| Registrar | Namecheap |
| TLD | `.me` (Montenegro ccTLD, commonly used for personal sites) |
| Cost | ~$10/year |

### DNS Configuration

The domain uses Namecheap DNS with the following records pointing to GitHub Pages:

```
Type    Host    Value                   TTL
A       @       185.199.108.153         Auto
A       @       185.199.109.153         Auto
A       @       185.199.110.153         Auto
A       @       185.199.111.153         Auto
CNAME   www     sanketgautam.github.io  Auto
```

### DNS Propagation Observations

When I initially configured the DNS records, I observed:
- **Google DNS (8.8.8.8):** Resolved within ~10 minutes
- **Local ISP DNS:** Took approximately 30-60 minutes to propagate
- **Full global propagation:** Completed within 2 hours

This aligns with the expected behavior where authoritative nameservers update quickly, but cached resolvers may take longer depending on TTL values.

---

## Part 3: Certificate / HTTPS Setup

### Certificate Details

| Property | Value |
|----------|-------|
| Certificate Authority | Let's Encrypt |
| Provisioning | Automatic via GitHub Pages |
| Certificate Type | DV (Domain Validated) |
| Encryption | TLS 1.3 |
| HTTPS Enforcement | Enabled (HTTP → HTTPS redirect) |

### How It Works

GitHub Pages automatically provisions and renews Let's Encrypt certificates for custom domains. The process:

1. GitHub verifies domain ownership via DNS records
2. Let's Encrypt issues a DV certificate
3. Certificate auto-renews before expiration
4. HTTPS is enforced via GitHub Pages settings (Settings → Pages → Enforce HTTPS)

No manual certificate management was required — this is a major advantage of the GitHub Pages + Let's Encrypt integration.

---

## AI Tools Usage (Required Documentation)

This project was developed with assistance from AI tools, as permitted by the assignment guidelines. Below is a detailed accounting of tools used and representative prompts.

### Tools Used

| Tool | Purpose |
|------|---------|
| **Claude (Anthropic)** | Primary development assistant via Claude Code CLI and OpenClaw agent framework |
| **Cursor IDE** | AI-assisted code editing during initial scaffolding |

### Development Approach

I used an AI agent system called "Cozmo" (powered by Claude) as a development partner. The agent has access to my local filesystem, can run shell commands, and can push to GitHub. This allowed for a highly iterative development process where I provided high-level direction and the agent implemented changes.

### Representative Prompts and Interactions

**Initial Setup:**
> "Create a modern React + Vite portfolio website with Tailwind CSS. Use Framer Motion for animations. Structure it with Hero, About, Experience, Projects, Skills, Education, and Contact sections."

**Design Iteration:**
> "The hero section looks too plain. Add a PNW mountain silhouette SVG background in UW purple colors. Make the gradient text pop more."

**Navbar Refinement:**
> "Move the social icons and location from the hero to the navbar. Put them on the left side. Remove the husky logo for now."

**Logo Integration:**
> "Add this wolf/husky silhouette SVG on the top left of the navbar. Size it bigger so it feels natural. Reorganize icons to make aesthetics better."
> [Provided custom SVG code]

**Content Updates:**
> "Update the contact email to sanketg@uw.edu. Restore the Agentic AI project with this description: 'Built a fleet of personal staff agents on Mac Studio M4 Max (128GB)...'"

**Bug Fixes:**
> "The floating elements look broken. Make them part of the header. Rearrange from left to right on the top."

### AI Contribution Summary

- **Scaffolding:** React component structure, Vite config, Tailwind setup
- **Styling:** Tailwind CSS classes, color schemes, responsive design
- **Animations:** Framer Motion configurations for smooth transitions
- **SVG Graphics:** Mountain background, wolf logo integration
- **Deployment:** GitHub Actions workflow for auto-deploy
- **Iteration:** Rapid feedback loop for design refinements

All AI-generated code was reviewed, tested, and customized. The final design reflects my personal aesthetic preferences developed through iterative feedback.

---

## Development History

The git history shows continuous development and refinement. Key commits:

```
db2397a feat: add geometric wolf logo + reorganize navbar
3fe8966 fix: clean navbar - remove husky, integrate social+location
035fc9f fix: move location + social icons to top left
b53adcb fix: address all remaining hero section feedback
7760878 feat: comprehensive hero section polish
376fe10 fix: remove ugly wolf silhouette, darken theme
883d2ca feat: restore Agentic AI project with description
c0ecea0 fix: update contact email to sanketg@uw.edu
... (earlier commits for initial build)
```

This demonstrates iterative development with clear commit messages documenting each change.

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
sanketgautam.github.io/
├── public/                  # Static assets (resume PDF, favicon)
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.jsx   # Navbar with wolf logo
│   │   ├── Hero.jsx         # Hero with mountain background
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── package.json
├── CNAME                    # Custom domain for GitHub Pages
└── .github/workflows/
    └── deploy.yml           # CI/CD pipeline
```

---

## Deployment

The site auto-deploys via GitHub Actions on every push to the `master` branch:

1. Checkout code
2. Install Node.js dependencies
3. Run `npm run build`
4. Deploy `dist/` to GitHub Pages
5. GitHub Pages serves content with Let's Encrypt certificate

Average deploy time: ~45 seconds from push to live.

---

## License

MIT License

---

## Submission Checklist

- [x] Website live at valid TLD: https://sanketgautam.me
- [x] Valid TLS certificate (Let's Encrypt)
- [x] HTTPS enforced
- [x] Esthetically pleasing design
- [x] Source control with visible development history
- [x] AI usage documented with tools and prompts
- [x] @kheimerl added as collaborator on GitHub repository
- [x] README submitted on Canvas
