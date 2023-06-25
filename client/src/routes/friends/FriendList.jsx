import useUserStore from "../../hooks/userStore"
import FriendListItem from "./FriendListItem"
export default function FriendList({friends, onListItemClick}){

    const {user} = useUserStore()

    const myFriends = friends.filter(friend => friend.user1_id == user.id || friend.user2_id == user.id)
    const acceptedFriends = myFriends.filter(friend => friend.friendship_status == 'Accepted')
    const friendItems = acceptedFriends.map(friend => <FriendListItem key={friend.id} friend={friend} onListItemClick={onListItemClick}/>)

    return(
        <>
            <div className = "fixed flex items-center justify-between bg-[--color2] left-0 w-[20vw] h-[6vh] top-[6vh] z-10 ">
                <img className = "rounded-sm w-[7vh] h-[7vh] p-[1vh]" src={user.avatar_url}/>
                <h1 className  = 'text-black'>{user.username}</h1>
                <img className = "hover:cursor-pointer w-[7vh] h-[7vh] p-[1vw]" src = "/search_icon.png"/>
                <img className = "hover:cursor-pointer w-[7vh] h-[7vh] p-[1vw]" src = "/add_friend_icon.png"/>
            </div>
            <div className = "fixed w-[20vw] h-[88vh] bg-[--color4] left-0 bottom-0 border border-[--color2]">
                <ul>
                    {friendItems}
                </ul>
            </div>
        </>
    )
}