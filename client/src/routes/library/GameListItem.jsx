export default function GameListItem({game, onListItemClick}){
    return(
        <li onClick={() => onListItemClick(game)} className="border border-[--color2] text-[--color1] hover:cursor-pointer">{game.title}</li>
    )
}