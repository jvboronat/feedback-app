//import {useState} from 'react'

import Card from './shared/Card'
import { PropTypes } from "prop-types"

function FeedbackItem({item}) {
    //const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of Feedback Item')

/*     const hadcleClick = () => {

        setRating((prev) => {
            return prev + 1
        })
    }
 */
    return (
        <Card reverse={false}> 
            <div className="num-display"> {item.rating}</div>
            <div className="text-display">{item.text}  </div>
            
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
