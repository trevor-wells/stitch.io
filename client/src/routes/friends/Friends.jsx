import { useState, useEffect } from "react"
import useUserStore from "../../hooks/userStore"
import FriendList from "./FriendList"
import Chat from "./Chat"

export default function Friends(){

    const {user} = useUserStore()

    const [friends, setFriends] = useState([])
    const [friendToDisplay, setFriendToDisplay] = useState(null)

    useEffect(() => {
        fetch("/api/friends")
        .then(response => response.json())
        .then(data => setFriends(data))
    }, [])

    function handleListItemClick(friend){
        setFriendToDisplay(friend)
    }

    

    return(
        <>
            <FriendList friends={friends} onListItemClick={handleListItemClick}/>
            <Chat friend={friendToDisplay}/>
        </>
    )
}