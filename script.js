document.getElementById("year").textContent = new Date().getFullYear();
document.querySelector(".profile-card img").src = "assets/yaniv-bohbot-portrait.jpg";
const incidentPreview = document.querySelector(".incident");
incidentPreview.classList.add("project-video");
incidentPreview.innerHTML = `<video controls playsinline preload="metadata" poster="https://raw.githubusercontent.com/YanivBohbot/incidentflow/main/apps/web/src/assets/hero.png" aria-label="IncidentFlow project demonstration"><source src="assets/projects/incidentflow-promo.mp4" type="video/mp4">Your browser does not support the IncidentFlow demonstration video.</video><div class="incident-media"><span>IncidentFlow · Product demonstration</span></div>`;
const marketPreview = document.querySelector(".market");
marketPreview.classList.add("project-video");
marketPreview.innerHTML = `<video controls playsinline preload="metadata" aria-label="Market Intelligence System project demonstration"><source src="assets/projects/market-intelligence-demo.mp4" type="video/mp4">Your browser does not support the Market Intelligence System demonstration video.</video><div class="market-media"><span>Market Intelligence System · Product demonstration</span></div>`;
const featuredProjectDescriptions = new Map([
  ["IncidentFlow", "IncidentFlow gives operations teams a guided way to investigate complex incidents. It validates input, coordinates specialized agents and data integrations, gathers evidence, then pauses for human approval before any sensitive update."],
  ["Market Intelligence System", "Market Intelligence System turns fragmented financial signals into structured research briefings. A multi-agent workflow retrieves context, evaluates sources and produces a decision-ready report for faster analyst review."],
]);
document.querySelectorAll(".feature").forEach((project) => {
  const title = project.querySelector("h3")?.textContent;
  const description = title ? featuredProjectDescriptions.get(title) : undefined;
  if (description) project.querySelector(".project-copy div > p:not(.category)").textContent = description;
});
document.querySelector("header").insertAdjacentHTML("afterend", `<address class="contact-rail"><a href="mailto:Yanivbohbot5@gmail.com"><span>Email</span>Yanivbohbot5@gmail.com ↗</a><a href="tel:+972526055879"><span>Phone</span>+972 52 605 5879 ↗</a><a href="https://www.linkedin.com/in/yaniv-bohbot/" target="_blank" rel="noreferrer"><span>LinkedIn</span>Connect ↗</a><a href="https://github.com/YanivBohbot" target="_blank" rel="noreferrer"><span>GitHub</span>Explore code ↗</a><a href="https://medium.com/@yanivbohbot5" target="_blank" rel="noreferrer"><span>Medium</span>Read notes ↗</a></address>`);
document.querySelector(".contact-rail").insertAdjacentHTML("afterend", `<figure class="portfolio-banner"><img src="assets/yaniv-bohbot-genai-stage.png" alt="Yaniv Bohbot presenting a vision for GenAI, AWS and software development on stage" loading="eager"></figure>`);
document.querySelector(".contact-row").innerHTML = `<p>For product engineering, AI systems or cloud platform work, I would be glad to talk.</p><a class="button dark" href="mailto:Yanivbohbot5@gmail.com">Send an email ↗</a>`;
const profileCard = document.querySelector(".profile-card");
document.querySelector(".hero-grid").insertAdjacentHTML("beforeend", '<div class="system-cube" aria-hidden="true"><div class="cube"><span class="cube-face face-front">AI</span><span class="cube-face face-back">OPS</span><span class="cube-face face-right">SHIP</span><span class="cube-face face-left">CLOUD</span><span class="cube-face face-top">BUILD</span><span class="cube-face face-bottom">CODE</span></div><i class="orbit orbit-one"></i><i class="orbit orbit-two"></i></div>');
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  profileCard.addEventListener("pointermove", (event) => {
    const bounds = profileCard.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    profileCard.style.setProperty("--rotate-x", `${rotateX}deg`);
    profileCard.style.setProperty("--rotate-y", `${rotateY}deg`);
  });
  profileCard.addEventListener("pointerleave", () => {
    profileCard.style.removeProperty("--rotate-x");
    profileCard.style.removeProperty("--rotate-y");
  });
}
const typographyStylesheet = document.createElement("link");
typographyStylesheet.rel = "stylesheet";
typographyStylesheet.href = "styles.typography.css";
document.head.append(typographyStylesheet);
const videoStylesheet = document.createElement("link");
videoStylesheet.rel = "stylesheet";
videoStylesheet.href = "styles.video.css";
document.head.append(videoStylesheet);
const projectMediaStylesheet = document.createElement("link");
projectMediaStylesheet.rel = "stylesheet";
projectMediaStylesheet.href = "styles.project-media.css";
document.head.append(projectMediaStylesheet);
const interfaceScaleStylesheet = document.createElement("link");
interfaceScaleStylesheet.rel = "stylesheet";
interfaceScaleStylesheet.href = "styles.ui-scale.css";
document.head.append(interfaceScaleStylesheet);
const readabilityStylesheet = document.createElement("link");
readabilityStylesheet.rel = "stylesheet";
readabilityStylesheet.href = "styles.readability.css";
document.head.append(readabilityStylesheet);
const projectActionsStylesheet = document.createElement("link");
projectActionsStylesheet.rel = "stylesheet";
projectActionsStylesheet.href = "styles.project-actions.css";
document.head.append(projectActionsStylesheet);
const archiveStylesheet = document.createElement("link");
archiveStylesheet.rel = "stylesheet";
archiveStylesheet.href = "styles.archive.css";
document.head.append(archiveStylesheet);
const compactArchiveStylesheet = document.createElement("link");
compactArchiveStylesheet.rel = "stylesheet";
compactArchiveStylesheet.href = "styles.archive-compact.css";
document.head.append(compactArchiveStylesheet);
const archiveActionsStylesheet = document.createElement("link");
archiveActionsStylesheet.rel = "stylesheet";
archiveActionsStylesheet.href = "styles.archive-actions.css";
document.head.append(archiveActionsStylesheet);
const threeDimensionalStylesheet = document.createElement("link");
threeDimensionalStylesheet.rel = "stylesheet";
threeDimensionalStylesheet.href = "styles.3d.css";
document.head.append(threeDimensionalStylesheet);
const cubeStylesheet = document.createElement("link");
cubeStylesheet.rel = "stylesheet";
cubeStylesheet.href = "styles.cube.css";
document.head.append(cubeStylesheet);
const contactStylesheet = document.createElement("link");
contactStylesheet.rel = "stylesheet";
contactStylesheet.href = "styles.contact.css";
document.head.append(contactStylesheet);
const contactRailStylesheet = document.createElement("link");
contactRailStylesheet.rel = "stylesheet";
contactRailStylesheet.href = "styles.contact-rail.css";
document.head.append(contactRailStylesheet);
const bannerStylesheet = document.createElement("link");
bannerStylesheet.rel = "stylesheet";
bannerStylesheet.href = "styles.banner.css";
document.head.append(bannerStylesheet);
document.querySelectorAll(".timeline span").forEach((technologyLine) => {
  const technologies = technologyLine.textContent.trim().split(" · ");
  technologyLine.classList.add("technology-tags");
  technologyLine.replaceChildren(...technologies.map((technology) => {
    const tag = document.createElement("b");
    tag.textContent = technology;
    return tag;
  }));
});
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
const projectCatalog = [
  { number: "03 / 06", kind: "realtime agents microservices containers", category: "Real-time · GenAI", title: "Technical Interview Platform", description: "A shared workspace for live coding and video interviews. React, Node.js and Socket.IO enable real-time collaboration, while GenAI capabilities help run more structured technical sessions.", technologies: ["Node.js", "React", "Socket.IO"], url: "https://github.com/YanivBohbot/video-calling-interview", media: { type: "image", src: "assets/projects/technical-interview-preview.png", alt: "Technical Interview Platform repository preview" } },
  { number: "04 / 06", kind: "agents platform computer-vision rag containers", category: "Computer vision · Safety", title: "WatchTower", description: "A video-investigation workflow that analyzes uploaded footage with YOLO and tracking, identifies potential incidents, and assembles evidence into a report for human review.", technologies: ["FastAPI", "YOLO", "RAG"], url: "https://github.com/YanivBohbot/watchtower-systems-incidents", media: { type: "image", src: "assets/projects/watchtower-preview.png", alt: "WatchTower repository preview" } },
  { number: "05 / 06", kind: "platform agents microservices containers", category: "AI backend · Microservices", title: "AI Backend System", description: "A distributed fraud-detection backend for processing events asynchronously. FastAPI services, Kafka messaging and containerized components separate ingestion, detection and downstream actions.", technologies: ["Python", "FastAPI", "Kafka"], url: "https://github.com/YanivBohbot/AI_Backend_System_Microservices", media: { type: "image", src: "assets/projects/ai-backend-preview.png", alt: "AI Backend System repository preview" } },
  { number: "06 / 06", kind: "platform microservices containers", category: "Cloud-native · Event driven", title: "Ticket Master", description: "An event-ticketing system built as independently deployable microservices. AWS CDK defines the infrastructure, supporting real-time inventory, order and fraud-aware processing flows.", technologies: ["AWS CDK", "TypeScript", "Microservices"], url: "https://github.com/YanivBohbot/ticket-master-microservices-infra", media: { type: "image", src: "assets/projects/ticket-master-preview.png", alt: "Ticket Master repository preview" } },
];

