const YoutubeEmbed = ({video}) => {
  return (
    <iframe
      width='350'
      height='196.875'
      src={`https://www.youtube.com/embed/${video.youtubeId}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  );
};
export default YoutubeEmbed;
