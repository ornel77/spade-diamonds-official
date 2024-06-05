import VideoList from "../components/Videos/VideoList"


const VideoScreen = () => {
  return (
    <div className='lg-container'>
      <h2 className="text-center text-2xl mb-8">Videos</h2>

      <VideoList />
    </div>
  )
}

export default VideoScreen