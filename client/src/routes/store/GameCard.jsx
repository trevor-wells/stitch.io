import { Link } from 'react-router-dom'

export default function GameCard({game}){
    return(
        <Link to={`/store/${game.id}`}>
            <div className = 'flex bg-[--color3] flex-col justify-around items-center text-[1vh] w-[18vw] h-[20vw] m-[1vw] rounded-md'>
                <h1 className="text-[3vh]">{game.title}</h1>
                <img className = 'w-[15vw] h-[15vw] rounded-md' src={game.image_url}/>
            </div>
        </Link>
    )
}