export default function StoreFilter(){
    
    function toggleFilter({filter, setFilter}){
        setFilter(prevFilter => !prevFilter)
    }

    // genreButtons = 

    return(
        <div className = "block pt-[1vw] pl-[1vw] text-[--color1] fixed w-[20vw] h-[94vh] bg-[--color4] left-0 bottom-0 border border-[--color2]">
            <h1 className="text-[--color1] text-[3vh] font-bold mb-[0.5vw]">Filter</h1>
            <button className="py-[1vw] accordion">► Platform</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
            <button className="py-[1vw] accordion">► Genre</button>
            <div class="panel">
                <p>Lorem ipsum...</p>
            </div>
        </div>
    )
}