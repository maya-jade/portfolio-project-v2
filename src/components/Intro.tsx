const Intro = () => {
  return (
    <section className="intro" id="home">
      <div className="intro__content">
        <div className="intro__text-container">
          <div className="terminal-prompt">
            <span className="prompt-symbol">$</span>
            <span className="prompt-command typing">whoami</span>
          </div>
          <div className="intro__main-content">
            <h1 className="section__title section__title--intro">
              <strong>Maya Jade</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">
              <span className="role-primary">Software Engineer</span>
              <span className="role-separator"> → </span>
              <span className="role-secondary">Cybersecurity Specialist</span>
            </p>
            <p className="intro__tagline">
              Software Engineer | Web Developer | Offensive Security
            </p>
          </div>
        </div>
        <div className="intro__img-container">
          <img src="/profile.png" alt="Maya Jade" className="intro__img" />
          <div className="status-badge">
            <span className="status-indicator"></span>
            <span>Available for hire</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
