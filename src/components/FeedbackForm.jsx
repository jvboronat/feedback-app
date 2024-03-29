import { useContext, useEffect } from "react"
import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')  

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    }, [feedbackEdit])

    const handleTextChange  = (e) => {
        if (e.target.value.length >= 10) {
            setBtnDisabled(false)
            setMessage('')            
        }
        else
        {
            if (e.target.value === 0)
                setMessage('')
            else
                setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }
        
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim().length > 10)
        {
            const newFeedback = {
                text,
                rating
            }

            if (feedbackEdit.edit=== true) {
                updateFeedback({
                    id: feedbackEdit.item.id,
                    text,
                    rating
                })
            }
            else {

                addFeedback(newFeedback)
            }

            setText('')
            setRating(10)
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select ={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Write a review" 
                        onChange={handleTextChange} 
                        value={text}
                    />

                    <Button type="submit" isDisable={btnDisabled}> Send</Button>

                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
