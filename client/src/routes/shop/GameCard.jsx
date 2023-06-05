export default function GameCard({game}){
    return(
        <div className = 'game-card'>
            <h1>{game.title}</h1>
            <img src={game.image_url}/>
            <h1>{game.description}</h1>
        </div>
    )
}