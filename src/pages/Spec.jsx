import { PiCodeLight, PiGlobeLight, PiPenNibLight } from 'react-icons/pi'

function Spec() {
  const specializations = [
    {
      title: 'Front end-developer',
      description: 'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
      icon: PiCodeLight,
    },
    {
      title: 'UI/UX Designer',
      description: 'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
      icon: PiGlobeLight,
    },
    {
      title: 'Graphic designer',
      description: 'As a graphic designer, I transform ideas into visually striking and impactful designs.',
      icon: PiPenNibLight,
    },
  ]

  return (
    <section aria-labelledby="specializations-title">
      <h1 id="specializations-title" className="page-title">My <span className="text-accent">Specializations</span></h1>
      <div className="specialization-list">
        {specializations.map(({ title, description, icon: Icon }) => (
          <article key={title} className="specialization-card">
            <Icon className="text-accent" aria-hidden="true" />
            <h2>{title}</h2>
            <p className="text-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Spec
