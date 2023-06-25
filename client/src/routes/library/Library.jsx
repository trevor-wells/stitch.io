import { useState, useEffect } from "react"
import useUserStore from "../../hooks/userStore"
import GameList from "./GameList"
import GameDetails from "./GameDetails"

export default function Library(){

  const { user } = useUserStore();
  // const {fullScreen, setFullScreen} = useState(false)
  const [library, setLibrary] = useState([])
  const [gameToDisplay, setGameToDisplay] = useState(null)

  useEffect(() => {
    fetch("/api/libraries")
    .then(r => r.json())
    .then(data => setLibrary(data))
  }, [])

  function handleItemClick(game){
    setGameToDisplay(game)
  }
  // function goFullscreen(id) {
  //     var element = document.getElementById(id);
  //     if (element.mozRequestFullScreen) {
  //       element.mozRequestFullScreen();
  //     } else if (element.webkitRequestFullScreen) {
  //       element.webkitRequestFullScreen();
  //     }
  // }

  return(
      <div className = "outlet">
          <GameList user={user} library={library} onListItemClick={handleItemClick}/>
          <GameDetails game={gameToDisplay}/>
      </div>
  )
}