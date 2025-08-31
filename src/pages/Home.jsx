import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Members from "../components/Members/Members";
import Shows from "../components/ShowsNew/Shows";
import Spotify from "../components/Spotify/Spotify";
import GodotGame from "../components/GodotGame";

function Home() {
  return (
    <div className="pt-24">
      {/* <Hero /> */}
      {/* <GodotGame /> */}
      <Spotify />
      <Shows />
      <About />
      <Members />
    </div>
  );
}

export default Home;
