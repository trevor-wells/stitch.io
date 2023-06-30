import React from "react"
import { useState, useEffect } from "react"
import GameCardContainer from "./GameCardContainer"
// import StoreFilter from "./StoreFilter"


export default function Shop(){

    const [games, setGames] = useState([])
    const [search, setSearch] = React.useState("")

    useEffect(() => {
        fetch("/api/games")
        .then(r => r.json())
        .then(data => setGames(data))
    }, [])

    const gamesToDisplay = games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            {/* <StoreFilter /> */}
            <GameCardContainer search={search} setSearch={setSearch} games={gamesToDisplay}/>
        </>
    )
}
