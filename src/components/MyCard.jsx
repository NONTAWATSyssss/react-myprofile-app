import { Link } from 'react-router'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import profileImage from '../assets/profile-mockup.png'

function MyCard() {
  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/' },
    { name: 'X', icon: FaXTwitter, url: 'https://x.com/' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/' },
    { name: 'Google', icon: FaGoogle, url: 'https://www.google.com/' },
  ]

  return (
    <aside className="my-card" aria-label="Profile">
      <p className="profile-name"><span className="text-accent">N</span>ontawat </p>
      <img
        className="profile-image"
        src={profileImage}
        alt="Temporary mockup avatar: a smiling man wearing glasses and a black suit"
        width="323"
        height="322"
      />
      <p className="student-id">STU ID: S6952D10016</p>
      <p className="profile-role text-muted">Fullstack Web Developer</p>
      <div className="social-links">
        {socialLinks.map(({ name, icon: Icon, url }) => (
          <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={`${name} (placeholder link)`} title={`${name} — placeholder link`}>
            <Icon aria-hidden="true" />
          </a>
        ))}
      </div>
      <Link className="hire-button" to="/contactme">HIRE ME!</Link>
    </aside>
  )
}

export default MyCard
