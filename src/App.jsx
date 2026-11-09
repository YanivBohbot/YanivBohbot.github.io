import { useRef, useState } from 'react';

const contactLinks = [
  ['Email', 'Yanivbohbot5@gmail.com ↗', 'mailto:Yanivbohbot5@gmail.com'],
  ['Phone', '+972 52 605 5879 ↗', 'tel:+972526055879'],
  ['LinkedIn', 'Connect ↗', 'https://www.linkedin.com/in/yaniv-bohbot/'],
  ['GitHub', 'Explore code ↗', 'https://github.com/YanivBohbot'],
  ['Medium', 'Read notes ↗', 'https://medium.com/@yanivbohbot5'],
];

const featuredProjects = [
  {
    number: '01 / 06',
    category: 'Agentic AI · Incident management',
    title: 'IncidentFlow',
    kind: ['agents', 'platform'],
    description: 'IncidentFlow gives operations teams a guided way to investigate complex incidents. It validates input, coordinates specialized agents and data integrations, gathers evidence, then pauses for human approval before any sensitive update.',
    technologies: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL'],
    video: '/assets/projects/incidentflow-promo.mp4',
    poster: 'https://raw.githubusercontent.com/YanivBohbot/incidentflow/main/apps/web/src/assets/hero.png',
    url: 'https://github.com/YanivBohbot/incidentflow',
  },
  {
    number: '02 / 06',
    category: 'Multi-agent research · Finance',
    title: 'Market Intelligence System',
    kind: ['agents', 'realtime', 'rag'],
    description: 'Market Intelligence System turns fragmented financial signals into structured research briefings. A multi-agent workflow retrieves context, evaluates sources and produces a decision-ready report for faster analyst review.',
    technologies: ['LangGraph', 'FastAPI', 'RAG', 'AWS AgentCore'],
    video: '/assets/projects/market-intelligence-demo.mp4',
    url: 'https://github.com/YanivBohbot/Finance-Market-Intelligence-Multi-Agents-System',
  },
];

const secondaryProjects = [
  { number: '03 / 06', kind: ['realtime', 'agents', 'microservices', 'containers'], category: 'Real-time · GenAI', title: 'Technical Interview Platform', description: 'A shared workspace for live coding and video interviews. React, Node.js and Socket.IO enable real-time collaboration, while GenAI capabilities help run more structured technical sessions.', technologies: ['Node.js', 'React', 'Socket.IO'], preview: '/assets/projects/technical-interview-preview.png', url: 'https://github.com/YanivBohbot/video-calling-interview' },
  { number: '04 / 06', kind: ['agents', 'platform', 'computer-vision', 'rag', 'containers'], category: 'Computer vision · Safety', title: 'WatchTower', description: 'A video-investigation workflow that analyzes uploaded footage with YOLO and tracking, identifies potential incidents, and assembles evidence into a report for human review.', technologies: ['FastAPI', 'YOLO', 'RAG'], preview: '/assets/projects/watchtower-preview.png', url: 'https://github.com/YanivBohbot/watchtower-systems-incidents' },
  { number: '05 / 06', kind: ['platform', 'agents', 'microservices', 'containers'], category: 'AI backend · Microservices', title: 'AI Backend System', description: 'A distributed fraud-detection backend for processing events asynchronously. FastAPI services, Kafka messaging and containerized components separate ingestion, detection and downstream actions.', technologies: ['Python', 'FastAPI', 'Kafka'], preview: '/assets/projects/ai-backend-preview.png', url: 'https://github.com/YanivBohbot/AI_Backend_System_Microservices' },
  { number: '06 / 06', kind: ['platform', 'microservices', 'containers'], category: 'Cloud-native · Event driven', title: 'Ticket Master', description: 'An event-ticketing system built as independently deployable microservices. AWS CDK defines the infrastructure, supporting real-time inventory, order and fraud-aware processing flows.', technologies: ['AWS CDK', 'TypeScript', 'Microservices'], preview: '/assets/projects/ticket-master-preview.png', url: 'https://github.com/YanivBohbot/ticket-master-microservices-infra' },
];

