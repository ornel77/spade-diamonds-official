
// import Musics from '../components/Musics/Musics'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'

import '../components/MusicPlayer/MusicPlayer.scss'

const MusicScreen = () => {
  return (
    <div className='large-container min-h-screen flex justify-center items-center flex-col gap-7'>
      <h2 className=' text-xl'>Check Out Our Musics</h2>
      
      <MusicPlayer />
    </div>
  )
}

export default MusicScreen