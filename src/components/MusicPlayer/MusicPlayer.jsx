import { useState } from 'react'
import Card from './Card'
import './MusicPlayer.scss'

const MusicPlayer = () => {
  const [musicNumber, setMusicNumber] = useState(2)
  return (
    <div className="container-player ">
      <div className="music-container min-h-screen">
        {/* <h2>Check Out Our Musics</h2> */}
      <main className=' rounded-lg'>
        <Card props={{ musicNumber, setMusicNumber }} />
      </main>
      </div>
    </div>
  )
}
export default MusicPlayer