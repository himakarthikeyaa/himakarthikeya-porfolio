const certifications = [
  { title: 'Certification name', issuer: 'Issuing organization · Year' },
  { title: 'Certification name', issuer: 'Issuing organization · Year' },
]

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-heading">
        <p className="section-kicker">05 / Certifications</p>
        <h2>Learning in progress</h2>
      </div>
      <div className="cert-list">
        {certifications.map((certification, index) => (
          <article className="cert-item" key={`${certification.title}-${index}`}>
            <h3>{certification.title}</h3>
            <p>{certification.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications