import { VolumeX } from 'lucide-react'
import ReelActions from './ReelActions'

function Reel({ reel }) {
  return (
    <section className="reel-slide" aria-label={`Reel de ${reel.username}`}>
      <div className="reel-layout">
        <article className="reel">
          <video src={reel.video} autoPlay loop muted playsInline />
          <span className="sound-indicator" aria-label="Vidéo sans son">
            <VolumeX size={19} />
          </span>
          <div className="reel-info">
            <div className="reel-author">
              <img src={reel.avatar} alt="" className="author-avatar" />
              <span className="username">{reel.username}</span>
              <span className="author-dot">•</span>
              <button type="button" className="follow-button">Follow</button>
            </div>
            <p className="reel-description">{reel.description}</p>
          </div>
        </article>
        <ReelActions reel={reel} />
      </div>
    </section>
  )
}

export default Reel
