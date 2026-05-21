# Krish Patel — Portfolio

Personal portfolio website showcasing my projects, experience, skills, and certifications.

**Live site:** [https://lord-samosa.github.io/krish-portfolio/](https://lord-samosa.github.io/krish-portfolio/)

## About

I'm a Computer Science student at Virginia Commonwealth University (AI minor), focused on software development, problem-solving, and building practical projects — from multiplayer games to competition-winning digital work.

## Features

- Responsive layout with custom amber/rose theme
- Project showcase with image previews
- Experience timeline and skills sections
- Certifications (Java & Microsoft Access link to Certiport)
- Resume viewer modal
- Contact links (GitHub, LinkedIn, email)

## Tech Stack

- [Next.js](https://nextjs.org/) (static export)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Deployed with [GitHub Pages](https://pages.github.com/)

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Local development

```bash
git clone https://github.com/Lord-Samosa/krish-portfolio.git
cd krish-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If the dev cache breaks or you see a white screen:

```bash
npm run dev:clean
```

### Production build (local test)

```bash
npm run build
```

Static files are output to the `out/` folder.

## Deploy to GitHub Pages

### Option 1 — GitHub Actions (recommended)

1. Push to the `main` branch
2. In the repo, go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically

### Option 2 — Manual deploy

```bash
npm run deploy
```

This runs `npm run build` and publishes the `out/` folder to the `gh-pages` branch.

## Project Structure

```
src/
├── app/              # Pages and global styles
├── components/       # UI components (navbar, projects, resume modal, etc.)
├── data/             # Projects, experience, certifications content
└── lib/              # Helpers (asset paths for GitHub Pages)
public/
└── img/              # Images (profile, projects, skills, resume)
```

## Contact

- **Email:** krish7123p@gmail.com
- **LinkedIn:** [linkedin.com/in/krish-patel1011](https://www.linkedin.com/in/krish-patel1011)
- **GitHub:** [github.com/Lord-Samosa](https://github.com/Lord-Samosa)

## License

This project is for personal portfolio use.
