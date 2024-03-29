import  { useState, useEffect, useRef, useContext } from 'react';
import playerContext from '../../context/playerContext';
import {
  FaStepForward,
  FaStepBackward,
  FaVolumeDown,
  FaPlay,
  FaPause,
  FaRandom,
  FaRedoAlt,
} from 'react-icons/fa';
const Controls = () => {
  // Global State
  const {
    currentSong,
    // songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(playerContext);

  const audio = useRef('audio_tag')

  // self State
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause()

  const handleVolume = (q) => {
    setStateVolum(q)
    audio.current.volume = q
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

  useEffect(() => {
    audio.current.volume = statevolum
    if (playing) {
      toggleAudio()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])
  return (
    <div className='controls'>
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        ref={audio}
        type='audio/mpeg'
        preload='true'
        src={songslist[currentSong].songSrc}
      />
      <div className='vlme'>
        <span className='volum'>
          <FaVolumeDown />
        </span>
        <input
          type='range'
          name='volBar'
          id='volBar'
          onChange={(e) => handleVolume(e.target.value / 100)}
          value={Math.round(statevolum * 100)}
        />
      </div>

      <div className='musicControls'>
        <span className='prev' onClick={prevSong}>
          <FaStepBackward />
        </span>

        <span
          className='play'
          onClick={() => {
            togglePlaying();
            toggleAudio();
          }}
        >
          <span>
            {
              !playing ? <FaPlay /> : <FaPause />
            }
           
          </span>
          {/* <span className={!playing ? 'hide' : ''}>
            <FaPause />
          </span> */}
        </span>

        <span className='next' onClick={nextSong}>
          <FaStepForward />
        </span>
      </div>

      <div className='progressb'>
        <div className='songMeta'>
          <span className='songtitle'>{songslist[currentSong].title}</span>
          <span className='songartistName'>
            {songslist[currentSong].artist}
          </span>
        </div>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type='range'
          name='progresBar'
          id='prgbar'
        />
        <span className='currentT'>{fmtMSS(currentTime)}</span>/
        <span className='totalT'>{fmtMSS(dur)}</span>
      </div>
      <div className='plsoptions'>
        <span
          onClick={toggleRandom}
          className={'random ' + (random ? 'active' : '')}
        >
          <FaRandom />
        </span>
        <span
          onClick={toggleRepeat}
          className={'repeat ' + (repeat ? 'active' : '')}
        >
          <FaRedoAlt />
        </span>
      </div>
    </div>
  );
};

export default Controls;
