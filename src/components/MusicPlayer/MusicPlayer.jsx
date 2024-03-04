import { useState } from 'react'
import Card from './Card'
import './MusicPlayer.scss'

const MusicPlayer = () => {
  const [musicNumber, setMusicNumber] = useState(0)
  return (
    <div className="container ">
      <div className="music-container min-h-screen">
        <h2>Check Out Our Musics</h2>
      <main>
        <Card props={{ musicNumber, setMusicNumber }} />
      </main>
      </div>
    </div>
  )
}
export default MusicPlayer