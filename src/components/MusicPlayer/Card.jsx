import { MdExpandMore, MdQueueMusic, MdSkipNext, MdSkipPrevious,MdRepeat, MdPlayArrow, MdVolumeUp } from "react-icons/md";
import "./Card.scss";
import { musics } from "../../utils/data";



const Card = ({ props: { musicNumber, setMusicNumber } }) => {
  console.log(musics);
  return (
    <section className="card w-full mx-auto shadow-md p-6 overflow-hidden">
        {/* NAV PLAYER */}
      <div className="nav w-full flex gap-1 justify-between items-center">
        <span>
          <MdExpandMore/>
        </span>
        <span>
          Now Playing {musicNumber + 1}/{musics.length}
        </span>
        <span>
            <MdQueueMusic />
        </span>
      </div>

      {/* IMAGE */}
      <div className="img w-full h-[270px] flex justify-center items-center relative">
        <img src={musics[musicNumber].thumbnail} alt="" className="rounded-full w-48 h-48 object-cover" />
      </div>

      {/* DETAILS */}
      <div className="details w-full text-center mt-4">
        <div className="title text-xl">{musics[musicNumber].title}</div>
        <div className="artist text-slate-400 text-sm">{musics[musicNumber].artist}</div>
      </div>

      {/* PROGRESS */}
      <div className="progress mt-4">
        <input type="range" name="" id="" min={0} max={100} className="w-full h-1"/>
      </div>

      {/* TIMER */}
      <div className="timer w-full flex justify-between text-sm text-slate-400">
        <span>00:00</span>
        <span>03:45</span>
      </div>

      {/* CONTROLS */}
      <div className="controls flex justify-between items-center mt-5 mb-7 ">
        <MdRepeat className="cursor-pointer"/>
        <MdSkipPrevious size={32} className="cursor-pointer"/>

        {/* PLAY */}
        <div className="play w-12 h-12 rounded-full flex justify-center items-center relative cursor-pointer">
            <MdPlayArrow size={28} className="play-icon"/>
        </div>
        {/* END PLAY */}

        <MdSkipNext size={32} className="cursor-pointer" />

        {/* VOLUME */}
        <MdVolumeUp className="cursor-pointer" />
 
        <div className="volume w-full h-[50px] absolute bottom-[-10%] left-0 rounded-lg flex justify-between items-center p-6 z-10 gap-1">
            <MdVolumeUp className="cursor-pointer" />
            <input type="range" min={0} max={100} className="volume-range w-full h-1" />
            <span>50</span>
        </div>
      </div>

      {/* AUDIO */}
      <audio src={musics[musicNumber].src} hidden></audio>
    </section>
  );
};

export default Card;
