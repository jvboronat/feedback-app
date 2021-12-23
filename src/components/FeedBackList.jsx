import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import {motion, animatePresence, AnimatePresence} from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"


function FeedBackList({handleDelete}) {

    const {feedback} = useContext(FeedbackContext)

    //console.log(feedback);

    if(!feedback || feedback.lenght ===0) {
        return <p>No FeedBack Yet</p>
    }

    return (
        <div  className="feedback-list"> 
        <AnimatePresence>
            {feedback.map((item)=> 
                {return (
                    <motion.div
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                    >
                        <FeedbackItem  key={item.id} item={item}/> 
                    </motion.div>
                )  })
             }
        </AnimatePresence>
        </div>
    )
}

export default FeedBackList
