import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import photo from "@/assets/photo.asset.json";
import resume from "@/assets/resume.asset.json";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";
import { SkillSphere } from "@/components/SkillSphere";
import devrankImg from "@/assets/devrank.jpg.asset.json";
import legaliteaImg from "@/assets/legalitea.jpg.asset.json";
import devpathImg from "@/assets/devpath.jpg.asset.json";
import resumeAnalyzerImg from "@/assets/resume-analyzer.jpg.asset.json";
import gramconnectImg from "@/assets/gramconnect.jpg.asset.json";
import voicedeskImg from "@/assets/voicedesk.jpg.asset.json";
import studysnapImg from "@/assets/studysnap.jpg.asset.json";
import ecommerceImg from "@/assets/ecommerce.jpg.asset.json";
import donorsyncImg from "@/assets/donorsync.jpg.asset.json";


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

const ALL_SKILLS = SKILLS.flatMap((s) => s.items);


type Project = {
  no: string;
  name: string;
  image: string;
  stack: string[];
  bullets: string[];
  live?: string;
};

const PROJECTS: Project[] = [
  {
    no: "01",
    name: "DevRank",
    image: devrankImg.url,
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
    image: legaliteaImg.url,
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
    image: devpathImg.url,
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
    image: resumeAnalyzerImg.url,
    stack: ["React.js", "TypeScript", "React Router", "Tailwind CSS", "Gemini API"],
    bullets: [
      "AI tool evaluating ATS compatibility, keyword relevance and formatting quality with secure auth, cloud storage and resume-to-JD scoring to identify skill gaps.",
      "Reusable component-level front-end architecture with clean separation of concerns and unit-tested key UI components.",
    ],
    live: "https://hackathon-hacktoberfest-2025.vercel.app/",
  },
  {
    no: "05",
    name: "GramConnect",
    image: gramconnectImg.url,
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    bullets: [
      "MERN platform digitizing rural governance processes and improving accessibility for citizens of a Gram Panchayat.",
      "Secure authentication, role-based access control and an admin dashboard for efficient management.",
      "Online certificate applications, grievance redressal and real-time application status tracking.",
    ],
    live: "https://gram-connect.vercel.app/",
  },
  {
    no: "06",
    name: "VoiceDesk",
    image: voicedeskImg.url,
    stack: ["Next.js", "FastAPI", "LiveKit", "OpenAI", "PostgreSQL", "Deepgram", "ElevenLabs", "Twilio"],
    bullets: [
      "Production-ready conversational voice agent built with LiveKit, OpenAI and Twilio for real-time phone conversations.",
      "Real-time appointment booking, live call monitoring with take-over capability and warm transfer to human agents.",
    ],
    live: "https://voice-desk-iota.vercel.app/",
  },
  {
    no: "07",
    name: "StudySnap",
    image: studysnapImg.url,
    stack: ["FastAPI", "React.js", "MongoDB", "Pinecone", "Sentence-Transformers"],
    bullets: [
      "AI learning platform using RAG to deliver accurate answers grounded in the user's own study materials.",
      "Intelligent chatbot, quiz generation and a voice assistant for interactive learning; Pinecone vector search for retrieval.",
      "Learning analytics dashboard tracking user performance and progress.",
    ],
    live: "https://future-stack-gen-ai-hackathon.vercel.app/app",
  },
  {
    no: "08",
    name: "E-Commerce Next.js",
    image: ecommerceImg.url,
    stack: ["Next.js", "React.js", "TypeScript", "Bootstrap", "MUI"],
    bullets: [
      "Modern e-commerce front-end with multiple storefront layouts, dynamic product pages and complete purchase flows.",
      "Cart, checkout, wishlist and product comparison plus an admin-style dashboard with analytics, data tables and reusable UI components.",
    ],
    live: "https://ecommerce-nextjs-main-neon.vercel.app/",
  },
  {
    no: "09",
    name: "Donor Sync",
    image: donorsyncImg.url,
    stack: ["MongoDB", "React.js", "Node.js", "Google Gemini API"],
    bullets: [
      "Blood bank management platform connecting donors, hospitals and donation organizations.",
      "Centralized database of donors, hospitals and active blood donation drives.",
      "Improves healthcare accessibility with faster donor discovery and efficient donation coordination.",
    ],
  },
];

