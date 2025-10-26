import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mayajade',
    icon: 'fab fa-linkedin'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/maya-jade',
    icon: 'fab fa-github'
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/MayaJadeDev',
    icon: 'fab fa-twitter'
  }
];

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <p className="footerheader">Hire Me!</p>
      <a href="mailto:mayajade.dev@gmail.com" className="footer__link">
        mayajade.dev@gmail.com
      </a>

      <ul className="social-list">
        {socialLinks.map((social, index) => (
          <li key={index} className="social-list__item">
            <a className="social-list__link" href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
