import {
  House, Clapperboard, Send, Search,
  Heart, SquarePlus, Menu, LayoutGrid,
} from 'lucide-react'

const navigation = [
  { label: 'Accueil', icon: House },
  { label: 'Reels', icon: Clapperboard },
  { label: 'Messages', icon: Send },
  { label: 'Rechercher', icon: Search },
  { label: 'Notifications', icon: Heart },
  { label: 'Créer', icon: SquarePlus },
]

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Navigation principale">
      <button type="button" className="sidebar-logo" aria-label="Instagram" title="Instagram">
        <svg width="29" height="29" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </button>
      <nav className="sidebar-links">
        {navigation.map(({ label, icon: Icon }) => (
          <button
            type="button"
            key={label}
            className="sidebar-link"
            aria-label={label}
            aria-current={label === 'Reels' ? 'page' : undefined}
            title={label}
          >
            <Icon size={26} strokeWidth={label === 'Reels' ? 2.7 : 1.8} />
          </button>
        ))}
        <button type="button" className="sidebar-link" aria-label="Profil" title="Profil">
          <img className="profile-avatar" src="/avatars/profile.svg" alt="" />
        </button>
      </nav>
      <div className="sidebar-bottom">
        <button type="button" className="sidebar-link" aria-label="Menu" title="Menu">
          <Menu size={26} strokeWidth={1.8} />
        </button>
        <button type="button" className="sidebar-link" aria-label="Applications" title="Applications">
          <LayoutGrid size={25} strokeWidth={1.8} />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
