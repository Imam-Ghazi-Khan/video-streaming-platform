import { useSearchParams } from "react-router-dom"

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  )
}

export default WatchPage