function Portfolio() {
  const [active, setActive] = useState("top");
  const [skillView, setSkillView] = useState<"grid" | "sphere">("grid");
  const role = useRotatingRole();


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
    <div className="min-h-screen bg-transparent text-foreground">
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
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 pb-20 md:grid-cols-[1.05fr_0.95fr]">
            {/* left copy */}
            <div className="rise order-2 md:order-1">
              <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
                Hello!
              </span>
              <h1 className="mt-5 text-[clamp(2.1rem,5.4vw,3.9rem)] font-extrabold leading-[1.06]">
                I&apos;m <span className="text-primary">Ayush Kesharwani</span>
                <br />
                <span key={role} className="rise inline-block">
                  {role}
                </span>
                <span className="ml-1 inline-block animate-pulse text-primary">|</span>
              </h1>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Full-stack &amp; AI/ML engineer — REST-first back-ends, cloud deployment and
                production LLM applications.
              </p>

              <div className="mt-7 flex items-center gap-10">
                <div>
                  <p className="font-display text-3xl font-bold">8+</p>
                  <p className="text-sm text-muted-foreground">Full-stack features shipped</p>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <p className="font-display text-3xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Shipped AI products</p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
                >
                  Résumé ↗
                </a>
                <a
                  href={LINKS.email}
                  className="rounded-full bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-md ring-1 ring-border transition-transform hover:-translate-y-0.5"
                >
                  Hire Me
                </a>
              </div>
            </div>

            {/* photo right */}
            <div className="order-1 md:order-2">
              <div className="relative mx-auto w-[min(78vw,400px)]">
                <div className="blob absolute -inset-x-6 bottom-6 top-20" aria-hidden="true" />
                <img
                  src={photo.url}
                  alt="Portrait of Ayush Kesharwani"
                  className="relative z-10 w-full rounded-3xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SKILLS — dark band */}
      <section id="skills" className="scroll-mt-24 rounded-t-[2rem] bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold">
                My <span className="text-primary">Skills</span>
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                A practical stack spanning product front-ends, scalable back-end services and
                applied machine learning.
              </p>
            </div>
            <div className="inline-flex rounded-full border border-ink-foreground/20 p-1">
              {(["grid", "sphere"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setSkillView(v)}
                  aria-pressed={skillView === v}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-colors ${
                    skillView === v
                      ? "bg-primary text-primary-foreground"
                      : "text-ink-muted hover:text-ink-foreground"
                  }`}
                >
                  {v} view
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />

          {skillView === "grid" ? (
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
          ) : (
            <div className="mt-10">
              <SkillSphere items={ALL_SKILLS} />
              <p className="mt-4 text-center text-xs text-ink-muted">Drag to spin the sphere</p>
            </div>
          )}
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
              I'm Ayush Kesharwani — a final-year Computer Engineering student and software
              engineer building end-to-end products, from clean REST APIs and scalable back-ends to
              responsive React front-ends. My work spans full-stack web development, AI/ML
              integration and cloud deployment — including an LLM-powered document-intelligence app
              and a GitHub-analytics ranking engine. I'm comfortable in Agile workflows (feature
              planning, debugging, code reviews, iterative releases) with strong fundamentals in
              DSA, OOP and system design, and I care about writing maintainable, production-ready
              code.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="eyebrow">Education</p>

              <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-snug">
                    Modern Education Society&apos;s Wadia College of Engineering
                  </h3>
                  <p className="mt-1 text-sm">
                    B.E. Computer Engineering · SGPA{" "}
                    <span className="font-semibold text-primary">9.29/10</span>
                  </p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-right sm:whitespace-nowrap">
                  Pune, Maharashtra · Aug 2023 – Jul 2027
                </p>
              </div>

              <div className="mt-4 border-t border-border pt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-snug">
                    Lord Jiveshwar English Medium School &amp; Junior College
                  </h3>
                  <p className="mt-1 text-sm">H.S.C. — Intermediate (12th Class)</p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-right sm:whitespace-nowrap">
                  Ichalkaranji, Maharashtra · 2021 – 2023
                </p>
              </div>

              <div className="mt-4 border-t border-border pt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-base font-semibold leading-snug">
                    Vyankatrao High School &amp; Junior College
                  </h3>
                  <p className="mt-1 text-sm">S.S.C. — 10th Class</p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-right sm:whitespace-nowrap">
                  Ichalkaranji, Maharashtra · 2020
                </p>
              </div>
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
              "Collaborated in Agile development workflows, contributing to feature planning, debugging, code reviews, and iterative releases.",
              "Built an LLM-powered document-intelligence application to process and extract meaningful insights from documents.",
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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={p.image}
                alt={`${p.name} interface preview`}
                loading="lazy"
                width={1200}
                height={752}
                className="aspect-[16/10] w-full border-b border-border object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{p.no}</span>
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    ↗
                  </a>
                ) : null}
              </div>
              <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex-1 space-y-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-4 text-sm font-medium">
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Live site
                  </a>
                ) : null}
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Source
                </a>
              </div>
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
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <a href={LINKS.email} className="group block">
                  <span className="eyebrow block text-ink-muted">Email</span>
                  <span className="mt-1 block text-lg group-hover:text-primary">
                    ayush.kesharwani.work@gmail.com
                  </span>
                </a>
                <a href={LINKS.phone} className="group block">
                  <span className="eyebrow block text-ink-muted">Phone</span>
                  <span className="mt-1 block text-lg group-hover:text-primary">
                    +91-9588430618
                  </span>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
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
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink-foreground/10 bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#top" className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  A
                </span>
                <span className="text-lg font-semibold tracking-tight">Ayush Kesharwani</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
                Full-stack &amp; AI/ML engineer building REST-first back-ends, cloud deployments and
                production LLM applications.
              </p>
            </div>
            <div>
              <p className="eyebrow text-ink-muted">Navigate</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="text-ink-muted transition-colors hover:text-primary">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-ink-muted">Elsewhere</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { href: LINKS.github, label: "GitHub" },
                  { href: LINKS.linkedin, label: "LinkedIn" },
                  { href: LINKS.leetcode, label: "LeetCode" },
                  { href: resume.url, label: "Résumé" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink-muted transition-colors hover:text-primary"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-ink-muted">Get in touch</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href={LINKS.email} className="text-ink-muted transition-colors hover:text-primary">
                    ayush.kesharwani.work@gmail.com
                  </a>
                </li>
                <li>
                  <a href={LINKS.phone} className="text-ink-muted transition-colors hover:text-primary">
                    +91-9588430618
                  </a>
                </li>
                <li className="text-ink-muted">Pune, Maharashtra, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-ink-foreground/10 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Ayush Kesharwani. All rights reserved.</p>
            <p>Built with React, TanStack Start &amp; Tailwind CSS.</p>
          </div>
        </div>
      </footer>
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
