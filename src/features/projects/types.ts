export type ProjectFilter =
  | 'all'
  | 'agents'
  | 'platform'
  | 'realtime'
  | 'microservices'
  | 'containers'
  | 'rag'
  | 'computer-vision';

export interface Project {
  number: string;
  category: string;
  title: string;
  kind: Exclude<ProjectFilter, 'all'>[];
  description: string;
  technologies: string[];
  url: string;
  video?: string;
  poster?: string;
  preview?: string;
}

export interface FilterOption {
  value: ProjectFilter;
  label: string;
}
