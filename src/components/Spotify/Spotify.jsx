const Spotify = () => {
  return (
    <section className="container">
      <h2>Spotify</h2>
      {/* <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5eIduUEFeXYhFFqPKWcr1Y?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/5eIduUEFeXYhFFqPKWcr1Y?utm_source=generator"
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  )
}
export default Spotify