import { useEffect } from "react";
import { useState } from "react"
import { YOUTUBE_SEARCH_API_URL } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();

  /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    },200);
    
    return () => {
      clearTimeout(timer);
    };
  },[searchQuery])


  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API_URL+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]:json[1],
      })
    );
  };

  return (
    <nav className="grid grid-flow-col items-center justify-between py-4 font-sans ">
    <div className="flex items-center">
      {/* <span className="material-symbols-outlined ml-2 text-2xl cursor-pointer text-blue-200">menu</span> */}
      <div className="flex items-center text-blue-300"> 
        <span className="ml-4 text-4xl material-symbols-outlined ">play_circle</span>
        <p className="md:block text-3xl hidden">Vibe&Chill</p>
      </div>
    </div>
    <div className="flex items-center col-span-10 justify-center">
      <input
        id="searchInput"
        type="text"
        className="w-1/2 py-2 px-4 rounded-l-full border border-gray-500 bg-black focus:outline-none text-white"
        placeholder="Search"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
      />
      <span className="text-blue-200 material-symbols-outlined py-1 px-2 border-gray-500 text-2xl cursor-pointer border rounded-r-full">search</span>
      {showSuggestions && (
          <div className="text-white absolute top-16 z-10 py-2 px-2 w md:w-[37rem] w-60 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        
    </div>
 
    <div className="flex items-center col-span-1">
      <span className="text-4xl mx-2 material-symbols-outlined items-center text-blue-200">account_circle</span>
    </div>
  </nav>
  )
}

export default Header