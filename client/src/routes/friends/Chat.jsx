export default function Chat({friend}){
    return(
        <div>
            <div className = "fixed w-[80vw] h-[94vh] right-0 bottom-0 text-center justify-center z-10 bg-[--color3] items-end">
                {friend ?
                <h1>{friend.username}</h1> :
                <h1>Click a friend to start chatting!</h1>}
            </div>
        </div>
    )
}