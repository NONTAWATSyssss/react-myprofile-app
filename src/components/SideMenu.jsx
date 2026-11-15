import { NavLink } from 'react-router'
import {
  PiBriefcaseLight,
  PiChatTeardropLight,
  PiHouseLight,
  PiListBold,
  PiSpeakerHighLight,
  PiTerminalWindowLight,
  PiUserListLight,
} from 'react-icons/pi'

function SideMenu() {
  const menuItems = [
    { path: '/', label: 'Home', icon: PiHouseLight },
    { path: '/about', label: 'About me', icon: PiUserListLight },
    { path: '/eduexp', label: 'Education and experience', icon: PiSpeakerHighLight },
    { path: '/spec', label: 'Specializations', icon: PiListBold },
    { path: '/projects', label: 'Projects', icon: PiBriefcaseLight },
    { path: '/skills', label: 'Skills', icon: PiTerminalWindowLight },
    { path: '/contactme', label: 'Contact me', icon: PiChatTeardropLight },
  ]

  return (
    <nav className="side-menu" aria-label="Main navigation">
      {menuItems.map(({ path, label, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          aria-label={label}
          title={label}
          className={({ isActive }) => `menu-link${isActive ? ' is-active' : ''}`}
        >
          <Icon className={path === '/spec' ? 'specialization-icon' : undefined} aria-hidden="true" />
        </NavLink>
      ))}
    </nav>
  )
}

export default SideMenu
