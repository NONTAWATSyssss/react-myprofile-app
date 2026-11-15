import { FaCss3Alt, FaFigma, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa6'
import { SiNextdotjs } from 'react-icons/si'

function Skill() {
  const skills = [
    { name: 'React', percentage: 60, icon: FaReact, className: 'react-skill' },
    { name: 'Figma', percentage: 85, icon: FaFigma },
    { name: 'HTML/CSS', percentage: 80, icon: FaCss3Alt },
    { name: 'Next.js', percentage: 80, icon: SiNextdotjs },
    { name: 'Java Script', percentage: 60, icon: FaNodeJs },
    { name: 'GitHub', percentage: 90, icon: FaGithub },
  ]

  return (
    <section aria-labelledby="skills-title">
      <h1 id="skills-title" className="page-title">My <span className="text-accent">Skills</span></h1>
      <ul className="skills-grid">
        {skills.map(({ name, percentage, icon: Icon, className = '' }) => (
          <li key={name} className={`skill-item ${className}`}>
            <div className="skill-pill">
              <Icon className="skill-icon" aria-hidden="true" />
              <span className="skill-percentage text-accent">{percentage}%</span>
            </div>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skill
