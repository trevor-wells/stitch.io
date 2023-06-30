import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import useUserStore from "../hooks/userStore"

export default function NavBar(){

    const {user} = useUserStore()

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
        <div className =  'z-[100] h-[6vh] fixed flex items-center w-screen bg-black'>
            <NavLink className = "flex items-center ml-[1vw]" to="/">
                    <img className = "w-[5vh] h-[5vh]" src="/logo_white.png"/>
                    <h1 className = "font-black pl-[0.5vw] text-[5vh]">stitch.io</h1>
            </NavLink>
            <ul>
                <NavLink className = "nav" to="/store"><li>Store</li></NavLink>
                {user ? <NavLink className = "nav" to="/library"><li >Library</li></NavLink> : null}
                {user && <NavLink className = "nav" to="/friends"><li>Friends</li></NavLink>}
                <li className = "nav" onClick={toggleFullscreen}>Fullscreen</li>  
            </ul>
            <ul className = "fixed top-[.5vh] right-[5vh]"> 
                {user ?
                (<>
                    <NavLink className = "flex items-center" to="/profile">
                        <img className = "w-[5vh] h-[5vh] mr-[1vw]" src={user.avatar_url}/>
                        <h1>{user.username}</h1>
                    </NavLink>
                 </>) :
                <NavLink className = "flex items-center" to="/login"><li>Log In</li></NavLink>}
            </ul>
        </div>
    )
} 