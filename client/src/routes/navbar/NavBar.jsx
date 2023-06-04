import { Link } from "react-router-dom"
import {useState, useEffect} from "react"

export default function NavBar(){

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
    <div id="nav-bar">
        <h1 id="title">React Clone</h1>
        <ul>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/store"><li>Store</li></Link>
            <Link to="/library"><li>Library</li></Link>
        </ul>
        <ul>
            <Link to="/signup"><li>Sign Up</li></Link>
            <Link to="/login"><li>Log In</li></Link>
        </ul>
        <button onClick={toggleFullscreen}>Fullscreen</button>
    </div>
    )
} 