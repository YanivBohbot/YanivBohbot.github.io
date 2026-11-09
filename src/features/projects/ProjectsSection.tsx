import { useState } from 'react';
import { featuredProjects, filters, secondaryProjects } from './data';
import { CompactProjectCard, FeaturedProject } from './ProjectCard';
import type { Project, ProjectFilter } from './types';

const includesFilter = (project: Project, filter: ProjectFilter) => filter === 'all' || project.kind.includes(filter);

function RepositoryArchive() {
  return <section className="archive" aria-labelledby="archive-title">
    <div className="archive-heading"><span>Repository archive</span><div className="archive-title-action"><h3 id="archive-title">Explore more builds</h3><a className="archive-all" href="https://github.com/YanivBohbot?tab=repositories" target="_blank" rel="noreferrer">View all GitHub projects ↗</a></div><p>Additional experiments across real-time products, agentic workflows and knowledge systems.</p></div>
    <div className="archive-projects"><a href="https://github.com/YanivBohbot/AI-Powered-Real-Time-Kanban-Board" target="_blank" rel="noreferrer"><strong>AI Kanban Board</strong><em>Real-time collaboration</em></a><a href="https://github.com/YanivBohbot/serverless-e-commerce-ai-agent" target="_blank" rel="noreferrer"><strong>Serverless E-commerce AI Agent</strong><em>Agentic workflow</em></a><a href="https://github.com/YanivBohbot" target="_blank" rel="noreferrer"><strong>Document Assistant</strong><em>Knowledge systems</em></a></div>
    <div className="archive-footer"><small>Distributed systems · Microservices · Kafka · REST APIs · ML</small></div>
  </section>;
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const visibleFeatured = featuredProjects.filter((project) => includesFilter(project, activeFilter));
  const visibleSecondary = secondaryProjects.filter((project) => includesFilter(project, activeFilter));

  return <section id="work" className="work shell" aria-labelledby="work-title">
    <div className="work-head"><p className="eyebrow">01 — Selected work</p><h2 id="work-title">A portfolio of<br /><em>operating systems.</em></h2><p>Not experiments for their own sake. End-to-end systems where architecture, human workflows and delivery all matter.</p></div>
    <div className="filters" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter.value} className={`filter ${activeFilter === filter.value ? 'active' : ''}`} type="button" aria-pressed={activeFilter === filter.value} onClick={() => setActiveFilter(filter.value)}>{filter.label}</button>)}</div>
    <div className="projects">
      {visibleFeatured.map((project, index) => <FeaturedProject key={project.title} project={project} variant={index === 0 ? 'incident' : 'market'} />)}
      <div className="project-grid">{visibleSecondary.map((project) => <CompactProjectCard key={project.title} project={project} />)}{activeFilter === 'all' && <RepositoryArchive />}</div>
    </div>
  </section>;
}
