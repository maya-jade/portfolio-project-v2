import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Programming & Frameworks',
    icon: '💻',
    skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'PHP', 'HTML', 'CSS', 'Shopify Liquid']
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'Azure', 'Vercel', 'Netlify', 'Heroku', 'Git (GitHub, GitLab, Bitbucket)', 'CI/CD Pipelines', 'Linux & Windows Server (CLI, Bash)', 'VS Code']
  },
  {
    title: 'Cybersecurity & Offensive Ops',
    icon: '🛡️',
    skills: ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'LinPEAS', 'ParrotOS', 'Kali Linux', 'Web App Security', 'Active Directory Labs', 'Recon & Enumeration']
  },
  {
    title: 'AI & Machine Learning',
    icon: '🤖',
    skills: ['Grok', 'ChatGPT', 'Perplexity', 'Adobe Firefly', 'Midjourney', 'Gemini', 'Sora', 'Applied ML for Web', 'Model Prompt Design']
  },
  {
    title: 'Platforms & CMS',
    icon: '🏢',
    skills: ['Shopify', 'WordPress', 'WooCommerce', 'SAP Hybris', 'Jahia', 'Headless CMS Architecture']
  },
  {
    title: 'Design & Analytics',
    icon: '📊',
    skills: ['Figma', 'Google Analytics 4 (GA4)', 'Tag Manager', 'Search Console', 'Hotjar', 'SEO Optimization', 'Accessibility (a11y)', 'Performance Auditing']
  }
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`my-services ${isVisible ? 'services-visible' : ''}`} id="services">
      <h2 className="section__title section__title--services">Technical Skills</h2>
      <p className="section__subtitle--services">Full-stack development, security operations, and modern tooling</p>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="skill-category__header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a href="#work" className="btn">View Projects</a>
    </section>
  );
};

export default Services;
