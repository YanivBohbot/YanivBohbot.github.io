import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';
import { AboutSection, CareerPath, ContactSection, EducationSection } from '../features/career/CareerSections';
import { HeroSection } from '../features/profile/HeroSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';

export default function App() {
  return <><SiteHeader /><main id="main"><HeroSection /><ProjectsSection /><CareerPath /><AboutSection /><EducationSection /><ContactSection /></main><SiteFooter /></>;
}
