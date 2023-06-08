import { NavLink } from 'react-router-dom'

export default function GameCard({game}){
    return(
        <NavLink to="/shop/game.title">
            <div className = 'bg-[--accent-color] flex flex-col justify-around items-center text-[1vh] w-[15vw] h-[15vw] m-[1vw] rounded-md'>
                <h1>{game.title}</h1>
                <img className = 'w-[10vw] h-[10vw]' src={game.image_url}/>
                <h1>{game.description}</h1>
            </div>
        </NavLink>
    )
}