import { ChevronUp, ChevronDown, Send } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Reel from './components/Reel'
import './App.css'

// Données statiques : remplacez les vidéos dans public/videos.
const reels = [
  {
    id: 1, username: 'logarum', description: 'Calculator with camera and AI',
    likes: '168K', comments: '678', reposts: '5,408',
    video: '/videos/reel1.mp4', avatar: '/avatars/logarum.svg',
  },
  {
    id: 2, username: 'daily.escape', description: 'A little escape from the everyday ✨',
    likes: '42.3K', comments: '214', reposts: '1,206',
    video: '/videos/reel2.mp4', avatar: '/avatars/escape.svg',
  },
  {
    id: 3, username: 'just.play', description: 'Make time for the things you love.',
    likes: '89.1K', comments: '392', reposts: '2,817',
    video: '/videos/reel3.mp4', avatar: '/avatars/play.svg',
  },
]

function App() {
  return (
    <>
      <Sidebar />
      <main className="main" aria-label="Instagram Reels">
        {reels.map((reel) => <Reel key={reel.id} reel={reel} />)}
      </main>
      <div className="reel-navigation" aria-label="Navigation des Reels">
        <button type="button" aria-label="Reel précédent">
          <ChevronUp size={24} />
        </button>
        <button type="button" aria-label="Reel suivant">
          <ChevronDown size={24} />
        </button>
      </div>
      <button type="button" className="messages-button" aria-label="Messages">
        <Send size={24} />
        <span>Messages</span>
        <span className="message-avatars" aria-hidden="true">
          {reels.map((item) => (
            <img key={item.id} src={item.avatar} alt="" />
          ))}
        </span>
      </button>
    </>
  )
}

export default App
