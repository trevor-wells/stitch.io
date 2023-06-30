import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useUserStore from "../../../hooks/userStore"
import ReviewContainer from "./ReviewContainer"

export default function StoreGame(){

    const [game, setGame] = useState(null)
    const {user} = useUserStore()
    const params = useParams()

    useEffect(() => {
        fetch(`/api/games/${params.id}`)
        .then(r => r.json())
        .then(data => setGame(data))
    }, [params.id])

    if (!game)
        return <h1 className="outlet">Not Found!</h1>

    function addToLibrary(){
        fetch("/api/libraries", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                user_id: user.id,
                game_id: game.id
            })
        })
    }

    return (
        <>
            <div className = "fixed w-[100vw] bg-[--color2] h-[94vh] top-[6vh] z-[-1]"/>
            {/* <img className = "fixed w-[100vw] h-[94vh] top-[6vh] z-[-1]" src="https://nintendoeverything.com/wp-content/uploads/Zelda-Tears-Kingdom-screens.jpg" /> */}
            <div className="absolute flex flex-wrap justify-center items-start left-[20vw] top-[6vh] bg-[--color1] h-[fit-content] py-[2vh] w-[60vw] z-[0]">
                <h1 className="text-[5vh]">{game.title}</h1>
                <img className="w-[50vw]" src={game.image_url}/>
                {user && <button className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]" onClick={addToLibrary}>Add to Library</button>}
                <div className="break"/>
                <p className="text-center ml-[4vw] mr-[4vw]">{game.description}</p>
                <div className="break"/>
                <ReviewContainer 
                    className="self-start"
                    game={game}
                />
            </div>
        </>
    )
    }