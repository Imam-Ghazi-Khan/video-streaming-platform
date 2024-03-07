
const Header = () => {
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
      />
      <span className="text-blue-200 material-symbols-outlined py-1 px-2 border-gray-500 text-2xl cursor-pointer border rounded-r-full">search</span>
    </div>
    <div className="flex items-center col-span-1">
      <span className="text-4xl mx-2 material-symbols-outlined items-center text-blue-200">account_circle</span>
    </div>
  </nav>
  )
}

export default Header