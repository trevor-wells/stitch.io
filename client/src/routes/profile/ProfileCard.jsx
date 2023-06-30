import { useState } from 'react'

export default function ProfileCard({user, setUser, LogOut}){

    const [isEditing, setIsEditing] = useState(false)
    const [username, setUsername] = useState("")

    function DeleteAccount(){
        fetch(`/api/users/${user.id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        .then(setUser(null))
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch(`api/users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username})
        })
        .then(response => {
            if (response.ok)
                response.json()
                .then((user) => setUser(user))
        })
        .then(setUsername(""))
        .then(setIsEditing(false))
    }

    return (
        <div className="shadow-lg bg-[--color3] w-[30vw] h-[52vh] rounded-md mb-[7vh]">
            <h1 className="ml-[1.6vw] mt-[1vw] mb-[2vh] text-[3.5vh] font-semibold">Profile</h1>
            <span className="flex items-center mb-[1vh]">
                <h2 className="ml-[1.6vw] text-[2vh] font-semibold">Username</h2>
                &nbsp; - &nbsp;
                <p className="text-[1.5vh]">{user.username}</p>
                {isEditing ? 
                <form onSubmit={handleSubmit}>
                    <input
                        type        = "text"
                        className   = "ml-[1.6vw] mb-[3vh] w-[10vw] h-[4vh] rounded-sm pl-[1vh]"
                        placeholder = "New Username"
                        id          = "username"
                        value       = {username}
                        onChange    = {event => setUsername(event.target.value)}
                    />
                    <button id="username"  className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]">Save</button>
                </form>:
                <button onClick={() => setIsEditing(true)} className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]">Edit Username</button>}
            </span>
            {/* <span className="flex items-center mb-[1vh]">
                <h2 className="ml-[1.6vw] text-[2vh] font-semibold">Bio</h2>
                &nbsp; - &nbsp;
                <p className="text-[1.5vh]">*bio goes here*</p>
            </span> */}
            <span className="flex items-center mb-[1vh]">
                <h2 className="ml-[1.6vw] text-[2vh] font-semibold">Profile Image</h2>
                &nbsp; - &nbsp;
                <img className="h-[10vh] w-[10vh]" src={user.avatar_url}/>
                {/* <input type="file" className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]"/> */}
            </span>
            {/* <button className="flex px-[1.8vh] py-[1.2vh] ml-[1.6vw] rounded-sm bg-[--color2]"><img className="h-[3vh] w-[3vh]" src="/brush.png"/>&nbsp; Edit Theme</button>
            <button className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]">Account Settings</button> */}
            <button onClick={LogOut} className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]">Log Out</button>
            <button onClick={DeleteAccount} className="px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]">Delete Account</button>
        </div>
    )
}