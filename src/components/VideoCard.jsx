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
              {(video.snippet.title.length>42)?<p className="title">{video.snippet.title.slice(0,42)}...</p>:<p className="title">{video.snippet.title}</p>}
              <p className="channel-name">{video.snippet.channelTitle}</p>
              <p className="views">{`${video.statistics.viewCount} views`} &#183;</p>
              <p className="uploaded-on">{video.snippet.publishedAt}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default VideoCard;

  