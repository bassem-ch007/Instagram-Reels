import { Heart, MessageCircle, Repeat2, Send, Bookmark, MoreHorizontal } from 'lucide-react'

function ReelActions({ reel }) {
  const actions = [
    { label: 'Commentaires', icon: MessageCircle, count: reel.comments },
    { label: 'Republier', icon: Repeat2, count: reel.reposts },
    { label: 'Partager', icon: Send },
    { label: 'Enregistrer', icon: Bookmark },
    { label: 'Plus', icon: MoreHorizontal },
  ]

  return (
    <div className="reel-actions" aria-label="Actions du Reel">
      <button type="button" className="action-button" aria-label="J’aime">
        <Heart size={29} strokeWidth={1.8} />
        <span>{reel.likes}</span>
      </button>
      {actions.map(({ label, icon: Icon, count }) => (
        <button type="button" key={label} className="action-button" aria-label={label} title={label}>
          <Icon size={28} strokeWidth={1.8} />
          {count && <span>{count}</span>}
        </button>
      ))}
      <img className="audio-thumbnail" src={reel.avatar} alt={`Audio de ${reel.username}`} />
    </div>
  )
}

export default ReelActions
