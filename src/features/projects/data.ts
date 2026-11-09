import type { FilterOption, Project } from './types';

export const filters: FilterOption[] = [
  { value: 'all', label: 'All work' },
  { value: 'agents', label: 'Agentic AI' },
  { value: 'platform', label: 'Platform' },
  { value: 'realtime', label: 'Real-time' },
  { value: 'microservices', label: 'Microservices' },
  { value: 'containers', label: 'Containers' },
  { value: 'rag', label: 'RAG' },
  { value: 'computer-vision', label: 'Computer Vision / YOLO' },
];

export const featuredProjects: Project[] = [
  { number: '01 / 06', category: 'Agentic AI · Incident management', title: 'IncidentFlow', kind: ['agents', 'platform'], description: 'IncidentFlow gives operations teams a guided way to investigate complex incidents. It validates input, coordinates specialized agents and data integrations, gathers evidence, then pauses for human approval before any sensitive update.', technologies: ['Python', 'LangGraph', 'FastAPI', 'PostgreSQL'], video: '/assets/projects/incidentflow-promo.mp4', poster: 'https://raw.githubusercontent.com/YanivBohbot/incidentflow/main/apps/web/src/assets/hero.png', url: 'https://github.com/YanivBohbot/incidentflow' },
  { number: '02 / 06', category: 'Multi-agent research · Finance', title: 'Market Intelligence System', kind: ['agents', 'realtime', 'rag'], description: 'Market Intelligence System turns fragmented financial signals into structured research briefings. A multi-agent workflow retrieves context, evaluates sources and produces a decision-ready report for faster analyst review.', technologies: ['LangGraph', 'FastAPI', 'RAG', 'AWS AgentCore'], video: '/assets/projects/market-intelligence-demo.mp4', url: 'https://github.com/YanivBohbot/Finance-Market-Intelligence-Multi-Agents-System' },
];

export const secondaryProjects: Project[] = [
  { number: '03 / 06', kind: ['realtime', 'agents', 'microservices', 'containers'], category: 'Real-time · GenAI', title: 'Technical Interview Platform', description: 'A shared workspace for live coding and video interviews. React, Node.js and Socket.IO enable real-time collaboration, while GenAI capabilities help run more structured technical sessions.', technologies: ['Node.js', 'React', 'Socket.IO'], preview: '/assets/projects/technical-interview-preview.png', url: 'https://github.com/YanivBohbot/video-calling-interview' },
  { number: '04 / 06', kind: ['agents', 'platform', 'computer-vision', 'rag', 'containers'], category: 'Computer vision · Safety', title: 'WatchTower', description: 'A video-investigation workflow that analyzes uploaded footage with YOLO and tracking, identifies potential incidents, and assembles evidence into a report for human review.', technologies: ['FastAPI', 'YOLO', 'RAG'], preview: '/assets/projects/watchtower-preview.png', url: 'https://github.com/YanivBohbot/watchtower-systems-incidents' },
  { number: '05 / 06', kind: ['platform', 'agents', 'microservices', 'containers'], category: 'AI backend · Microservices', title: 'AI Backend System', description: 'A distributed fraud-detection backend for processing events asynchronously. FastAPI services, Kafka messaging and containerized components separate ingestion, detection and downstream actions.', technologies: ['Python', 'FastAPI', 'Kafka'], preview: '/assets/projects/ai-backend-preview.png', url: 'https://github.com/YanivBohbot/AI_Backend_System_Microservices' },
  { number: '06 / 06', kind: ['platform', 'microservices', 'containers'], category: 'Cloud-native · Event driven', title: 'Ticket Master', description: 'An event-ticketing system built as independently deployable microservices. AWS CDK defines the infrastructure, supporting real-time inventory, order and fraud-aware processing flows.', technologies: ['AWS CDK', 'TypeScript', 'Microservices'], preview: '/assets/projects/ticket-master-preview.png', url: 'https://github.com/YanivBohbot/ticket-master-microservices-infra' },
];
