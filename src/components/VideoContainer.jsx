import { Link } from "react-router-dom";
import dummyData from "../mocks/dummyData";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {

  let videos = useSelector((store) => store.video?.videos);
  if(videos==null) videos = dummyData;

  return (
    <section className="flex justify-center items-center flex-wrap rounded-lg">
      {videos.map((video, index) => (
        <Link key={index} to={"/watch?v="+video.id}><VideoCard key={index} video={video}/></Link>
      ))}
    </section>
  );
};

export default VideoContainer;
