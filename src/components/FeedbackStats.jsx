import PropTypes from 'prop-types'

function FeedbackStats({items}) {

    const calculateAverage = () => {
        

        let total = items.reduce ((acc, item) => {
            return acc + item.rating
        },0
        )
        // Regular 
        return (total / items.length).toFixed(1).replace(/[.,]0$/,'')
    }

    let average = calculateAverage();

    return (
        <div className='feedback-stats'>
            <h4>{items.length} Reviews</h4>

            <h4>Average Rating { isNaN(average)? 0 : average}</h4>            
        </div>
    )
}

FeedbackStats.propTypes = {
    items: PropTypes.array.isRequired,
}

export default FeedbackStats
