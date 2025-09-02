const Spotify = () => {
  return (
    <div className="md:flex justify-center items-center md:h-[80vh] 2xl:h-min 2xl:mb-20">
      <section className="container">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/5eIduUEFeXYhFFqPKWcr1Y?utm_source=generator"
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div>
          <p className="text-2xl text-center">And also on :</p>
          <div className="flex w-full  items-center justify-center my-6 gap-5">
            <a
              href="https://www.deezer.com/fr/artist/279882841"
              className="bg-white rounded-md block w-44 px-2 hover:bg-opacity-80 transition-all duration-300"
              target="_blank"
            >
              <img src="/deezer.svg" alt="" className="h-16 object-contain " />
            </a>
            <a
              href="https://music.apple.com/us/artist/spade-diamonds/1765697081"
              className="bg-white rounded-md block w-44 px-2 hover:bg-opacity-80 transition-all duration-300"
              target="_blank"
            >
              <img src="/apple.webp" alt="" className="h-16 object-contain " />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Spotify;
