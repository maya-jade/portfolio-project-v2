import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`about-me ${isVisible ? 'animate-in' : ''}`} id="about">
      <h2 className="section__title section__title--about">The Journey</h2>
      <p className="section__subtitle section__subtitle--about">From building systems to breaking them</p>
      <div className="about-me__body">
        <div className="about-section">
          <h3 className="about-section__title">🚀 The Origin</h3>
          <p>
            With 5+ years as a software engineer, I've architected everything from enterprise CMS platforms at Marriott 
            to custom eCommerce solutions. React, TypeScript, Python, Next.js—I build it, I ship it, I scale it.
          </p>
        </div>
        
        <div className="about-section">
          <h3 className="about-section__title">🔐 The Pivot</h3>
          <p>
            But building secure systems made me curious: what if I tried to break them? Now I'm deep in offensive security—
            HTB machines, red team labs, penetration testing methodologies. Graduating with my B.S. in Cybersecurity in 2026, 
            bridging the gap between developer and defender.
          </p>
        </div>
        
        <div className="about-section">
          <h3 className="about-section__title">💡 The Value</h3>
          <p>
            I speak both languages fluently: write production-grade code AND identify its vulnerabilities. This isn't just 
            about finding bugs—it's about building defensible systems from the ground up.
          </p>
        </div>
        
        <div className="about-cta">
          <p>Currently open to roles in software engineering or cybersecurity.</p>
          <a href="/resume.docx" className="resume-link">View Résumé →</a>
        </div>
      </div>
      <img src="/body.jpg" alt="Maya Jade" className="about-me__img" />
    </section>
  );
};

export default About;