function renderProjectMedia(media) {
  if (!media) return '<div class="compact-media compact-media--empty" aria-hidden="true">PROJECT PREVIEW</div>';
  if (media.type === "video") return `<video class="compact-media" controls playsinline preload="metadata" poster="${media.poster || ""}"><source src="${media.src}" type="video/mp4"></video>`;
  return `<img class="compact-media" src="${media.src}" alt="${media.alt}" loading="lazy">`;
}

function renderProjectCard(project) {
  const technologies = project.technologies.map((technology) => `<li>${technology}</li>`).join("");
  return `<article class="compact" data-kind="${project.kind}"><b>${project.number}</b><a class="project-action" href="${project.url}" target="_blank" rel="noreferrer">Open project ↗</a>${renderProjectMedia(project.media)}<p class="category">${project.category}</p><h3>${project.title}</h3><p>${project.description}</p><ul>${technologies}</ul></article>`;
}

const projectGrid = document.querySelector(".project-grid");
projectGrid.innerHTML = `${projectCatalog.map(renderProjectCard).join("")}<section class="archive" aria-labelledby="archive-title"><div class="archive-heading"><span>Repository archive</span><h3 id="archive-title">Explore more builds</h3><p>Additional experiments across real-time products, agentic workflows and knowledge systems.</p></div><div class="archive-projects"><a href="https://github.com/YanivBohbot/AI-Powered-Real-Time-Kanban-Board" target="_blank" rel="noreferrer"><b>01</b><strong>AI Kanban Board</strong><em>Real-time · NestJS · WebSockets</em><i>↗</i></a><a href="https://github.com/YanivBohbot/Serverless-E-Commerce-AI-Agent" target="_blank" rel="noreferrer"><b>02</b><strong>Serverless E-Commerce AI Agent</strong><em>LangGraph · Bedrock · Lambda</em><i>↗</i></a><a href="https://github.com/YanivBohbot/document_assitant_project" target="_blank" rel="noreferrer"><b>03</b><strong>Document Assistant</strong><em>RAG · LangChain · Knowledge retrieval</em><i>↗</i></a></div><div class="archive-footer"><small>Distributed systems · Microservices · Kafka · REST APIs · ML</small><a href="https://github.com/YanivBohbot?tab=repositories" target="_blank" rel="noreferrer">View all GitHub projects ↗</a></div></section>`;
document.querySelector('[data-kind="agents realtime"]').dataset.kind += " rag";
document.querySelector(".filters").insertAdjacentHTML("beforeend", '<button class="filter" type="button" data-filter="microservices" aria-pressed="false">Microservices</button><button class="filter" type="button" data-filter="containers" aria-pressed="false">Containers</button><button class="filter" type="button" data-filter="rag" aria-pressed="false">RAG</button><button class="filter" type="button" data-filter="computer-vision" aria-pressed="false">Computer Vision / YOLO</button>');
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll("[data-kind]");
const archivePanel = document.querySelector(".archive");
filters.forEach((filter) => filter.addEventListener("click", () => { const selected = filter.dataset.filter; filters.forEach((item) => { const current = item === filter; item.classList.toggle("active", current); item.setAttribute("aria-pressed", String(current)); }); projects.forEach((project) => { const visible = selected === "all" || project.dataset.kind.includes(selected); project.hidden = !visible; }); archivePanel.hidden = selected !== "all"; }));

