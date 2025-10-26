import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CurrentItem {
  category: string;
  items: string[];
  icon: string;
}

const currentlyData: CurrentItem[] = [
  {
    category: 'Learning',
    icon: '📚',
    items: [
      'Advanced Web Application Penetration Testing',
      'Active Directory Exploitation',
      'Offensive Python Scripting'
    ]
  },
  {
    category: 'Practicing',
    icon: '⚔️',
    items: [
      'Hack The Box machines',
      'TryHackMe red team paths',
      'Bug bounty programs'
    ]
  },
  {
    category: 'Building',
    icon: '🛠️',
    items: [
      'Custom security tools in Python',
      'CTF writeups & tutorials',
      'Portfolio v2 (you\'re looking at it!)'
    ]
  }
];

const Currently = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      className={`currently-section ${isVisible ? 'animate-in' : ''}`} 
      id="currently"
    >
      <div className="currently-container">
        <div className="currently-header">
          <span className="terminal-cursor">▋</span>
          <h2 className="section__title section__title--currently">./currently.sh</h2>
        </div>
        <p className="currently-subtitle">What I'm up to right now</p>
        
        <div className="currently-grid">
          {currentlyData.map((item, index) => (
            <div key={index} className="currently-card">
              <div className="currently-card__header">
                <span className="currently-icon">{item.icon}</span>
                <h3>{item.category}</h3>
              </div>
              <ul className="currently-list">
                {item.items.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    <span className="bullet">›</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="status-bar">
          <div className="status-item">
            <span className="status-label">Education:</span>
            <span className="status-value">B.S. Cybersecurity '26</span>
          </div>
          <div className="status-item">
            <span className="status-label">Location:</span>
            <span className="status-value">Florida, USA</span>
          </div>
          <div className="status-item">
            <span className="status-label">Status:</span>
            <span className="status-value status-active">Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Currently;