const filters = [
  ['all', 'All work'], ['agents', 'Agentic AI'], ['platform', 'Platform'], ['realtime', 'Real-time'],
  ['microservices', 'Microservices'], ['containers', 'Containers'], ['rag', 'RAG'], ['computer-vision', 'Computer Vision / YOLO'],
];

function TechnologyTags({ technologies }) {
  return <ul>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>;
}

function FeatureProject({ project, variant }) {
  return <article className="feature" data-kind={project.kind.join(' ')}>
    <div className={`art ${variant} project-video`}>
      <video controls playsInline preload="metadata" poster={project.poster} aria-label={`${project.title} project demonstration`}>
        <source src={project.video} type="video/mp4" />
        Your browser does not support the project demonstration video.
      </video>
      <div className={`${variant}-media`}><span>{project.title} · Product demonstration</span></div>
    </div>
    <ProjectCopy project={project} />
  </article>;
}

function ProjectCopy({ project }) {
  return <div className="project-copy">
    <small>{project.number}</small>
    <div>
      <p className="category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <TechnologyTags technologies={project.technologies} />
    </div>
    <a href={project.url} target="_blank" rel="noreferrer">Open project ↗</a>
  </div>;
}

function ProjectCard({ project }) {
  return <article className="compact" data-kind={project.kind.join(' ')}>
    <b>{project.number}</b>
    <a className="project-action" href={project.url} target="_blank" rel="noreferrer">Open project ↗</a>
    <img className="compact-media" src={project.preview} alt={`${project.title} repository preview`} loading="lazy" />
    <p className="category">{project.category}</p>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <TechnologyTags technologies={project.technologies} />
  </article>;
}

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const profileRef = useRef(null);
  const visible = (project) => activeFilter === 'all' || project.kind.includes(activeFilter);
  const tilt = (event) => {
    const bounds = profileRef.current.getBoundingClientRect();
    const y = ((event.clientX - bounds.left) / bounds.width - .5) * 10;
    const x = ((event.clientY - bounds.top) / bounds.height - .5) * -10;
    profileRef.current.style.setProperty('--rotate-x', `${x}deg`);
    profileRef.current.style.setProperty('--rotate-y', `${y}deg`);
  };
  const resetTilt = () => {
    profileRef.current?.style.removeProperty('--rotate-x');
    profileRef.current?.style.removeProperty('--rotate-y');
  };

  return <>
    <a className="skip" href="#main">Skip to content</a>
    <div className="grain" aria-hidden="true" />
    <header>
      <a className="logo" href="#top" aria-label="Yaniv Bohbot home">YB<span>°</span></a>
      <nav aria-label="Primary navigation"><a href="#work">Selected work</a><a href="#path">Path</a><a href="#about">About</a></nav>
      <a className="top-contact" href="mailto:Yanivbohbot5@gmail.com">Let's talk ↗</a>
    </header>
    <address className="contact-rail">{contactLinks.map(([label, value, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><span>{label}</span>{value}</a>)}</address>
    <figure className="portfolio-banner"><img src="/assets/yaniv-bohbot-genai-stage.png" alt="Yaniv Bohbot presenting a vision for GenAI, AWS and software development on stage" /></figure>
    <main id="main">
      <section id="top" className="hero shell" aria-labelledby="hero-title">
        <p className="availability"><i /> Senior full-stack developer · Tel Aviv-Yafo · Open to remote</p>
        <div className="hero-grid">
          <div><p className="eyebrow">Engineering systems that earn trust</p><h1 id="hero-title">I turn complex<br />ideas into <em>working</em><br />systems.</h1><p className="intro">I’m Yaniv Bohbot — a senior full-stack developer with a product mindset. I build the connective tissue between dependable software, cloud infrastructure and applied AI.</p><div className="actions"><a className="button dark" href="#work">Explore my work <span>↓</span></a><a className="underlink" href="https://www.linkedin.com/in/yaniv-bohbot/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div></div>
          <aside ref={profileRef} className="profile-card" onPointerMove={tilt} onPointerLeave={resetTilt}><div className="profile-banner" aria-hidden="true"><span>BUILD · OBSERVE · IMPROVE</span></div><img src="/assets/yaniv-bohbot-portrait.jpg" alt="Yaniv Bohbot" /><p>Currently focused on</p><strong>Agentic systems<br />&amp; cloud products</strong><small>01 — 2026</small></aside>
          <div className="system-cube" aria-hidden="true"><div className="cube"><span className="cube-face face-front">AI</span><span className="cube-face face-back">OPS</span><span className="cube-face face-right">SHIP</span><span className="cube-face face-left">CLOUD</span><span className="cube-face face-top">BUILD</span><span className="cube-face face-bottom">CODE</span></div><i className="orbit orbit-one" /><i className="orbit orbit-two" /></div>
        </div>
        <div className="proof"><p><b>01</b> Product-minded<br />full-stack engineering</p><p><b>02</b> Production AI<br />&amp; agent orchestration</p><p><b>03</b> Cloud-native, real-time<br />systems</p></div>
      </section>
      <section id="work" className="work shell" aria-labelledby="work-title">
        <div className="work-head"><p className="eyebrow">01 — Selected work</p><h2 id="work-title">A portfolio of<br /><em>operating systems.</em></h2><p>Not experiments for their own sake. End-to-end systems where architecture, human workflows and delivery all matter.</p></div>
        <div className="filters" role="group" aria-label="Filter projects">{filters.map(([value, label]) => <button key={value} className={`filter ${activeFilter === value ? 'active' : ''}`} type="button" aria-pressed={activeFilter === value} onClick={() => setActiveFilter(value)}>{label}</button>)}</div>
        <div className="projects">
          {featuredProjects.filter(visible).map((project, index) => <FeatureProject key={project.title} project={project} variant={index === 0 ? 'incident' : 'market'} />)}
          <div className="project-grid">
            {secondaryProjects.filter(visible).map((project) => <ProjectCard key={project.title} project={project} />)}
            {activeFilter === 'all' && <section className="archive" aria-labelledby="archive-title"><div className="archive-heading"><span>Repository archive</span><div className="archive-title-action"><h3 id="archive-title">Explore more builds</h3><a className="archive-all" href="https://github.com/YanivBohbot?tab=repositories" target="_blank" rel="noreferrer">View all GitHub projects ↗</a></div><p>Additional experiments across real-time products, agentic workflows and knowledge systems.</p></div><div className="archive-projects"><a href="https://github.com/YanivBohbot/AI-Powered-Real-Time-Kanban-Board" target="_blank" rel="noreferrer"><strong>AI Kanban Board</strong><em>Real-time collaboration</em></a><a href="https://github.com/YanivBohbot/serverless-e-commerce-ai-agent" target="_blank" rel="noreferrer"><strong>Serverless E-commerce AI Agent</strong><em>Agentic workflow</em></a><a href="https://github.com/YanivBohbot" target="_blank" rel="noreferrer"><strong>Document Assistant</strong><em>Knowledge systems</em></a></div><div className="archive-footer"><small>Distributed systems · Microservices · Kafka · REST APIs · ML</small></div></section>}
          </div>
        </div>
      </section>
      <section id="path" className="path shell" aria-labelledby="path-title"><div><p className="eyebrow">02 — Path</p><h2 id="path-title">Built through<br /><em>real delivery.</em></h2></div><Timeline /></section>
      <section id="about" className="about shell" aria-labelledby="about-title"><div><p className="eyebrow">03 — How I work</p><h2 id="about-title">AI is only useful<br />when it is <em>accountable.</em></h2></div><Principles /><Toolkit /></section>
      <section className="education shell" aria-labelledby="education-title"><div><p className="eyebrow">04 — Learning foundation</p><h2 id="education-title">Engineering depth,<br /><em>continuously expanded.</em></h2></div><Education /></section>
      <section className="contact shell" aria-labelledby="contact-title"><p className="eyebrow">05 — Start a conversation</p><h2 id="contact-title">Have a system worth<br /><em>making real?</em></h2><div className="contact-row"><p>For product engineering, AI systems or cloud platform work, I would be glad to talk.</p><a className="button dark" href="mailto:Yanivbohbot5@gmail.com">Send an email ↗</a></div></section>
    </main>
    <footer><a className="logo" href="#top">YB<span>°</span></a><p>© {new Date().getFullYear()} Yaniv Bohbot</p><div><a href="https://www.linkedin.com/in/yaniv-bohbot/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://medium.com/@yanivbohbot5" target="_blank" rel="noreferrer">Medium</a><a href="https://github.com/YanivBohbot" target="_blank" rel="noreferrer">GitHub</a></div></footer>
  </>;
}

function Timeline() {
  const roles = [
    ['2023 — Present', 'Professional development in agentic systems', 'Led the design and development of production-oriented full-stack agentic systems across architecture, implementation, debugging and technical decision-making.', ['LangGraph', 'LangChain', 'RAG', 'Bedrock', 'AgentCore', 'FastAPI']],
    ['2021 — 2023', 'Full-stack Engineer · Ness Technologies', 'Developed scalable, data-driven applications in production across enterprise client projects, with REST APIs, PostgreSQL, AWS services and reusable front-end workflows.', ['React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'AWS']],
    ['2020 — 2021', 'Full-stack Engineer · Pi Technology Advanced Algorithm', 'Improved financial SaaS workflows by integrating ML forecasting services with real-time backend data pipelines and analyst dashboards.', ['.NET 6', 'C#', 'Angular', 'Docker', 'SQL Server', 'AWS']],
  ];
  return <div className="timeline">{roles.map(([date, title, text, tech]) => <article key={title}><p>{date}</p><div><h3>{title}</h3><p>{text}</p><div className="technology-tags">{tech.map((item) => <b key={item}>{item}</b>)}</div></div></article>)}</div>;
}

function Principles() { return <div className="principles"><article><span>01</span><h3>Build for the operator</h3><p>The best system is not the cleverest one. It gives people clarity, safe control and useful context at the moment of action.</p></article><article><span>02</span><h3>Own the whole path</h3><p>From user workflow to API, infrastructure and release quality, I care about what it takes for a feature to work in production.</p></article><article><span>03</span><h3>Make complexity legible</h3><p>Orchestration, observability and a clean interface turn sophisticated systems into tools teams can trust.</p></article></div>; }
function Toolkit() { return <div className="toolkit"><p>Core toolkit</p><div>{['Python', 'TypeScript', 'React', 'Node.js', 'FastAPI', 'NestJS', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'LangGraph', 'AI Agents'].map((item) => <span key={item}>{item}</span>)}</div></div>; }
function Education() { return <><div className="edu-list"><article><p>2024 — 2025</p><div><h3>AI Expert — Machine Learning &amp; Deep Learning with Python</h3><p>John Bryce · AI-driven applications, ML, NLP, LLM APIs, RAG and agents with FastAPI, Hugging Face, PyTorch, TensorFlow and AWS.</p></div></article><article><p>2014 — 2019</p><div><h3>B.Sc. in Software Engineering</h3><p>SCE — Shamoon College of Engineering</p></div></article><article><p>Credentials</p><div><h3>AWS Certified AI Practitioner<br />AWS Certified Solutions Architect — Associate</h3><p>Claude Code in Action · Introduction to Model Context Protocol · AI Agents with LangChain &amp; LangGraph.</p></div></article></div><div className="beyond"><p className="eyebrow">Beyond the build</p><div><p><b>Languages</b> French &amp; Hebrew — native/bilingual · English — professional working proficiency</p><p><b>Community</b> Volunteer mentoring and career-support initiatives; former FIDF IMPACT! student volunteer.</p><p><b>Writing</b> <a href="https://medium.com/@yanivbohbot5" target="_blank" rel="noreferrer">Read my technical notes on Medium ↗</a></p></div></div></>; }

export default App;
