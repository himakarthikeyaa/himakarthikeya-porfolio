function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <p className="eyebrow">Portfolio · 2026</p>

        <h1>
          O. Himakarthikeya<span>.</span>
        </h1>

        <h2>Computer Science Student</h2>

        <p className="hero-copy">
          B.Tech in Artificial Intelligence and Data Science
          at REVA University.
          <br /><br />
          Passionate about building innovative solutions
          with technology.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            View My Projects
          </a>

          <a className="text-link" href="#contact">
            Contact Me <span aria-hidden="true">↗</span>
          </a>

          <a className="text-link" href="/resume.pdf" download>
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="portrait-wrap">
        <span className="portrait-fallback" aria-hidden="true">
          OH
        </span>

        <img
          className="portrait-image"
          src="/assets/profile.jpg"
          alt="Profile photo of O. Himakarthikeya"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>
    </section>
  );
}

export default Hero;