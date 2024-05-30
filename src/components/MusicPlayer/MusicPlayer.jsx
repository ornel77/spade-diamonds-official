import { useState } from "react";
import Card from "./Card";
import "./MusicPlayer.scss";

const MusicPlayer = () => {
  const [musicNumber, setMusicNumber] = useState(0);
  return (
    <div className="container-player rounded-lg w-[360px] relative">
      {/* <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div> */}
      <main className=" rounded-lg">
        <Card props={{ musicNumber, setMusicNumber }} />
      </main>
    </div>
  );
};
export default MusicPlayer;
