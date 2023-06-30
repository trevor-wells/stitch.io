export default function StoreSearch({search, setSearch}){
    
    function handleChange(event){
        setSearch(event.target.value)
      }
    
    return (
        <div className="fixed z-[1000] top-[1vh] left-[70vh]">
            <input
                onChange={handleChange}
                className="rounded-sm w-[20vw] h-[4vh] pl-[1vw]"
                value={search}
                placeholder="Search for games"
            />
        </div>
    )
}