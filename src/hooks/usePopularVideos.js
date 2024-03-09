import { useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../utils/videoSlice";
import { useSelector } from "react-redux";


const usePopularVideos = () => {
    
    const dispatch = useDispatch();
    const videos = useSelector((store) => store.video?.videos);


    useEffect(()=>{
        if(!videos){
            console.log("API called")
            fetch(YOUTUBE_API_URL)
            .then(response => response.json())
            .then((data) => {
                dispatch(addVideos(data.items));
            })
            .catch(error => console.log(error));     
        }       
    },[]);
}

export default usePopularVideos;