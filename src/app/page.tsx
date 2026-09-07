import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowRight, ArrowUpRight, Check, Download, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.06;

const skillGroups = [
  { label: "Build", skills: ["Python", "FastAPI", "Docker", "PyTest"] },
  { label: "Model", skills: ["Scikit-Learn", "PyTorch", "TensorFlow", "SQL / Spark", "Pandas"] },
  { label: "Ship", skills: ["LangChain", "Google ADK", "Snowflake", "GCP Firebase", "AWS S3"] },
];

export default function Page() {
  return (
    <main className="portfolio-shell">
      <BlurFade delay={BLUR_FADE_DELAY} className="portfolio-nav">
        <Link href="#hero" className="brand-mark"><span>SG</span> Sushant Garudkar</Link>
        <div className="nav-links"><Link href="#projects">Work</Link><Link href="#experience">Experience</Link><Link href="#education">Education</Link><Link href="#certificates">Certificates</Link><Link href="#skills">Skills</Link><Link href={DATA.contact.social.Email.url}>Contact <ArrowUpRight className="size-3" /></Link></div>
      </BlurFade>

      <section id="hero" className="visual-hero">
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="hero-visual-card">
          <div className="visual-card-top"><span className="live-pill"><span /> Building now</span><span className="text-xs text-white/50">Pune · IN</span></div>
          <div className="portrait-orbit"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><Image src={DATA.avatarUrl} alt={DATA.name} fill priority sizes="(max-width: 768px) 80vw, 440px" className="object-cover" /></div>
          <div className="visual-card-bottom"><span>AI / ML</span><span>Data Science</span><span>Full Stack</span></div>
          <a href="/sushant_garudkar_resume_ai_engineering.pdf" download className="resume-download"><Download className="size-4" /> Resume</a>
        </BlurFade>
        <div className="hero-intro">
          <BlurFade delay={BLUR_FADE_DELAY} className="eyebrow"><span className="status-dot" /> Hello, I&apos;m Sushant</BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}><h1>Making data<br /><em>useful.</em></h1></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}><p className="hero-lede">{DATA.description}</p></BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4} className="hero-actions"><Link href="#projects" className="action-button action-button-primary">Explore my work <ArrowRight className="size-4" /></Link><Link href={DATA.contact.social.Email.url} className="round-action" aria-label="Email Sushant"><Mail className="size-4" /></Link></BlurFade>
        </div>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 4} className="signal-row">
        <div><span className="signal-number">01</span><span>Currently</span><strong>Data Scientist Consultant I<br /><small>Allstate India</small></strong></div>
        <div><span className="signal-number">02</span><span>Focus</span><strong>AI engineering<br /><small>Systems that ship</small></strong></div>
        <div><span className="signal-number">03</span><span>Based in</span><strong>Pune, India<br /><small>Open to good problems</small></strong></div>
      </BlurFade>

      <section id="projects" className="portfolio-section">
        <div className="section-heading"><div><span className="eyebrow">Selected work</span><h2>Things I&apos;ve been building</h2></div><span className="section-index">/ 01</span></div>
        <div className="project-grid">{DATA.projects.map((project, index) => <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 5 + index * 0.08}><Link href={project.href} target="_blank" rel="noreferrer" className="project-tile"><div className={`project-visual project-visual-${index + 1}`}><span>{index === 0 ? "DOCUMENT INTELLIGENCE" : "AUTONOMOUS WORKFLOWS"}</span><div className="visual-bars"><i /><i /><i /><i /></div>{index === 1 && <div className="visual-terminal"><b>&gt;_</b><span>agent.run()</span><span>tools.execute()</span></div>}</div><div className="project-info"><div><span className="project-kicker">Case study 0{index + 1}</span><h3>{project.title}</h3></div><ArrowUpRight className="size-5 shrink-0 text-muted-foreground" /><p>{project.description}</p></div><div className="star-grid"><div><span>S</span><strong>Situation</strong><p>{project.star.situation}</p></div><div><span>T</span><strong>Task</strong><p>{project.star.task}</p></div><div><span>A</span><strong>Action</strong><p>{project.star.action}</p></div><div><span>R</span><strong>Result</strong><p>{project.star.result}</p></div></div></Link></BlurFade>)}</div>
      </section>

      <section id="experience" className="portfolio-section experience-section">
        <div className="section-heading"><div><span className="eyebrow">The path so far</span><h2>Experience</h2></div><span className="section-index">/ 02</span></div>
        <div className="experience-list">{DATA.work.map((role, index) => <BlurFade key={role.title} delay={BLUR_FADE_DELAY * 6 + index * 0.06} className="experience-item"><span className="experience-year">0{index + 1}</span><div><h3>{role.title}</h3><p>{role.company} · {role.location}</p></div><span className="experience-date">{role.start.replace("September ", "Sep ").replace("July ", "Jul ")}<br />{role.end === "Present" ? "Present" : role.end?.replace("June ", "Jun ").replace("July ", "Jul ")}</span></BlurFade>)}</div>
      </section>

      <section id="education" className="portfolio-section education-section">
        <div className="section-heading"><div><span className="eyebrow">Background</span><h2>Education</h2></div><span className="section-index">/ 03</span></div>
        <div className="education-grid">{DATA.education.filter((education) => ["Indian Institute of Information Technology", "Savitribai Phule Pune University", "Indian Institute of Technology, Hyderabad"].includes(education.school)).map((education) => <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 7}><Link href={education.href} target="_blank" className="education-card"><div className="education-logo"><Image src={education.logoUrl} alt="" fill sizes="48px" className="object-contain" /></div><div><h3>{education.school}</h3><p>{education.degree}</p></div><ArrowUpRight className="size-4 shrink-0 text-muted-foreground" /></Link></BlurFade>)}</div>
      </section>

      <section id="certificates" className="portfolio-section certificate-section">
        <div className="section-heading"><div><span className="eyebrow">Continuous learning</span><h2>Certificates</h2></div><span className="section-index">/ 04</span></div>
        <div className="education-grid">{DATA.education.filter((education) => ["Imperial College London - Coursera", "Helsinki University"].includes(education.school)).map((education) => <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 7}><Link href={education.href} target="_blank" className="education-card"><div className="education-logo"><Image src={education.logoUrl} alt="" fill sizes="48px" className="object-contain" /></div><div><h3>{education.school}</h3><p>{education.degree}</p></div><ArrowUpRight className="size-4 shrink-0 text-muted-foreground" /></Link></BlurFade>)}</div>
      </section>

      <section id="skills" className="portfolio-section skills-section">
        <div className="section-heading"><div><span className="eyebrow">Tools I use</span><h2>My working toolkit</h2></div><span className="section-index">/ 05</span></div>
        <div className="skills-grid">{skillGroups.map((group) => <BlurFade key={group.label} delay={BLUR_FADE_DELAY * 8}><div className="skill-group"><span className="skill-group-label">{group.label}</span><div className="skill-list">{group.skills.map((skill, skillIndex) => <span key={skill}><i>{String(skillIndex + 1).padStart(2, "0")}</i>{skill}</span>)}</div></div></BlurFade>)}</div>
      </section>

      <section className="capability-band"><div className="capability-icon"><Sparkles className="size-5" /></div><div><span className="eyebrow">How I work</span><h2>Curious enough to explore.<br /><em>Practical enough to ship.</em></h2></div><div className="capability-checks"><span><Check /> Python + ML</span><span><Check /> RAG + agents</span><span><Check /> Data products</span></div></section>

      <section id="contact" className="contact-card"><div><span className="eyebrow">Have a good problem?</span><h2>Let&apos;s build<br /><em>something useful.</em></h2></div><Link href={DATA.contact.social.Email.url} className="contact-link">Start a conversation <ArrowUpRight className="size-5" /></Link></section>
      <footer className="portfolio-footer"><span>© {new Date().getFullYear()} {DATA.name}</span><span className="footer-location"><MapPin className="size-3" /> Pune, India</span><Link href="#hero">Back to top ↑</Link></footer>
    </main>
  );
}
