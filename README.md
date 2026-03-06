# sanketgautam.me

Personal portfolio website for Sanket Gautam — Software Engineer at Amazon, MS CS student at the University of Washington.

**Live:** [sanketgautam.me](https://sanketgautam.me)

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | React 19 + Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Domain | sanketgautam.me (Namecheap) |

## Sections

- **Hero** — Animated intro with gradient effects and social links
- **About** — Professional summary with highlight cards
- **Experience** — Amazon career timeline (Alexa, AWS, Retail, SPS)
- **Projects** — Grid of featured projects with tech tags
- **Skills** — Categorized skill display (Languages, AI/ML, Cloud, Tools)
- **Education** — UW MS CS + MANIT B.Tech
- **Contact** — Contact form and social links

## Development

```bash
npm install
npm run dev     # Start dev server at localhost:5173
npm run build   # Production build to dist/
npm run preview # Preview production build
```

## Deployment

Deployed automatically via GitHub Actions on push to `react-rebuild`. The workflow builds the Vite project and deploys to GitHub Pages with the custom domain `sanketgautam.me`.

## AI Tools Used

This project was built with assistance from AI tools as part of the CSEP-561 Winter 2026 Project 3 assignment:

- **Claude Code (Anthropic)** — Used for project scaffolding, component architecture, content structuring, and generating React + Tailwind CSS code. Claude helped with:
  - Designing the component hierarchy and file structure
  - Writing JSX components with Framer Motion animations
  - Configuring Vite, Tailwind CSS v4, and GitHub Actions deployment
  - Tailoring content from the HANDOFF.md specification into polished UI sections

- **Cursor IDE** — AI-assisted code editor used during development

All AI-generated code was reviewed, tested, and customized to ensure correctness and adherence to project requirements.

## Project Structure

```
sanketgautam.github.io/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json
├── CNAME                # Custom domain
├── HANDOFF.md           # Project specification
└── .github/workflows/   # CI/CD
    └── deploy.yml
```

## License

MIT License — see [LICENSE.md](LICENSE.md)
