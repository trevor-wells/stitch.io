import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useUserStore from "../../hooks/userStore"

export default function Profile(){

    const {user, setUser} = useUserStore()
    const navigate = useNavigate()

    function logOut(){
        fetch("/api/logout", {
            method: "DELETE"
        })
        .then(() => setUser(null))
    }

    useEffect(() => {
        if (!user)
            navigate("/")
      }, [user])
    
    if (user)
        return(
            <div id = "profile-screen">
                <h1>{user.username}</h1>
                <img id="profile-image" src={user.avatar_url}/>
                <button onClick ={logOut}>Log Out</button>
            </div>
        )
}