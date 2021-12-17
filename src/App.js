
import { useState } from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/feedback";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4 }from 'uuid';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

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


  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats items={feedback}/>
        <FeedBackList handleDelete={deleteFeedback} items={feedback}/>
      </div>
      
    </>
  );
}

export default App;
