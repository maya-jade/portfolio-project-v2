import { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const clientProjects: Project[] = [
  {
    title: 'MobileQubes.com',
    description: 'Custom WordPress site developed from Figma designs using Blocksy. Focused on mobile-first UX and performance optimization.'
  },
  {
    title: 'RenLasan.com',
    description: 'Elementor-based WordPress site for an independent YouTube vlogger. Delivered flexible content layout with built-in SEO enhancements.'
  },
  {
    title: 'ExclusiveVIPTaxi.com',
    description: 'Multilingual landing page built with Bootstrap. Features user language toggle and geo-targeted metadata for SEO.'
  },
  {
    title: 'BungalowSavings.com',
    description: 'WooCommerce WordPress storefront. Responsible for backend upkeep, plugin stack, and custom UI styling.'
  }
];

const personalProjects: Project[] = [
  {
    title: 'Blackjack Game',
    description: 'A fully functional vanilla JavaScript game. Implements real-time score tracking and basic game logic.',
    link: 'https://github.com/maya-jade/blackjack-game'
  },
  {
    title: 'Login Page',
    description: 'Responsive login form with social button styling and accessible form controls using semantic HTML/CSS.',
    link: 'https://github.com/maya-jade/login-page'
  },
  {
    title: 'HognoseQueen.com',
    description: 'My (archived) personal business site built to market and sell reptiles. Custom-built and optimized for small business sales.',
    link: 'https://github.com/maya-jade/hognose-queen-website'
  },
  {
    title: 'Portfolio v1',
    description: 'First iteration of my portfolio site built with React, TypeScript, and Vite. Foundation for the current version.',
    link: 'https://v1.maya-jade.dev/'
  },
  {
    title: 'This Website!',
    description: 'A portfolio site built with React and TypeScript, designed for performance and clarity. Deployed via Vercel.',
    link: 'https://github.com/maya-jade/portfolio-project',
    featured: true
  }
];

const cybersecurityProjects: Project[] = [
  {
    title: 'Hack The Box Writeups',
    description: 'Documented walkthroughs on various HTB machines including web, Linux, Windows, and AD environments.',
    link: 'https://github.com/maya-jade/htb-writeups'
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`projects-section ${isVisible ? 'animate-in' : ''}`} id="work">
      <div className="projects-container">
        <h2 className="section__title section__title--work">Additional Projects</h2>
        <p className="projects-subtitle">Development work, personal experiments, and security research</p>

        <div className="projects-category">
          <div className="projects-category-header">
            <h3>🛠️ Client Work</h3>
            <span className="projects-note">Early career freelance projects</span>
          </div>
          <p className="projects-disclaimer">⚠️ Early work from 2018-2020 — archived for reference</p>
          <div className="projects-grid">
            {clientProjects.map((project, index) => (
              <div key={index} className="project-card">
                <h4>
                  {project.title}
                  <span className="project-status">Site disabled/inactive by client</span>
                </h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <div className="case-study-reference">
            <p>
              📁 Screenshots and archives available in my{' '}
              <a href="/case-studies/Web_Dev_Case_Study.docx" target="_blank" rel="noopener noreferrer">
                Freelance Web Development Case Study
              </a>
            </p>
          </div>
        </div>

        <div className="projects-category">
          <div className="projects-category-header">
            <h3>💡 Personal Projects</h3>
            <span className="projects-note">Open source & learning experiments</span>
          </div>
          <p className="projects-disclaimer">⚠️ Most of these are early learning projects — kept for nostalgia and growth tracking!</p>
          <div className="projects-grid">
            {personalProjects.map((project, index) => (
              <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
                <h4>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      {project.title} ↗
                    </a>
                  ) : (
                    project.title
                  )}
                  {project.featured && <span className="featured-badge" style={{ marginLeft: '0.5rem' }}>✨ Latest</span>}
                </h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-category cyber">
          <div className="projects-category-header">
            <h3>🔐 Cybersecurity Projects</h3>
            <span className="projects-note">Red team practice & CTF writeups</span>
          </div>
          <p className="cyber-description">
            Active in offensive security training: HTB machines, red team labs, and CTF challenges. 
            Focus areas include web app exploitation, privilege escalation, and Active Directory attacks.
          </p>
          <div className="projects-grid">
            {cybersecurityProjects.map((project, index) => (
              <div key={index} className="project-card cyber-card">
                <h4>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {project.title} ↗
                  </a>
                </h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
