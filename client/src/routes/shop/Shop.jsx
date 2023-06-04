import { useState, useEffect } from "react"
import GameCard from "./GameCard"

export default function Shop(){

    const [games, setGames] = useState([])
    useEffect(() => {
        fetch("http://localhost:5555/games")
        .then(response => response.json())
        .then(data => setGames(data))
    }, [])
    console.log(games)
    const gameCards = games.map(game => <GameCard key = {game.id} game = {game}/>)

    return(
        <div id = 'shop-screen'>
            {gameCards}
        </div>
    )
}
