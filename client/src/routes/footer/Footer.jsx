import { Link } from "react-router-dom"
import {useState, useEffect} from "react"

export default function Footer({user}){

    const [fullscreen, setFullscreen] = useState(false)

    useEffect(() => {
      const handleFullScreenChange = () => {setFullscreen(!!document.fullscreenElement)}
      document.addEventListener('fullscreenchange', handleFullScreenChange)
    }, [])
  
    function toggleFullscreen(){
      if (fullscreen) {document.exitFullscreen()}
      else {document.documentElement.requestFullscreen()}
    }
  
    return(
    <div id="footer">
        <ul className = "nav">
            {user && <Link to="/login"><li>Friends</li></Link>}
            <li onClick={toggleFullscreen}>Fullscreen</li>
        </ul>
        
    </div>
    )
}