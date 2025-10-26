import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CaseStudy {
  title: string;
  company: string;
  description: string;
  impact: string[];
  techStack: string[];
  caseStudy: string;
  icon: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'eCommerce Multisite Platform',
    company: 'Encentiv Energy',
    description: 'Architected and deployed scalable eCommerce solution for clean energy marketplace',
    impact: [
      'Multi-storefront system',
      'Dynamic rebate engine',
      'Advanced product filtering'
    ],
    techStack: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'MySQL'],
    caseStudy: '/case-studies/Encentiv_Case_Study.docx',
    icon: '🛒'
  },
  {
    title: 'Global Content Platform',
    company: 'Marriott Vacations Worldwide',
    description: 'Led enterprise CMS engineering for international hotel brands',
    impact: [
      'Multi-region publishing',
      'Localization workflows',
      'SEO optimization'
    ],
    techStack: ['Jahia CMS', 'React', 'Java', 'GraphQL', 'AWS'],
    caseStudy: '/case-studies/MVW_Case_Study.docx',
    icon: '🏨'
  },
  {
    title: 'Custom Web Solutions',
    company: 'Freelance Clients',
    description: 'Full-stack development for small businesses and startups',
    impact: [
      'WordPress storefronts',
      'Multilingual sites',
      'Custom themes & plugins'
    ],
    techStack: ['WordPress', 'React', 'Bootstrap', 'Elementor', 'SEO'],
    caseStudy: '/case-studies/Web_Dev_Case_Study.docx',
    icon: '💼'
  }
];

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`case-studies-section ${isVisible ? 'animate-in' : ''}`} id="case-studies">
      <div className="case-studies-container">
        <h2 className="section__title section__title--work">Engineering Case Studies</h2>
        <p className="case-studies-subtitle">Production work across enterprise platforms and custom solutions</p>
        
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <div className="case-study-icon">{study.icon}</div>
              <div className="case-study-company">{study.company}</div>
              <h3 className="case-study-title">{study.title}</h3>
              <p className="case-study-description">{study.description}</p>
              
              <div className="case-study-impact">
                <div className="impact-label">Key Features</div>
                <ul className="impact-list">
                  {study.impact.map((item, i) => (
                    <li key={i}>
                      <span className="impact-bullet">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="case-study-tech">
                {study.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <a href={study.caseStudy} target="_blank" rel="noopener noreferrer" className="case-study-link">
                Read Full Case Study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
