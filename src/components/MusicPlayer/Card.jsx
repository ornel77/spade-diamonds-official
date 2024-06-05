import {
  MdExpandMore,
  MdQueueMusic,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeat,
  MdPlayArrow,
  MdVolumeUp,
  MdVolumeOff,
  MdOutlinePause,
  MdOutlineShuffle,
  MdRepeatOne,
} from "react-icons/md";
import "./Card.scss";
import { musics } from "../../utils/data";
import { useEffect, useRef, useState } from "react";
import { timer } from "../../utils/timer";
import { visualizer } from "../../utils/visualizer";

const Card = ({ props: { musicNumber, setMusicNumber, setOpen } }) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showVolume, setShowVolume] = useState(false);
  const [repeat, setRepeat] = useState("repeat");

  const audioRef = useRef();
  const canvasRef = useRef()

  const handleLoadStart = (e) => {
    // const src = e.nativeEvent.srcElement.src;
    // const audio = new Audio(src);
    // audio.onloadedmetadata = function () {
    //   if (audio.readyState > 0) {
    //     setDuration(audio.duration);
    //   }
    // };
    setDuration(audioRef.current.duration)
    if (play) {
      audioRef.current.play();
    }
  };

  const handlePlayingAudio = () => {
    // visualizer(audioRef.current, canvasRef.current, play)
    if (play) {
      audioRef.current.pause();
      setPlay(false);
    } else {
      audioRef.current.play();
      setPlay(true);
    }
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    setCurrentTime(current);
  };

  const changeCurrentTime = (e) => {
    const currentTime = Number(e.target.value);
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime);
  };

  const handleNextPrev = (n) => {
    setMusicNumber((value) => {
      // next
      if (n > 0) return value + n > musics.length - 1 ? 0 : value + n;

      return value + n < 0 ? musics.length - 1 : value + n;
    });
  };

  const handleRepeat = () => {
    setRepeat((value) => {
      switch (value) {
        case "repeat":
          return "repeat_one";
          break;
        // case "repeat_one":
        //   return "shuffle";
        //   break;

        default:
          return "repeat";
          break;
      }
    });
  };

  const EndedAudio = () => {
    console.log(repeat);
    console.log("ended audio");
    switch (repeat) {
      case "repeat_one":
        return audioRef.current.play();
        break;
      // case "shuffle":
      //   return handleShuffle();
      //   break;

      default:
        return handleNextPrev(1);
        break;
    }
  };

  const handleShuffle = () => {
    const num = randomNumber();
    setMusicNumber(num);
  };

  const randomNumber = () => {
    const number = Math.floor(Math.random() * (musics.length - 1));
    if (number === musicNumber) {
      return randomNumber();
    }
    return number;
  };

  useEffect(() => {
    audioRef.current.volume = volume / 100; // 0 - 1 de base le volume est à 1
  }, [volume]);

  return (
    <section className="card w-full mx-auto shadow-md p-6 overflow-hidden">
      {/* NAV PLAYER */}
      <div className="nav w-full flex gap-1 justify-between items-center">
        <span>
          <MdExpandMore className="cursor-pointer" />
        </span>
        <span>
          Now Playing {musicNumber + 1}/{musics.length}
        </span>
        <span onClick={() => setOpen((prev) => !prev)}>
          <MdQueueMusic className="cursor-pointer" />
        </span>
      </div>

      {/* IMAGE */}
      <div className="img w-full h-[270px] flex justify-center items-center relative">
        <img
          src={musics[musicNumber].thumbnail}
          alt=""
          className={`rounded-lg w-48 h-48 object-cover`}
        />
        {/* <canvas ref={canvasRef}/> */}
      </div>

      {/* DETAILS */}
      <div className="details w-full text-center mt-4">
        <div className="title text-xl">{musics[musicNumber].title}</div>
        <div className="artist text-slate-400 text-sm">
          {musics[musicNumber].artist}
        </div>
      </div>

      {/* PROGRESS */}
      <div className="progress mt-4">
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          className="w-full h-1"
          onChange={(e) => changeCurrentTime(e)}
          style={{
            background: `linear-gradient(to right, #f4761c ${
              (currentTime / duration) * 100
            }%, #000 ${(currentTime / duration) * 100}%)`,
          }}
        />
      </div>

      {/* TIMER */}
      <div className="timer w-full flex justify-between text-sm text-slate-400">
        <span>{timer(currentTime)} </span>
        <span> {timer(duration)} </span>
      </div>

      {/* CONTROLS */}
      <div className="controls flex justify-between items-center mt-5 mb-7 ">
        <i
          onClick={handleRepeat}
          className="material-icons cursor-pointer"
          size={28}
        >
          {repeat}
        </i>
        <MdSkipPrevious
          size={32}
          className="cursor-pointer"
          onClick={() => handleNextPrev(-1)}
        />

        {/* PLAY */}
        <div
          className="play w-12 h-12 rounded-full flex justify-center items-center relative cursor-pointer"
          onClick={handlePlayingAudio}
        >
          {play ? (
            <MdOutlinePause size={28} className="play-icon" />
          ) : (
            <MdPlayArrow size={28} className="play-icon" />
          )}
        </div>
        {/* END PLAY */}

        <MdSkipNext
          size={32}
          className="cursor-pointer"
          onClick={() => handleNextPrev(1)}
        />

        {/* VOLUME */}
        <MdVolumeUp
          size={28}
          className="cursor-pointer"
          onClick={() => setShowVolume((prev) => !prev)}
        />

        <div
          className={`volume w-full h-[50px] absolute bottom-[-10%] left-0 rounded-lg flex justify-between items-center p-6 z-10 gap-1 ${
            showVolume && "show"
          }`}
        >
          <span onClick={() => setVolume((v) => (v > 0 ? 0 : 100))}>
            {volume === 0 ? (
              <MdVolumeOff />
            ) : (
              <MdVolumeUp className="cursor-pointer" />
            )}
          </span>

          <input
            type="range"
            min={0}
            max={100}
            className="volume-range w-full h-1"
            onChange={(e) => setVolume(Number(e.target.value))}
            value={volume}
            style={{
              background: `linear-gradient(to right, #f4761c ${volume}%, #000 ${volume}%)`,
            }}
          />
          <span> {volume} </span>
        </div>
      </div>

      {/* AUDIO */}
      <audio
        src={musics[musicNumber].src}
        hidden
        ref={audioRef}
        onLoadedData={handleLoadStart}
        onTimeUpdate={handleTimeUpdate}
        onEnded={EndedAudio}
      />
    </section>
  );
};

export default Card;
