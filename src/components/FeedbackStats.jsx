import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackStats({items}) {


    const {feedback} = useContext(FeedbackContext)
    
    const calculateAverage = () => {
        

        let total = feedback.reduce ((acc, item) => {
            return acc + item.rating
        },0
        )

        // Regular 
        return (total / feedback.length).toFixed(1).replace(/[.,]0$/,'')
    }

    let average = calculateAverage();

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>

            <h4>Average Rating { isNaN(average)? 0 : average}</h4>            
        </div>
    )
}



export default FeedbackStats
