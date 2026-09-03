# Ayush's Code Canvas

# Master Prompt — Ayush Kesharwani 3D Animated Portfolio

Paste everything below into your AI tool of choice (Claude, v0, Bolt, Cursor, etc.) to generate the site.

---

## Role & Brief

Act as a senior front-end designer/engineer at a studio known for distinctive, non-templated portfolio sites. Build a single-page, 3D-animated professional portfolio for a software engineer, then produce it as a static site ready to deploy on **Netlify**. Do not default to generic AI-portfolio looks (cream background + serif + terracotta accent; near-black + one neon accent; broadsheet hairline-rule layout). Make deliberate choices grounded in this person's actual world: Git/GitHub, code, AI/ML, competitive programming.

## Tech requirements

- Plain **HTML + CSS + JS** (no build step) so it can be deployed by dragging the folder into Netlify or via `netlify.toml` — OR React + react-three-fiber if the tool defaults to React, with a working `npm run build` and Netlify config either way.
- 3D via **Three.js** (or react-three-fiber). Keep the animated 3D moment to the hero — one orchestrated signature, not scattered effects everywhere.
- Fully responsive down to mobile; respect `prefers-reduced-motion` (fall back to a static/gently-fading hero); visible keyboard focus states.
- Include a `netlify.toml` with the correct `publish` directory (and `build` command if using a framework).
- Fast load: lazy the 3D canvas, avoid heavy textures/models.

## Signature design idea (use or riff on this — make it your own)

This person's identity is GitHub/commits/rank algorithms (he literally built a GitHub-analytics ranking tool). Turn the familiar 2D GitHub contribution heatmap into a **3D extruded bar-scape** in the hero: a grid of boxes with varying height/color = commit intensity, slowly auto-rotating, subtle parallax on mouse move. Section eyebrows can use short git-hash-style labels (e.g. `#4f2a91`) instead of generic numbered markers (01/02/03), since that's true to the content (git), not decoration.

## Design tokens (starting point — adjust as you see fit, stay coherent)

- **Color:** ink navy background `#0B0F1A`, surface `#121826`, surface-alt `#1A2233`, warm parchment text `#ECE8DE`, muted text `#8C93A6`, accent gold `#FFB454`, accent teal `#5EEAD4`, hairline border `rgba(255,255,255,0.08)`.
- **Type:** display — Space Grotesk; body — Inter; mono/data/labels — JetBrains Mono. Clear type scale, intentional weights.
- **Layout:** full-bleed 3D hero → About → Skills → Experience → Projects → Leadership & Achievements → Contact/footer. Sticky/fixed nav with section links + external icon links.

## Site content

### Identity
- **Name:** Ayush Kesharwani
- **Title/role:** Software Engineer — Full-Stack & AI/ML
- **Phone:** +91-9588430618
- **Email:** ayush.kesharwani.work@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/ayushkesharwani1207/
- **GitHub:** https://github.com/kesharwaniayush
- **LeetCode:** https://leetcode.com/u/Ayush_Kesharwani_1207/
- **Reference/previous portfolio (for content/tone reference only, don't copy design):** https://portfolio-ayush-main.vercel.app/
- **Photo:** placeholder avatar/frame in the hero or About section — I will drop in `photo.jpg` myself.
- **Resume:** a "Download Résumé" button linking to `resume.pdf` — I will drop in the real file myself; use a placeholder link/path for now.

### Professional summary
Software Engineer with experience across the full development lifecycle — REST API design, cloud deployment, and AI/ML model integration. Skilled in full-stack development, scalable back-end systems, and production-ready AI applications using modern frameworks. Strong fundamentals in DSA, OOP, and Agile methodologies with a track record of delivering impactful software.

### Education
**Modern Education Society's Wadia College of Engineering**, Pune, Maharashtra
Bachelor of Engineering, Computer Engineering — SGPA: 9.29/10
Aug 2023 – Jul 2027

### Technical skills (group these as categories/cards)
- **Languages:** C, C++, Java, Python, JavaScript, SQL
- **Frontend:** React.js, Redux, HTML5, CSS3, Tailwind CSS, Bootstrap
- **Backend:** Node.js, Express.js, FastAPI, REST APIs, CI/CD, GitHub Actions
- **AI/ML:** Machine Learning, Deep Learning, NLP, Computer Vision, Transformers, Generative AI, RAG
- **Frameworks:** PyTorch, TensorFlow, Scikit-learn, Hugging Face, LangChain
- **Databases:** MongoDB, PostgreSQL, MySQL, Firebase, FAISS, ChromaDB
- **Tools:** Git, GitHub, Linux, VS Code, Postman, Jupyter Notebook
- **Core CS:** Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, SDLC, Agile

### Experience
**Web Developer Intern — Remote** · Feb 2026 – Apr 2026
Vrikshamitra Foundation, Bengaluru, Karnataka
- Developed 8+ full-stack features using React.js, Node.js, and REST APIs, improving performance and reducing page load time by 25%.
- Optimized backend performance by resolving 30+ bugs and implementing CI/CD, reducing deployment time by 75%.

### Projects
**DevRank** — Next.js, React.js, TypeScript, Tailwind CSS, GitHub API, Gemini API — *(Live / Code links: placeholder, to be filled in)*
- Built an AI-powered GitHub analytics platform that analyzed 1,000+ GitHub profiles to rank developers based on coding activity, repositories, and technical skills.
- Integrated 15+ GitHub API endpoints to generate real-time developer insights, repository analytics, and personalized recommendations.

**LegaliTea AI** — React.js, Node.js, Express.js, Llama 3.3-70B, REST APIs — *(Live / Code links: placeholder)*
- Built a scalable AI-powered legal document analysis platform using Llama 3.3-70B with RESTful back-end APIs, real-time analysis, multi-language support, and AI fallback for high reliability.
- Implemented gamified learning (quizzes, achievements, progress tracking), clause visualization, and robust debugging workflows; contributed to automated build pipeline setup.

**AI Resume Analyzer** — React.js, TypeScript, React Router, Tailwind CSS, Gemini API — *(Live / Code links: placeholder)*
- Built an AI-powered tool evaluating ATS compatibility, keyword relevance, and formatting quality with secure auth, cloud-based storage, and AI resume-to-JD scoring to identify skill gaps.
- Designed a reusable component-level front-end architecture in React with clean separation of concerns and unit-tested key UI components. 
Add links of Project such as https://dev-rank-delta.vercel.app/ , https://devpath-kohl.vercel.app/,https://hackathon-hacktoberfest-2025.vercel.app/,https://legalitea-genai.vercel.app/
### Leadership
**Technical Head** · 2024 – 2025 · MESWCOE E-Cell — Entrepreneurship Cell, Pune, Maharashtra
- Led technical initiatives by driving sprint planning, peer code reviews, and end-to-end project execution, delivering scalable and production-ready solutions for club events.

### Achievements
- **Winner** — Hacktoberfest (DigitalOcean, India) and RoboCon (CRIF India), 2025 & 2024
- **Finalist** — MumbaiHacks and ByteVerse 7.0 (NIT Patna), 2025

## Deliverables to produce

1. Full site files (`index.html` + assets, or a React project) implementing the above.
2. `netlify.toml` for one-click deploy.
3. A short `README.md`: how to preview locally and deploy to Netlify (drag-and-drop and CLI options), plus where to drop in `photo.jpg` and `resume.pdf`.

---
*Tip: paste this whole document as your first message to whichever tool you're using — it's self-contained.*

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3ce281f6-e0d7-41e6-893f-4aa926a5e7e6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
