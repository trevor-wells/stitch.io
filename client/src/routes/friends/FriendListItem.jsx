import useUserStore from "../../hooks/userStore"

export default function FriendListItem({friend, onListItemClick}){

    const {user} = useUserStore()
    let myFriend

    if (friend.user1_id == user.id)
        myFriend = friend.user2
    else myFriend = friend.user1

    return(
        <li onClick={() => onListItemClick(myFriend)} className="flex h-[5vh] items-center border border-[--color2] text-[--color1] hover:cursor-pointer">
            <img className="ml-[1vh] h-[4vh] w-[4vh] rounded-md" src={myFriend.avatar_url}/>
            <h1 className="ml-[1vh] text-[--color1]">{myFriend.username}</h1>
        </li>
    )
}