import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import photo from "@/assets/photo.asset.json";
import resume from "@/assets/resume.asset.json";

const CommitScape = lazy(() => import("@/components/CommitScape"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Kesharwani — Software Engineer, Full-Stack & AI/ML" },
      {
        name: "description",
        content:
          "Portfolio of Ayush Kesharwani, software engineer building full-stack products and production AI/ML systems — DevRank, LegaliTea AI, AI Resume Analyzer.",
      },
      { property: "og:title", content: "Ayush Kesharwani — Software Engineer, Full-Stack & AI/ML" },
      {
        property: "og:description",
        content:
          "Full-stack and AI/ML engineer. REST API design, cloud deployment, LLM applications. Hacktoberfest & RoboCon winner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

const LINKS = {
  github: "https://github.com/kesharwaniayush",
  linkedin: "https://www.linkedin.com/in/ayushkesharwani1207/",
  leetcode: "https://leetcode.com/u/Ayush_Kesharwani_1207/",
  email: "mailto:ayush.kesharwani.work@gmail.com",
  phone: "tel:+919588430618",
};

const SKILLS: { hash: string; title: string; items: string[] }[] = [
  { hash: "#a1c07f", title: "Languages", items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"] },
  {
    hash: "#3e91bd",
    title: "Frontend",
    items: ["React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    hash: "#7fd2a4",
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "CI/CD", "GitHub Actions"],
  },
  {
    hash: "#c04e2b",
    title: "AI / ML",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Transformers",
      "Generative AI",
      "RAG",
    ],
  },
  {
    hash: "#5b2f9e",
    title: "Frameworks",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain"],
  },
  {
    hash: "#e0a13c",
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "FAISS", "ChromaDB"],
  },
  {
    hash: "#2b7a78",
    title: "Tools",
    items: ["Git", "GitHub", "Linux", "VS Code", "Postman", "Jupyter Notebook"],
  },
  {
    hash: "#9e4f6d",
    title: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "SDLC", "Agile"],
  },
];

const PROJECTS = [
  {
    hash: "#4f2a91",
    name: "DevRank",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "GitHub API", "Gemini API"],
    bullets: [
      "AI-powered GitHub analytics platform that analyzed 1,000+ profiles to rank developers by coding activity, repositories and technical skills.",
      "Integrated 15+ GitHub API endpoints for real-time developer insights, repository analytics and personalized recommendations.",
    ],
    live: "https://dev-rank-delta.vercel.app/",
  },
  {
    hash: "#8b1d47",
    name: "LegaliTea AI",
    stack: ["React.js", "Node.js", "Express.js", "Llama 3.3-70B", "REST APIs"],
    bullets: [
      "Scalable AI legal-document analysis platform on Llama 3.3-70B with RESTful back-end APIs, real-time analysis, multi-language support and AI fallback for reliability.",
      "Gamified learning (quizzes, achievements, progress tracking), clause visualization and robust debugging workflows; contributed to automated build pipeline setup.",
    ],
    live: "https://legalitea-genai.vercel.app/",
  },
  {
    hash: "#1f6f8b",
    name: "DevPath",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "AI"],
    bullets: [
      "Guided learning-path builder that turns a developer's goals into structured, trackable roadmaps.",
      "Component-driven front-end architecture with persistent progress state and responsive layouts.",
    ],
    live: "https://devpath-kohl.vercel.app/",
  },
  {
    hash: "#c96a13",
    name: "AI Resume Analyzer",
    stack: ["React.js", "TypeScript", "React Router", "Tailwind CSS", "Gemini API"],
    bullets: [
      "AI tool evaluating ATS compatibility, keyword relevance and formatting quality with secure auth, cloud storage and resume-to-JD scoring to identify skill gaps.",
      "Reusable component-level front-end architecture with clean separation of concerns and unit-tested key UI components.",
    ],
    live: "https://hackathon-hacktoberfest-2025.vercel.app/",
  },
];

