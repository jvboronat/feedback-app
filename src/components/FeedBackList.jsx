import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion, animatePresence, AnimatePresence} from 'framer-motion'


function FeedBackList({items, handleDelete}) {

    //console.log(items);

    if(!items || items.lenght ===0) {
        return <p>No FeedBack Yet</p>
    }

    return (
        <div  className="feedback-list"> 
        <AnimatePresence>
            {items.map((item)=> 
                {return (
                    <motion.div
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                    >
                        <FeedbackItem handleDelete={handleDelete} key={item.id} item={item}/> 
                    </motion.div>
                )  })
             }
        </AnimatePresence>
        </div>
    )
}

FeedBackList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }
        )
    )
}

export default FeedBackList
