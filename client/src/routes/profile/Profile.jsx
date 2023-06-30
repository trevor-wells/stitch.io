import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useUserStore from "../../hooks/userStore"
import ProfileCard from "./ProfileCard"

export default function Profile(){

    const {user, setUser} = useUserStore()
    const navigate = useNavigate()

    function LogOut(){
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
            <div className = "outlet">
                <ProfileCard user={user} setUser={setUser} LogOut={LogOut}/>
            </div> 
        )
}