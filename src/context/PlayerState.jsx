import { useReducer } from "react";
import { musics } from "../utils/data";
import playerReducer from "./playerReducer";
import playerContext from "./playerContext";

const PlayerState = ( props) => {
  const initialState = {
    currentSong: 0,
    songslist: musics,
    repeat: false,
    random: false,
    playing: false,
    audio: null
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  // set current song
  const SetCurrent = (id) => dispatch({ type: "SET_CURRENT_SONG", data: id });

  // set songs array
  const songsSet = (songsArr) => dispatch({type: 'SET_SONGS_ARRAY', data: songsArr})

  // Set playing state
  const togglePlaying = (songsArr) => dispatch({type: 'TOGGLE_PLAYING', data: state.playing ? false : true}) // or !state.playing

  // Prev song
  const prevSong = () => {
    if(state.currentSong === 0) {
      SetCurrent(state.songslist.length - 1)
    } else {
      SetCurrent(state.currentSong - 1)
    }
  }

  // Next song
  const nextSong = () => {
    if(state.currentSong === state.songslist.length - 1) {
      SetCurrent(0)
    } else {
      SetCurrent(state.currentSong + 1)
    }
  }

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songslist: state.songslist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        SetCurrent,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
};

export default PlayerState;
