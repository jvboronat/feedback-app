import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"



function FeedBackList() {

    const {feedback, isloading} = useContext(FeedbackContext)

    if(!isloading && (!feedback || feedback.lenght ===0)) {
        return <p>No Feedback Yet</p>
    }

    return isloading ? <Spinner/> : (
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
