import React, { useState, useEffect, useRef, useContext } from "react";
import playerContext from "../../context/playerContext";
import { FaStepForward, FaStepBackward, FaVolumeDown, FaPlay, FaPause } from "react-icons/fa";
const Controls = () => {
  // Global State
  const {
    currentSong,
    songs,
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

  let audio = useRef("audio_tag"); //to change the audio

  const [statevolum, setStatevolum] = useState(0.1)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const handleVolume = (q) => {
    setStatevolum(q)
    audio.current.volume = q
  }

  return (
    <div className="controls">
      <audio ref={audio} />
      <div className="vlme">
        <span className="volum">
          <FaVolumeDown />
        </span>
        <input
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => e.target.value / 100}
          value={Math.round(statevolum * 100)}
        />
      </div>

      <div className="musicControls">
        <span className="prev" onClick={prevSong}>
          <FaStepForward />
        </span>

        <span
          className="play"
          onClick={() => {
            togglePlaying()
            toggleAudio()
          }}
        >
          <span className={!playing ? '' : 'hide'}>
            <FaPlay />
          </span>
          <span className={!playing ? 'hide' : ''}>
            <FaPause />
          </span>
        </span>

        <span className="next" onClick={nextSong}>
          <FaStepForward />
        </span>
      </div>
      
    </div>
  );
};

export default Controls;
