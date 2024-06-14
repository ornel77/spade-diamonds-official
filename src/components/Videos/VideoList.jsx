import { videos } from '../../utils/data';
import YoutubeEmbed from './YoutubeEmbed';

const VideoList = () => {
  return (
    <div className='flex flex-wrap justify-center gap-5 mb-6 h-[90vh] mt-8'>
      {videos.map((video) => (
        <YoutubeEmbed key={video.id} video={video} />
      ))}
    </div>
  );
};
export default VideoList;
