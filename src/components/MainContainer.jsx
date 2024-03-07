import { useDispatch } from "react-redux";
import usePopularVideos from "../hooks/usePopularVideos"
import dummyData from "../mocks/dummyData"
import VideoContainer from "./VideoContainer"
import { addVideos } from "../utils/videoSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  usePopularVideos();

  return (
    <div className="col-span-11">
        <VideoContainer/>
    </div>
  )
}

export default MainContainer