const skills = ['Add a skill', 'Add a tool', 'Add a technology', 'Add a strength']

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="section-kicker">03 / Skills</p>
        <h2>Tools of the trade</h2>
      </div>
      <ul className="skill-list">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}

export default Skills