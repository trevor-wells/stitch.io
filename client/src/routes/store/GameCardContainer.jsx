import GameCard from "./GameCard"
import StoreSearch from "./StoreSearch"

export default function GameCardContainer({search, setSearch, games}){

    const gameCards = games.map(game => <GameCard key = {game.id} game = {game}/>)

    return(
        <div className = "flex flex-row flex-wrap justify-start items-start absolute h-[94vh] w-[100vw] top-[6vh]">
            <StoreSearch
                search={search}
                setSearch={setSearch}
            />
            <div className="break"/>
            {gameCards}
        </div>
    )
}