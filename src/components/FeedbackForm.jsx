import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button"

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')  

    const handleTextChange  = (e) => {
        if (e.target.value.length >= 10) {
            setBtnDisabled(false)
            setMessage('')            
        }
        else
        {
            if (e.target.value == 0)
                setMessage('')
            else
                setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }
        
        setText(e.target.value)
    }

    return (
        <Card>
            <form action="">
                <h2>How would you rate your service with us?</h2>
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
