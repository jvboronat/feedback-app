
import { useState } from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/feedback";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {

  const deleteFeedback = (id) => {

    if (window.confirm('Are you sure you want to delete?'))
    {
      setfeedback(feedback.filter((item) => item.id !== id))
    }

  }

  const [feedback, setfeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm/>
        <FeedbackStats items={feedback}/>
        <FeedBackList handleDelete={deleteFeedback} items={feedback}/>
      </div>
      
    </>
  );
}

export default App;
