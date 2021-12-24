import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4 }from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [isloading, setIsloading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    useEffect(() => {
        fetchtFeedback()
        setIsloading(false)
    }, [])

    const fetchtFeedback = async () => {
      const response = await fetch(`/feedback?_sort=id&=desc`)
      const data = await response.json()

      setFeedback(data)
    } 


    const deleteFeedback = async (id) => {

        if (window.confirm('Are you sure you want to delete?'))
        {
          await fetch(`/feedback/${id}`, {method: 'DELETE'})

          setFeedback(feedback.filter((item) => item.id !== id))
        }
    
      }
    
      const addFeedback = async(feedbackAdded) => {

        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(feedbackAdded)

        })

        const data = await response.json()
        
    
        setFeedback([data,...feedback])
      }

      const updateFeedback = async(itemUpdated) => {

        const response = await fetch(`/feedback/${itemUpdated.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(itemUpdated)

        })

        const data = await response.json()

        console.log(data)

        setFeedback(
          feedback.map((item) => {
            if (item.id === data.id){
              return data
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
        updateFeedback,
        isloading

    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext