import { calculateTimeAgo } from "../utils/utilityFunctions";
import { formatViews } from "../utils/utilityFunctions";

const VideoCard = ({ video }) => {
    return (
      <div className="p-4 rounded-lg  text-white">
        <div className="video cursor-pointer">
          <div className="img-container relative">
            <img className="thumbnail rounded-lg" src={video.snippet.thumbnails.medium.url} alt="" />

          </div>
          <div className="video-desc">
            <img className="channel-icon" src={video.snippet.channelThumbnailUrl} alt="" />
            <div className="desc">
              {(video.snippet.title.length>42)?<p className="title font-bold">{video.snippet.title.slice(0,38)}...</p>:<p className="title font-bold">{video.snippet.title}</p>}
              <p className="channel-name text-gray-400">{video.snippet.channelTitle}</p>
              <div className="flex text-gray-400">
                <p className="views">{`${formatViews(video.statistics.viewCount)} views`} <span className="font-bold">&#183;</span></p>
                <p className="uploaded-on">{calculateTimeAgo(video.snippet.publishedAt)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default VideoCard;

  