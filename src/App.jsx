import { useState } from 'react'
import { Github, Linkedin, Mail, Download, Menu, X, ArrowUpRight, ExternalLink, Mic2, Code2, Users } from 'lucide-react'

/* ───────── CONTENT: edit everything here ───────── */
const LINKS = {
  email: 'roshnyjn05@gmail.com',
  github: 'https://github.com/roshnyjohnson',
  // linkedin: 'https://linkedin.com/in/roshny-johnson',
  linkedin: 'https://www.linkedin.com/in/roshny-johnson-9b6352344/',
  resume: './Roshny_Johnson_Resume.pdf',
}
const NAV = ['About', 'Experience', 'Positions', 'Projects', 'On Stage', 'Skills', 'Contact']

const PROJECTS = [
  { name: 'SaveSmart', sub: 'AI-powered expense tracker', img: './img/savesmart-preview.png',
    text: 'Record, search and organise daily expenses. An LLM API categorises each entry automatically, behind secure login and a MongoDB store.',
    features: ['Automatic AI categorisation', 'Colour-coded transaction history', 'Search and category filters', 'Secure login'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/roshnyjohnson/EXPENSE-TRACKER-WITH-AI-CATEGORIZATION', demo: '' /* TODO: live URL */ },
  { name: 'MailPal', sub: 'Intelligent spam detection', img: './img/mailpal-preview.png',
    text: 'Paste an SMS or email and get an instant spam verdict with a confidence score and the trigger words highlighted. TF-IDF + Logistic Regression, 97.3% test accuracy.',
    features: ['Real-time classification', 'Confidence scoring', 'Highlighted trigger words', 'FastAPI REST backend'],
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'React'],
    repo: 'https://github.com/roshnyjohnson/spam-detector', demo: '' /* TODO: Vercel URL */ },
  // { name: 'Netflix Clone', sub: 'Streaming catalogue UI', img: '',
  //   text: 'A responsive streaming interface that pulls a live movie catalogue and plays trailers in a familiar browse-and-watch layout.',
  //   features: ['Dynamic catalogue from TMDB', 'Responsive playback layout', 'Firebase authentication'],
  //   tech: ['React', 'Firebase', 'TMDB API', 'Tailwind CSS'],
  //   repo: '' /* TODO: repo URL */, demo: '' },
]

const EXPERIENCE = [
  { role: 'Business Analyst Intern', org: 'IMA360, Texas, USA', when: 'Aug 2026 – Present',
    points: ['Used SQL for data analysis and report development, querying relational data and validating business data across application modules.',
             'Prepared and ran functional test cases, performed UAT, documented defects and validated fixes for enterprise software workflows.'] },
  { role: 'Intern', org: 'Superchat AI, Hyderabad', when: 'Jun 2026 – Jul 2026',
    points: ['Built responsive UI components for HRMS and Sales Intelligence applications with HTML, CSS and JavaScript.',
             'Contributed to debugging, testing, feature enhancements and Git-based development workflows.'] },
]

const POSITIONS = [
  { role: 'Technical Coordinator', org: 'IEEE RAS Kerala Chapter SLT', when: 'Jan 2026 – Present',
    points: ['Coordinated technical planning and execution for a state-level conclave with 500+ participants.'] },
  { role: 'Chairperson', org: 'IEEE IAS SBC, RIT', when: 'Jan 2026 – Present',
    points: ['Led chapter operations and organised a 400+ participant ideathon involving 20+ colleges.'] },
  { role: 'Promotion Head', org: 'ISTE SC, RIT', when: 'Jan 2025 – Dec 2025',
    points: ['Planned outreach campaigns that increased engagement and memberships by 40%.'] },
]

const GALLERY = [
  { src: './img/anchoring-1.jpg', cap: 'Techno-cultural host' },
  { src: './img/leadership-1.jpg', cap: 'Opening a state-level conclave' },
  { src: './img/anchoring-2.jpg', cap: 'Anchoring the Innovara ideathon' },
  { src: './img/leadership-2.jpg', cap: 'Campus leadership, on the floor' },
  { src: './img/leadership-3.jpg', cap: 'With participants and organisers' },
  { src: './img/organiser-1.jpg', cap: 'Organiser, on the day' },
  { src: './img/team-1.jpg', cap: 'The organising team' },
]

const SKILLS = [
  ['Frontend', ['React', 'HTML & CSS', 'JavaScript', 'Tailwind CSS']],
  ['Backend & Data', ['Python', 'Node.js', 'Express', 'REST APIs', 'SQL', 'MongoDB', 'PostgreSQL']],
  ['ML & Tools', ['Scikit-learn', 'NLP', 'Git & GitHub', 'Postman']],
  ['People', ['Anchoring', 'Public Speaking', 'Team Coordination', 'Event Management']],
]

const STATS = [
  ['9.23', 'CGPA, B.Tech CSE (Honours in Machine Learning)'],
  ['500+', 'participants at the state-level IEEE RAS conclave I coordinated'],
  ['20+', 'colleges at the IEEE IAS ideathon I chaired'],
]

/* ───────── SMALL PIECES ───────── */
const Tag = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">{children}</span>
)
const Btn = ({ href, primary, children, ...p }) => (
  <a href={href} {...p} className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
    primary ? 'bg-mint text-ink hover:bg-emerald-300' : 'border border-white/15 text-white hover:bg-white/10'}`}>{children}</a>
)
const Section = ({ id, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">{children}</section>
)
const H2 = ({ children }) => <h2 className="font-display text-3xl md:text-5xl text-white max-w-2xl leading-tight">{children}</h2>

const Timeline = ({ items, dot }) => (
  <ol className="mt-12 space-y-8 border-l border-white/15 pl-6 md:pl-8">
    {items.map((e) => (
      <li key={e.role + e.org} className="relative">
        <span className={`absolute -left-[1.9rem] md:-left-[2.4rem] top-2 h-3 w-3 rounded-full ${dot}`} aria-hidden />
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-lg font-semibold text-white">{e.role}, <span className="font-normal">{e.org}</span></h3>
          <p className="text-sm">{e.when}</p>
        </div>
        <ul className="mt-2 space-y-1.5 text-sm list-disc pl-5 max-w-3xl">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
      </li>
    ))}
  </ol>
)

/* ───────── PAGE ───────── */
export default function App() {
  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(null) // lightbox for stage photos
  const slug = (s) => s.toLowerCase().replace(/\s+/g, '-')

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-lg text-white">Roshny Johnson</a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {NAV.map((n) => <a key={n} href={`#${slug(n)}`} className="hover:text-white">{n}</a>)}
            <Btn primary href={LINKS.resume} target="_blank" rel="noreferrer">View Resume</Btn>
          </nav>
          <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden flex flex-col gap-4 border-t border-white/10 px-5 py-5 bg-ink">
            {NAV.map((n) => <a key={n} href={`#${slug(n)}`} onClick={() => setOpen(false)} className="text-white">{n}</a>)}
            <Btn primary href={LINKS.resume} target="_blank" rel="noreferrer">View Resume</Btn>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-12 md:grid-cols-[1.25fr_1fr] md:pt-24">
          <div>
            <p className="inline-block rounded-full border border-mint/30 bg-mint/10 px-4 py-1.5 text-sm text-mint">
              Software Engineer & Builder, Kerala, India
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Crafting reliable software and connecting ideas on and off the stage.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              I build full-stack web apps and machine learning tools with React, Node.js and Python, and I care about clean,
              usable interfaces. Final-year Computer Science student, IEEE RAS Kerala Chapter Technical Coordinator, and a host who is comfortable with a live crowd.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn primary href="#projects">Explore Projects</Btn>
              <Btn href={LINKS.resume} download>Download Resume <Download size={16} /></Btn>
              <Btn href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /> GitHub</Btn>
              <Btn href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /> LinkedIn</Btn>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] border border-mint/30 translate-x-3 translate-y-3" aria-hidden />
            <img src="./img/roshny-portrait.png" alt="Portrait of Roshny Johnson"
              className="relative aspect-square w-full rounded-[2rem] object-cover ring-1 ring-white/15" />
          </div>
        </div>

        {/* About */}
        <Section id="about">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <H2>Engineering discipline, with people at the centre.</H2>
              <div className="mt-6 space-y-4 leading-relaxed max-w-prose">
                <p>I study Computer Science at Rajiv Gandhi Institute of Technology, Kottayam, with an Honours in Machine Learning. I like problems that need both careful engineering and a clear explanation: data structures, databases, NLP, and interfaces people can use without a manual.</p>
                <p>I have interned as a Business Analyst at IMA360 and as a front-end developer at Superchat AI, and I lead student chapters at IEEE and ISTE, from outreach campaigns to state-level events.</p>
                <p className="text-white">Whether I'm developing an application, coordinating a student initiative, or hosting an event, I enjoy bringing ideas and people together.</p>
              </div>
            </div>
            <dl className="grid gap-4 content-start">
              {STATS.map(([n, l]) => (
                <div key={n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex items-baseline gap-5">
                  <dt className="font-display text-4xl text-mint min-w-[5.5rem]">{n}</dt>
                  <dd className="text-sm">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience">
          <H2>Experience.</H2>
          <Timeline items={EXPERIENCE} dot="bg-mint" />
        </Section>

        {/* Positions of Responsibility */}
        <Section id="positions">
          <H2>Positions of responsibility.</H2>
          <Timeline items={POSITIONS} dot="bg-sky" />
        </Section>

        {/* Projects */}
        <Section id="projects">
          <H2>Projects I've built and shipped.</H2>
          <div className="mt-14 space-y-20">
            {PROJECTS.map((p, i) => (
              <article key={p.name} className="grid items-center gap-8 md:grid-cols-2">
                <div className={i % 2 ? 'md:order-2' : ''}>
                  {p.img ? (
                    <img src={p.img} alt={`${p.name} screenshot`} loading="lazy"
                      className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40" />
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-white/20 text-sm">
                      Add a screenshot: public/img/netflix-preview.png
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-3xl text-white">{p.name}</h3>
                  <p className="text-mint text-sm mt-1">{p.sub}</p>
                  <p className="mt-4 leading-relaxed">{p.text}</p>
                  <ul className="mt-4 space-y-1.5 text-sm list-disc pl-5 marker:text-mint">
                    {p.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                  <div className="mt-6 flex gap-3">
                    {p.demo && <Btn primary href={p.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></Btn>}
                    {p.repo && <Btn href={p.repo} target="_blank" rel="noreferrer"><Github size={15} /> Source</Btn>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Beyond Code */}
        <Section id="on-stage">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 md:p-12">
            <div className="flex items-center gap-3 text-mint"><Mic2 size={20} /><span className="text-sm font-semibold">Beyond Code: on stage, in front of people</span></div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-white max-w-3xl leading-tight">From building software to bringing a stage to life.</h2>
            <p className="mt-6 max-w-2xl leading-relaxed">
              Beyond technology and development, I enjoy anchoring, emceeing, and public speaking. Having hosted college Arts Fests, techno-cultural events, Freshers' Day celebrations, and campus programmes, I thrive in front of live audiences—translating energy into engaging experiences and keeping crowds connected.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Clear communication', 'Executive presence', 'Team leadership'].map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
            <div className="mt-10 columns-2 gap-3 md:columns-3">
              {GALLERY.map((g) => (
                <button key={g.src} onClick={() => setZoom(g)} className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left">
                  <img src={g.src} alt={g.cap} loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-10 text-xs text-white">{g.cap}</span>
                </button>
              ))}
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills">
          <H2>Tools I work with.</H2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {SKILLS.map(([group, items], i) => {
              const Icon = [Code2, Code2, Code2, Users][i]
              return (
                <div key={group} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="flex items-center gap-2 text-white font-semibold"><Icon size={18} className="text-sky" />{group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">{items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
                </div>
              )
            })}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact">
          <h2 className="font-display text-4xl md:text-6xl text-white max-w-3xl leading-tight">Let's build something impactful together.</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Btn primary href={`mailto:${LINKS.email}`}><Mail size={16} /> {LINKS.email}</Btn>
            <Btn href={LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</Btn>
            <Btn href={LINKS.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</Btn>
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm sm:flex-row sm:justify-between">
          <a href={LINKS.resume} download className="inline-flex items-center gap-1 text-white hover:text-mint">Download resume <ArrowUpRight size={14} /></a>
          <p>© {new Date().getFullYear()} Roshny Johnson. All rights reserved.</p>
        </div>
      </footer>

      {/* Lightbox */}
      {zoom && (
        <div role="dialog" aria-label={zoom.cap} onClick={() => setZoom(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-black/90 p-4 cursor-zoom-out">
          <img src={zoom.src} alt={zoom.cap} className="max-h-[85vh] max-w-full rounded-xl" />
          <p className="text-white text-sm">{zoom.cap}</p>
        </div>
      )}
    </>
  )
}
