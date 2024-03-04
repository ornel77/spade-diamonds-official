import { musics } from "../../utils/data";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdRewind } from "react-icons/io";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import playerContext from "../../context/playerContext";
import { useContext } from "react";

const Playlist = () => {
  const { songslist, currentSong, SetCurrent } = useContext(playerContext);

  return (
    <div className="playlist">
      <ul className="loi">
        {songslist.map((song, i) => (
          <li
            key={song.id}
            className={`songContainer transition-all duration-200 ${
              currentSong === i ? "selected" : ""
            }`}
            onClick={() => SetCurrent(i)}
          >
            <div className="tmbn_song">
              <FaPlay color="white" className="play_button"/>
            </div>
            <div className="songmeta_playlist">
              <span className="songname">{song.title} </span>
              <span className="songauthors">{song.artist} </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
