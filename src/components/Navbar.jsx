function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Hima Karthikeya home">
        HK<span>.</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#experience">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
      </nav>
      <a className="nav-contact" href="#contact">Contact</a>
    </header>
  )
}

export default Navbar