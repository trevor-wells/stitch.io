export default function GameDetails({game}){
    
    return(
        <div className = "fixed flex w-[80vw] h-[94vh] right-0 bottom-0 text-center justify-center z-10 bg-[--color3] items-center">
            {game ? <h1 className="text-[10vh]">{game.title}</h1> : <h1 className="text-[10vh]">Pick a game!</h1>}
        </div>
    )
}