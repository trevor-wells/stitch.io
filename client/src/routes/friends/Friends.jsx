import useUserStore from "../../hooks/userStore"

export default function Friends(){

    const {user} = useUserStore()

    return(
        <div className = "outlet">
            <div className = "fixed flex items-center justify-between bg-[--color2] left-0 w-[20vw] h-[6vh] top-[6vh] z-10 ">
                <img className = "w-[7vh] h-[7vh] p-[1vh]" src={user.avatar_url}/>
                <h1 className = 'text-black'>{user.username}</h1>
                <img className = "w-[7vh] h-[7vh] p-[1vw]" src = "public/search_icon.png"/>
                <img className = "w-[7vh] h-[7vh] p-[1vw]" src = "public/add_friend_icon.png"/>
            </div>
            <div className = "fixed w-[20vw] h-[88vh] bg-[--color4] left-0 bottom-0">
            </div>
            <div className = "fixed w-[80vw] h-[94vh] right-0 bottom-0 items-center justify-center z-10 bg-[--color1]">
                <h1>Click a friend to start chatting!</h1>
            </div>
        </div>
    )
}