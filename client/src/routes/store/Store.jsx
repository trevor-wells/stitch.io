import { useState, useEffect } from "react"
import GameCard from "./GameCard"

export default function Shop(){

    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("/api/games")
        .then(response => response.json())
        .then(data => setGames(data))
    }, [])

    const gameCards = games.map(game => <GameCard key = {game.id} game = {game}/>)

    return(
        <div className = "outlet">
            {gameCards}
        </div>
    )
}
