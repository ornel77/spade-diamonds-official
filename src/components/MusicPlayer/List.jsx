import "./List.scss";
import { MdQueueMusic, MdOutlineClose } from "react-icons/md";

import { musics } from "../../utils/data";
import { useEffect, useState } from "react";
import { timer } from "../../utils/timer";

const List = ({ musicNumber, setMusicNumber, open, setOpen }) => {
  
  return (
    <div className={`list ${open ? "show" : ""}`}>
      <div className="header">
        <div>
          <MdQueueMusic className=" inline" size={28} />
          <span>Music List</span>
        </div>
        <MdOutlineClose size={28} onClick={() => setOpen(false)} className="cursor-pointer"/>
      </div>
      <ul>
        {musics.map((music, index) => (
          <li
            key={music.id}
            className={`${musicNumber === index ? "playing" : ""}`}
            onClick={() => setMusicNumber(index)}
          >
            <div className="row">
              
              <span>{music.title} </span>
              <p> {music.artist} </p>
            </div>
            <Duration music={music} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

const Duration = ({music}) => {
  const [duration, setDuration] = useState("00:00")
  useEffect(() => {
    const audio = new Audio(music.src)
    // Occurs when the duration and dimensions of the media have been determined.
    audio.onloadedmetadata = function() {
      if(audio.readyState > 0) {
        setDuration(audio.duration)
      }
    }
  }, [])
  return (
    <span className="duration"> {timer(duration)} </span>
    
  )
}