document.querySelector(".archive-heading").insertAdjacentHTML("beforeend", '<a class="archive-all" href="https://github.com/YanivBohbot?tab=repositories" target="_blank" rel="noreferrer">View all GitHub projects ↗</a>');
const archiveHeading = document.querySelector(".archive-heading");
const archiveTitleAction = document.createElement("div");
archiveTitleAction.className = "archive-title-action";
archiveTitleAction.append(archiveHeading.querySelector("h3"), archiveHeading.querySelector(".archive-all"));
archiveHeading.insertBefore(archiveTitleAction, archiveHeading.querySelector("p"));

if (false) document.querySelector("#path").insertAdjacentHTML("beforebegin", `
  <section class="archive-section shell" aria-labelledby="archive-title">
    <div><p class="eyebrow">More builds</p><h2 id="archive-title">The wider <em>archive.</em></h2></div>
    <ol class="archive-list">
      <li><a href="https://github.com/YanivBohbot/Serverless-E-Commerce-AI-Agent" target="_blank" rel="noreferrer"><span>07</span><strong>Serverless E-Commerce AI Agent</strong><em>LangGraph · AWS Bedrock · Lambda</em><b>↗</b></a></li>
      <li><a href="https://github.com/YanivBohbot/document_assitant_project" target="_blank" rel="noreferrer"><span>08</span><strong>Document Assistant</strong><em>RAG · LangChain · Document Q&amp;A</em><b>↗</b></a></li>
      <li><a href="https://github.com/YanivBohbot/AI-Powered-Real-Time-Kanban-Board" target="_blank" rel="noreferrer"><span>09</span><strong>AI Kanban Board</strong><em>NestJS · React · WebSockets</em><b>↗</b></a></li>
      <li><a href="https://github.com/YanivBohbot/document_assitant_project" target="_blank" rel="noreferrer"><span>10</span><strong>Document Assistant</strong><em>RAG · LangChain · Document Q&amp;A</em><b>↗</b></a></li>
    </ol>
  </section>`);
