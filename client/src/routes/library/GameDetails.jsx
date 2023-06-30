export default function GameDetails({game}){
    
    return(
        <div className = "fixed flex w-[80vw] h-[94vh] right-0 bottom-0 text-center justify-center z-10 bg-[--color3] items-center">
            {game ?
            <div>
                <h1 className="text-[10vh]">{game.title}</h1>
                {/* <a
                    className="bg-[--color2] p-[1vw]"
                    href="/logo_white.png"
                    download
                >
                    Download stitch icon
                </a> */}
                {game.id == 5 && <iframe 
                    className="ml-[3vw]"
                    src="https://i.simmer.io/@aspiringluddite/flappy-bird"
                    style={{width:"375px", height:"667px"}}
                />}
            </div> :
            <h1 className="text-[10vh]">Pick a game!</h1>}
        </div>
    )
}