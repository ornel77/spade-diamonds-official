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
      SetCurrent(state.songslist.length - 1) // go to the last
    } else {
      SetCurrent(state.currentSong - 1) // go to previous song
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

  // repeat and random
  const toggleRepeat = (od) => dispatch({ type: "TOGGLE_REPEAT", data: !state.repeat })
  const toggleRandom = (od) => dispatch({ type: "TOGGLE_RANDOM", data: !state.random })

  // end of song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return SetCurrent(~~(Math.random() * state.songslist.length)) // the double tilde is math.floor()
    } else {
      if (state.repeat) {
        nextSong()
      } else if (state.currentSong === state.songslist.length - 1) {
        return
      } else {
        nextSong()
      }
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
        nextSong,
        prevSong,
        SetCurrent,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songsSet,
      }}
    >
      {props.children}
    </playerContext.Provider>
  );
};

export default PlayerState;
