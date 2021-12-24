import { createContext, useState } from "react";
import {v4 as uuidv4 }from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: '1',
            rating: 10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: '2',
            rating: 9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: '3',
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })


    const deleteFeedback = (id) => {

        if (window.confirm('Are you sure you want to delete?'))
        {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    
      }
    
      const addFeedback = (feedbackAdded) => {
        
        feedbackAdded.id = uuidv4()
    
        setFeedback([feedbackAdded,...feedback])
      }

      const updateFeedback = (itemUpdated) => {

        //console.log(itemUpdated)

        setFeedback(
          feedback.map((item) => {
            if (item.id === itemUpdated.id){
              return itemUpdated
            }
            else{
              return item
            }


          })
        )

        setFeedbackEdit({
          item: {},
          edit: false
        })

      }

      // Set item to be Updated
      const editFeedback = (item) => {
        setFeedbackEdit({
          item,
          edit: true
        })
      }

    return <FeedbackContext.Provider value= {{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback

    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext