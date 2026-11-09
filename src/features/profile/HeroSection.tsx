import { useRef, type PointerEvent } from 'react';

export function HeroSection() {
  const profileRef = useRef<HTMLElement>(null);
  const tilt = (event: PointerEvent<HTMLElement>) => {
    const element = profileRef.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    element.style.setProperty('--rotate-x', `${((event.clientY - bounds.top) / bounds.height - .5) * -10}deg`);
    element.style.setProperty('--rotate-y', `${((event.clientX - bounds.left) / bounds.width - .5) * 10}deg`);
  };
  const resetTilt = () => { profileRef.current?.style.removeProperty('--rotate-x'); profileRef.current?.style.removeProperty('--rotate-y'); };

  return <section id="top" className="hero shell" aria-labelledby="hero-title"><p className="availability"><i /> Senior full-stack developer · Tel Aviv-Yafo · Open to remote</p><div className="hero-grid"><div><p className="eyebrow">Engineering systems that earn trust</p><h1 id="hero-title">I turn complex<br />ideas into <em>working</em><br />systems.</h1><p className="intro">I’m Yaniv Bohbot — a senior full-stack developer with a product mindset. I build the connective tissue between dependable software, cloud infrastructure and applied AI.</p><div className="actions"><a className="button dark" href="#work">Explore my work <span>↓</span></a><a className="underlink" href="https://www.linkedin.com/in/yaniv-bohbot/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div></div><aside ref={profileRef} className="profile-card" onPointerMove={tilt} onPointerLeave={resetTilt}><div className="profile-banner" aria-hidden="true"><span>BUILD · OBSERVE · IMPROVE</span></div><img src="/assets/yaniv-bohbot-portrait.jpg" alt="Yaniv Bohbot" /><p>Currently focused on</p><strong>Agentic systems<br />&amp; cloud products</strong><small>01 — 2026</small></aside><div className="system-cube" aria-hidden="true"><div className="cube"><span className="cube-face face-front">AI</span><span className="cube-face face-back">OPS</span><span className="cube-face face-right">SHIP</span><span className="cube-face face-left">CLOUD</span><span className="cube-face face-top">BUILD</span><span className="cube-face face-bottom">CODE</span></div><i className="orbit orbit-one" /><i className="orbit orbit-two" /></div></div><div className="proof"><p><b>01</b> Product-minded<br />full-stack engineering</p><p><b>02</b> Production AI<br />&amp; agent orchestration</p><p><b>03</b> Cloud-native, real-time<br />systems</p></div></section>;
}
