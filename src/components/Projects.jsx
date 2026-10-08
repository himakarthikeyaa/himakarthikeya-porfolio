const projects = [
  { number: '01', title: 'Project name', description: 'Summarize the problem, your approach, and the result.' },
  { number: '02', title: 'Project name', description: 'Add another project and highlight your contribution.' },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="section-kicker">04 / Selected work</p>
        <h2>Things I have made</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-index">{project.number} / PROJECT</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects