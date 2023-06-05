import { NavLink } from "react-router-dom"
import useUserStore from "../../hooks/userStore"

export default function NavBar(){

    const {user, setUser} = useUserStore()

    return(
        <div id="nav-bar">
            {/* <img src="../../assets/icons/stitch_orange.png"/> */}
            <h1 id="title">stitch.io</h1>
            <ul className="nav">
                <NavLink to="/"><li>Store</li></NavLink>
                {user ? <NavLink to="/library"><li>Library</li></NavLink> : null}
                <NavLink to="/about"><li>About</li></NavLink>
            </ul>
            <ul className="nav"> 
                {user ?
                (<>
                    <NavLink id = "profile-nav" to="/profile">
                        <img id="mini-avatar" src={user.avatar_url}/>
                        <h1>{user.username}</h1>
                    </NavLink>
                 </>) :
                <NavLink to="/login"><li>Log In</li></NavLink>}
            </ul>
        </div>
    )
} 