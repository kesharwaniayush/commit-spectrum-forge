import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import photo from "@/assets/photo.asset.json";
import resume from "@/assets/resume.asset.json";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";

const ROLES = ["Software Engineer", "Full-Stack Developer", "AI/ML Enthusiast", "Problem Solver"];

function useRotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2200);
    return () => clearInterval(t);
  }, []);
  return ROLES[i];
}

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
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const LINKS = {
  github: "https://github.com/kesharwaniayush",
  linkedin: "https://www.linkedin.com/in/ayushkesharwani1207/",
  leetcode: "https://leetcode.com/u/Ayush_Kesharwani_1207/",
  email: "mailto:ayush.kesharwani.work@gmail.com",
  phone: "tel:+919588430618",
};

const SKILLS: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"] },
  { title: "Frontend", items: ["React.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "CI/CD", "GitHub Actions"],
  },
  {
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
    title: "Frameworks",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "FAISS", "ChromaDB"],
  },
  { title: "Tools", items: ["Git", "GitHub", "Linux", "VS Code", "Postman", "Jupyter Notebook"] },
  {
    title: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "SDLC", "Agile"],
  },
];

const PROJECTS = [
  {
    no: "01",
    name: "DevRank",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "GitHub API", "Gemini API"],
    bullets: [
      "AI-powered GitHub analytics platform that analyzed 1,000+ profiles to rank developers by coding activity, repositories and technical skills.",
      "Integrated 15+ GitHub API endpoints for real-time developer insights, repository analytics and personalized recommendations.",
    ],
    live: "https://dev-rank-delta.vercel.app/",
  },
  {
    no: "02",
    name: "LegaliTea AI",
    stack: ["React.js", "Node.js", "Express.js", "Llama 3.3-70B", "REST APIs"],
    bullets: [
      "Scalable AI legal-document analysis platform on Llama 3.3-70B with RESTful back-end APIs, real-time analysis, multi-language support and AI fallback for reliability.",
      "Gamified learning (quizzes, achievements, progress tracking), clause visualization and robust debugging workflows; contributed to automated build pipeline setup.",
    ],
    live: "https://legalitea-genai.vercel.app/",
  },
  {
    no: "03",
    name: "DevPath",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "AI"],
    bullets: [
      "Guided learning-path builder that turns a developer's goals into structured, trackable roadmaps.",
      "Component-driven front-end architecture with persistent progress state and responsive layouts.",
    ],
    live: "https://devpath-kohl.vercel.app/",
  },
  {
    no: "04",
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
  const [active, setActive] = useState("top");

  useEffect(() => {
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
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 rounded-full bg-ink px-4 text-ink-foreground shadow-lg sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              A
            </span>
            <span className="text-base font-semibold tracking-tight">Ayush</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === n.id
                      ? "text-primary"
                      : "text-ink-muted hover:text-ink-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={resume.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Résumé
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rise text-center">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              Hello!
            </span>
            <h1 className="mx-auto mt-5 max-w-4xl text-[clamp(2.4rem,7vw,5rem)] font-extrabold leading-[1.02]">
              I&apos;m <span className="text-primary">Ayush,</span>
              <br />
              Software Engineer
            </h1>
          </div>

          <div className="relative mt-10 grid items-end gap-10 md:grid-cols-[1fr_auto_1fr]">
            {/* left stat */}
            <div className="rise order-2 max-w-xs md:order-1 md:pb-16">
              <p className="text-4xl font-bold leading-none text-primary">“</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Full-stack &amp; AI/ML engineer — REST-first back-ends, cloud deployment and
                production LLM applications.
              </p>
              <p className="mt-7 font-display text-3xl font-bold">8+</p>
              <p className="text-sm text-muted-foreground">Full-stack features shipped</p>
            </div>

            {/* photo */}
            <div className="order-1 mx-auto md:order-2">
              <div className="relative mx-auto w-[min(78vw,380px)]">
                <div className="blob absolute -inset-x-6 bottom-6 top-20" aria-hidden="true" />
                <img
                  src={photo.url}
                  alt="Portrait of Ayush Kesharwani"
                  className="relative z-10 w-full rounded-3xl object-cover shadow-xl"
                />
              </div>
            </div>


            {/* right stat */}
            <div className="rise order-3 max-w-xs justify-self-end text-right md:pb-16">
              <p className="text-lg tracking-widest text-primary">★★★★★</p>
              <p className="mt-2 font-display text-3xl font-bold">9.29</p>
              <p className="text-sm text-muted-foreground">SGPA · B.E. Computer Engineering</p>
              <div className="mt-4 h-px w-24 bg-foreground/70 md:ml-auto" />
            </div>
          </div>

          <div className="relative z-20 mt-10 flex flex-wrap items-center justify-center gap-3 pb-20">
            <a
              href="#projects"
              className="rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-md ring-1 ring-primary/60 transition-transform hover:-translate-y-0.5"
            >
              Portfolio ↗
            </a>
            <a
              href={LINKS.email}
              className="rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-md ring-1 ring-border transition-transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS — dark band */}
      <section id="skills" className="scroll-mt-24 rounded-t-[2rem] bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
              A practical stack spanning product front-ends, scalable back-end services and applied
              machine learning.
            </p>
          </div>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl bg-ink-foreground/[0.06] p-5 transition-colors hover:bg-primary"
              >
                <h3 className="text-base font-semibold">{s.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full bg-ink-foreground/10 px-2.5 py-1 text-[0.72rem] text-ink-muted transition-colors group-hover:bg-ink-foreground/20 group-hover:text-ink-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" label="About" title="About Me">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-primary/15" aria-hidden="true" />
            <img
              src={photo.url}
              alt="Ayush Kesharwani working"
              loading="lazy"
              className="relative w-full rounded-2xl bg-secondary object-cover"
            />
          </div>
          <div>
            <p className="text-lg leading-relaxed">
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
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow">Education</p>
              <h3 className="mt-3 text-lg font-semibold">
                Modern Education Society&apos;s Wadia College of Engineering
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Pune, Maharashtra</p>
              <p className="mt-3 text-sm">
                B.E. Computer Engineering · SGPA{" "}
                <span className="font-semibold text-primary">9.29/10</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Aug 2023 – Jul 2027</p>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" label="Experience" title="Where I've Worked">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-xl font-semibold">Web Developer Intern — Remote</h3>
            <p className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Feb 2026 – Apr 2026
            </p>
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
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" label="Portfolio" title="Selected Projects">
        <div className="grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{p.no}</span>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  ↗
                </a>
              </div>
              <h3 className="mt-3 text-2xl font-bold">{p.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
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
              <div className="mt-6 flex gap-4 text-sm font-medium">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Live site
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section id="leadership" label="Recognition" title="Leadership & Achievements">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">Technical Head</h3>
              <p className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                2024 – 2025
              </p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              MESWCOE E-Cell — Entrepreneurship Cell, Pune
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Led technical initiatives by driving sprint planning, peer code reviews and end-to-end
              project execution, delivering scalable, production-ready solutions for club events.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <p className="eyebrow">Achievements</p>
            <ul className="mt-5 space-y-4">
              <li>
                <span className="text-sm font-semibold text-primary">Winner</span>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  Hacktoberfest (DigitalOcean, India) and RoboCon (CRIF India) — 2025 &amp; 2024
                </p>
              </li>
              <li>
                <span className="text-sm font-semibold text-primary">Finalist</span>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  MumbaiHacks and ByteVerse 7.0 (NIT Patna) — 2025
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 rounded-t-[2rem] bg-ink text-ink-foreground"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="eyebrow text-primary">Contact</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05]">
            Open to internships,
            <br />
            <span className="text-primary">full-stack &amp; AI roles.</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <a href={LINKS.email} className="group block">
              <span className="eyebrow block text-ink-muted">Email</span>
              <span className="mt-1 block text-lg group-hover:text-primary">
                ayush.kesharwani.work@gmail.com
              </span>
            </a>
            <a href={LINKS.phone} className="group block">
              <span className="eyebrow block text-ink-muted">Phone</span>
              <span className="mt-1 block text-lg group-hover:text-primary">+91-9588430618</span>
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
                className="rounded-full border border-ink-foreground/20 px-5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-primary hover:text-primary"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
          <p className="mt-16 text-xs text-ink-muted">
            © {new Date().getFullYear()} Ayush Kesharwani — Pune, India.
          </p>
        </div>
      </section>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="eyebrow text-primary">{label}</p>
        <h2 className="mt-3 text-[clamp(1.9rem,4vw,2.75rem)] font-bold">{title}</h2>
        <div className="mt-4 mb-10 h-1 w-16 rounded-full bg-primary" />
        {children}
      </div>
    </section>
  );
}
