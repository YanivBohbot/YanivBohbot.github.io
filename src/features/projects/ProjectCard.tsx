import type { Project } from './types';

interface ProjectCardProps { project: Project; }

export function TechnologyTags({ technologies }: Pick<Project, 'technologies'>) {
  return <ul>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>;
}

export function FeaturedProject({ project, variant }: ProjectCardProps & { variant: 'incident' | 'market' }) {
  return <article className="feature" data-kind={project.kind.join(' ')}>
    <div className={`art ${variant} project-video`}>
      <video controls playsInline preload="metadata" poster={project.poster} aria-label={`${project.title} project demonstration`}>
        <source src={project.video} type="video/mp4" />
        Your browser does not support the project demonstration video.
      </video>
      <div className={`${variant}-media`}><span>{project.title} · Product demonstration</span></div>
    </div>
    <ProjectDetails project={project} />
  </article>;
}

function ProjectDetails({ project }: ProjectCardProps) {
  return <div className="project-copy"><small>{project.number}</small><div><p className="category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><TechnologyTags technologies={project.technologies} /></div><a href={project.url} target="_blank" rel="noreferrer">Open project ↗</a></div>;
}

export function CompactProjectCard({ project }: ProjectCardProps) {
  return <article className="compact" data-kind={project.kind.join(' ')}><b>{project.number}</b><a className="project-action" href={project.url} target="_blank" rel="noreferrer">Open project ↗</a>{project.preview && <img className="compact-media" src={project.preview} alt={`${project.title} repository preview`} loading="lazy" />}<p className="category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><TechnologyTags technologies={project.technologies} /></article>;
}