function Portfolio() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="font-mono text-sm tracking-tight text-foreground">
            ayush<span className="text-primary">.</span>ke
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:text-foreground ${
                    active === n.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              GH
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              LI
            </a>
            <a
              href={LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              LC
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <CommitScape />
          </Suspense>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/80 via-background/25 to-background" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8">
          <p className="eyebrow rise">#init — commit history, extruded</p>
          <h1 className="rise mt-4 text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.95]">
            Ayush
            <br />
            Kesharwani
          </h1>
          <p className="rise mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Software Engineer — Full-Stack &amp; AI/ML.
            <br />
            <span className="text-accent">Pune, India</span> · building REST-first back-ends and
            production LLM applications.
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3">
            <a
              href={resume.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-5 py-3 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Download Résumé
            </a>
            <a
              href="#projects"
              className="rounded-md border border-border px-5 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              See Projects
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" hash="#0d9e21" title="About">
        <div className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-14">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl border border-border" aria-hidden="true" />
            <img
              src={photo.url}
              alt="Portrait of Ayush Kesharwani"
              loading="lazy"
              className="relative w-full rounded-lg object-cover grayscale-[15%]"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-foreground/90">
              Software engineer with experience across the full development lifecycle — REST API
              design, cloud deployment and AI/ML model integration. Skilled in full-stack
              development, scalable back-end systems and production-ready AI applications using
              modern frameworks.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Strong fundamentals in DSA, OOP and Agile methodologies, with a track record of
              delivering impactful software — from a GitHub-analytics ranking engine to LLM-powered
              document intelligence.
            </p>
            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <p className="eyebrow">Education</p>
              <h3 className="mt-3 text-lg font-medium">
                Modern Education Society&apos;s Wadia College of Engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Pune, Maharashtra</p>
              <p className="mt-3 font-mono text-sm text-foreground">
                B.E. Computer Engineering · SGPA <span className="text-primary">9.29/10</span>
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">Aug 2023 – Jul 2027</p>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" hash="#7e1f04" title="Technical Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s) => (
            <div
              key={s.title}
              className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[0.7rem] text-muted-foreground">{s.hash}</p>
              <h3 className="mt-2 text-base font-medium text-foreground">{s.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <li
                    key={i}
                    className="rounded border border-border bg-surface-alt px-2 py-1 font-mono text-[0.7rem] text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" hash="#2fa1c8" title="Experience">
        <div className="rounded-lg border border-border bg-card p-7 sm:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-xl font-medium">Web Developer Intern — Remote</h3>
            <p className="font-mono text-xs text-primary">Feb 2026 – Apr 2026</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Vrikshamitra Foundation · Bengaluru, Karnataka
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Developed 8+ full-stack features using React.js, Node.js and REST APIs, improving performance and reducing page load time by 25%.",
              "Optimized backend performance by resolving 30+ bugs and implementing CI/CD, reducing deployment time by 75%.",
            ].map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" hash="#4f2a91" title="Projects">
        <div className="grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <p className="font-mono text-[0.7rem] text-muted-foreground">{p.hash}</p>
              <h3 className="mt-2 text-2xl font-medium">{p.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded border border-border px-2 py-1 font-mono text-[0.68rem] text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex-1 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-4 font-mono text-xs">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Live ↗
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Code ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" hash="#b5842a" title="Leadership & Achievements">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-medium">Technical Head</h3>
              <p className="font-mono text-xs text-primary">2024 – 2025</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              MESWCOE E-Cell — Entrepreneurship Cell, Pune
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Led technical initiatives by driving sprint planning, peer code reviews and end-to-end
              project execution, delivering scalable, production-ready solutions for club events.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-7">
            <p className="eyebrow">Achievements</p>
            <ul className="mt-5 space-y-4">
              <li className="leading-relaxed">
                <span className="font-mono text-sm text-accent">Winner</span>
                <p className="mt-1 text-muted-foreground">
                  Hacktoberfest (DigitalOcean, India) and RoboCon (CRIF India) — 2025 &amp; 2024
                </p>
              </li>
              <li className="leading-relaxed">
                <span className="font-mono text-sm text-accent">Finalist</span>
                <p className="mt-1 text-muted-foreground">
                  MumbaiHacks and ByteVerse 7.0 (NIT Patna) — 2025
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="eyebrow">#end — let&apos;s build</p>
          <h2 className="mt-4 text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.02]">
            Open to internships,
            <br />
            <span className="text-primary">full-stack &amp; AI roles.</span>
          </h2>
          <div className="mt-10 grid gap-6 font-mono text-sm sm:grid-cols-2">
            <a href={LINKS.email} className="group block">
              <span className="eyebrow block">Email</span>
              <span className="mt-1 block text-foreground group-hover:text-accent">
                ayush.kesharwani.work@gmail.com
              </span>
            </a>
            <a href={LINKS.phone} className="group block">
              <span className="eyebrow block">Phone</span>
              <span className="mt-1 block text-foreground group-hover:text-accent">
                +91-9588430618
              </span>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { href: LINKS.github, label: "GitHub" },
              { href: LINKS.linkedin, label: "LinkedIn" },
              { href: LINKS.leetcode, label: "LeetCode" },
              { href: resume.url, label: "Résumé" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
          <p className="mt-20 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ayush Kesharwani — built with Three.js.
          </p>
        </div>
      </section>
    </div>
  );
}

function Section({
  id,
  hash,
  title,
  children,
}: {
  id: string;
  hash: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs text-primary">{hash}</span>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-semibold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
