import usePopularVideos from "../hooks/usePopularVideos"
import VideoContainer from "./VideoContainer"


const MainContainer = () => {
  usePopularVideos();

  return (
    <div className="col-span-11">
        <VideoContainer/>
    </div>
  )
}

export default MainContainer