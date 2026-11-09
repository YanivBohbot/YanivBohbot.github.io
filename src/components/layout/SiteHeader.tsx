const contactLinks = [
  ['Email', 'Yanivbohbot5@gmail.com ↗', 'mailto:Yanivbohbot5@gmail.com'],
  ['Phone', '+972 52 605 5879 ↗', 'tel:+972526055879'],
  ['LinkedIn', 'Connect ↗', 'https://www.linkedin.com/in/yaniv-bohbot/'],
  ['GitHub', 'Explore code ↗', 'https://github.com/YanivBohbot'],
  ['Medium', 'Read notes ↗', 'https://medium.com/@yanivbohbot5'],
] as const;

export function SiteHeader() {
  return <><a className="skip" href="#main">Skip to content</a><div className="grain" aria-hidden="true" /><header><a className="logo" href="#top" aria-label="Yaniv Bohbot home">YB<span>°</span></a><nav aria-label="Primary navigation"><a href="#work">Selected work</a><a href="#path">Path</a><a href="#about">About</a></nav><a className="top-contact" href="mailto:Yanivbohbot5@gmail.com">Let's talk ↗</a></header><address className="contact-rail">{contactLinks.map(([label, value, href]) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><span>{label}</span>{value}</a>)}</address><figure className="portfolio-banner"><img src="/assets/yaniv-bohbot-genai-stage.png" alt="Yaniv Bohbot presenting a vision for GenAI, AWS and software development on stage" /></figure></>;
}
