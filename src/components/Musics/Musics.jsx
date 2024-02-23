import React from 'react'
import './main.scss'
import './input.scss'
import HeaderPlayer from './HeaderPlayer'
import Actions from './Actions'
import Playlist from './Playlist'
import Controls from './Controls'


const Musics = () => {
  return (
    <div className="audioplayer">
        <div className="container">
            <HeaderPlayer />
            <Actions />
            <Playlist />
        </div>
        <Controls />
    </div>
  )
}

export default Musics