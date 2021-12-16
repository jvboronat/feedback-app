import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedBackList({items}) {

    //console.log(items);

    if(!items || items.lenght ===0) {
        return <p>No FeedBack Yet</p>
    }

    return (
        <div  className="feedback-list"> 
            {items.map((item)=> 
                {return (<FeedbackItem key={item.id} item={item}/> )  })
             }
        </div>
    )
}

FeedBackList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }
        )
    )
}

export default FeedBackList
