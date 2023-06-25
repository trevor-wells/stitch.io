import GameListItem from "./GameListItem"

export default function GameList({user, library, onListItemClick}){
    
    const myLibrary = library.filter(libraryItem => libraryItem.user_id == user.id)
    const gameItems = myLibrary.map(libraryItem => <GameListItem key={libraryItem.id} game={libraryItem.game} onListItemClick={onListItemClick}/>)
    
    return (
        <>
            <div className = "fixed flex items-center justify-between bg-[--color2] left-0 w-[20vw] h-[6vh] top-[6vh] z-10 ">
                <img className = "w-[7vh] h-[7vh] p-[1vh]" src={user.avatar_url}/>
                <h1 className = 'text-black'>{user.username}</h1>
                <img className = "w-[7vh] h-[7vh] p-[1vw]" src = "public/search_icon.png"/>
                <img className = "w-[7vh] h-[7vh] p-[1vw]" src = "public/add_friend_icon.png"/>
            </div>
            <div className = "fixed w-[20vw] h-[88vh] bg-[--color4] left-0 bottom-0">
                <ul>
                    {gameItems}
                </ul>
            </div>
        </>
    )
}