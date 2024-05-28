import { useState } from "react";
import Card from "./Card";
import "./MusicPlayer.scss";

const MusicPlayer = () => {
  const [musicNumber, setMusicNumber] = useState(0);
  return (
    <div className="container-player min-h-screen">
      <div className="sub-container">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        {/* <h2>Check Out Our Musics</h2> */}

        <main className=" rounded-lg">
          <Card props={{ musicNumber, setMusicNumber }} />
        </main>
      </div>
    </div>
  );
};
export default MusicPlayer;
