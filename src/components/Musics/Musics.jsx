import React from 'react'
import './main.scss'
import './input.scss'
import HeaderPlayer from './HeaderPlayer'
import Actions from './Actions'
import Playlist from './Playlist'
import Controls from './Controls'
import PlayerState from '../../context/PlayerState'


const Musics = () => {
  return (
    <PlayerState>
      <div className="audioplayer">
        <div className="container">
            <HeaderPlayer />
            <Actions />
            <Playlist />
        </div>
        <Controls />
    </div>
    </PlayerState>
    
  )
}

export default Musics