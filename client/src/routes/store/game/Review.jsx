export default function Review({review}){

    function numberOfStars(rating){
        let stars = ""
        for (let i in [...Array(rating).keys()])
            stars = stars + "★"
        for (let i in [...Array(5 - rating).keys()])
            stars += "☆"
        return stars
    }

    return(
        <li className="border h-[20vh] w-[30vw] rounded-sm border-black flex flex-wrap bg-[--color2]">
            <img className="ml-[1vh] mt-[1vh] w-[6vh] h-[6vh] rounded-md" src={review.user.avatar_url}/>
            <h1 className="ml-[1vh] mt-[2vh]">{review.user.username}</h1>
            <div className="break"/>
            <h2 className="ml-[1vh]">{numberOfStars(review.rating)}</h2>
            <div className="break"/>
            <p className="ml-[1vh]">{review.description}</p>
        </li>
    )
}