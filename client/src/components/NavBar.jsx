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
                    <h1 className = "font-black p-2 text-[5vh]">stitch.io</h1>
            </NavLink>
            <ul>
                <NavLink to="/store"><li className = "nav">Store</li></NavLink>
                {user ? <NavLink to="/library"><li className = "nav">Library</li></NavLink> : null}
                {user && <NavLink to="/friends"><li className = "nav">Friends</li></NavLink>}
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