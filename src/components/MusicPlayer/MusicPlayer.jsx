import { useState } from "react";
import Card from "./Card";
import "./MusicPlayer.scss";
import List from "./List";
import { useEffect } from "react";

const MusicPlayer = () => {
  const [musicNumber, setMusicNumber] = useState(0);
  const [open, setOpen] = useState(false)

  // Disable Right Click
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  return (
    <div className="container-player rounded-lg w-[360px] relative">
      {/* <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div> */}
      <main className=" rounded-lg">
        <Card props={{ musicNumber, setMusicNumber, setOpen }} />
        <List open={open} setOpen={setOpen} musicNumber={musicNumber} setMusicNumber={setMusicNumber} />
      </main>
    </div>
  );
};
export default MusicPlayer;
