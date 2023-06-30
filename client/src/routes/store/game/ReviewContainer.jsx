import { useState, useEffect } from "react"
import Review from "./Review"
import useUserStore from "../../../hooks/userStore"

export default function ReviewContainer({game}){

    const {user}                        = useUserStore()
    const [isReviewing, setIsReviewing] = useState(false)
    const [reviews, setReviews]         = useState([])
    const [rating, setRating]           = useState(3)
    const [title, setTitle]             = useState("")
    const [review, setReview]           = useState("")

    useEffect(() => {
        fetch("/api/reviews")
        .then(r => r.json())
        .then(data => setReviews(data))
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        fetch("/api/reviews", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                rating:      rating,
                title:       title,
                description: review,
                user_id:     user.id,
                game_id:     game.id
             })
        })
        .then(response => {
            if (response.ok)
              response.json()
            .then(review => setReviews(prevState => [...prevState, review]))
        })
        setIsReviewing(false)
    }

    const myReviews = reviews.filter(review => review.game_id == game.id)
    const reviewList = myReviews.map(review => <Review key={review.id} review={review} />) 
    
    return(
        <div className="flex flex-wrap self-start">
            <h1 className="text-[3vh] mt-[4vh]">Reviews</h1>
            <div className="break"/>
            {(!isReviewing && user) && <button className="px-[2vh] py-[1vh] rounded-sm bg-[--color2]" onClick={() => setIsReviewing(prevState => !prevState)}>Leave a Review</button>}
            <div className="break"/>
            {isReviewing &&
            <form className="flex flex-wrap">

                <label className="mb-[2vh]">Rating</label>

                <div className="break"/>

                <input
                    className = "mb-[2vh]"
                    type      = "range"
                    min       = "1"
                    max       = "5"
                    step      = "1"
                    value     = {rating}
                    onChange  = {event => setRating(event.target.value)}
                />

                <div className="break"/>

                <label>Review</label>

                <div className="break"/>

                <input
                    type     = "textarea"
                    value    = {review}
                    onChange = {event => setReview(event.target.value)}
                />

                <div className="break"/>

                <button
                    type      = "submit"
                    className = "px-[2vh] py-[1vh] ml-[1.6vw] rounded-sm bg-[--color2]"
                    onClick   = {handleSubmit}
                >
                    Post Review
                </button>
            </form>}
            <ul>
                {reviewList}
            </ul>
        </div>
    )
}