import { Link } from 'react-router-dom'

export default function GameCard({game}){
    return(
        <Link to={`/store/${game.id}`}>
            <div className = 'bg-[--color3] flex flex-col justify-around items-center text-[1vh] w-[15vw] h-[15vw] m-[1vw] rounded-md'>
                <h1>{game.title}</h1>
                <img className = 'w-[10vw] h-[10vw]' src={game.image_url}/>
            </div>
        </Link>
    )
}