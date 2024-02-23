import { musics } from "../../utils/data";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoMdRewind } from "react-icons/io";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
const Playlist = () => {
  return (
    <div className="playlist">
      <ul className="loi">
        {musics.map((song) => (
          <li key={song.id} className="songContainer transition-all duration-200">
            <div className="tmbn_song">
              <FaPlay color="white" />
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
