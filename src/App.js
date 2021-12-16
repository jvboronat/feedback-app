
import { useState } from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/feedback";

function App() {

  const [feedback, setfeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className="container">
        
        <FeedBackList items={feedback}/>
      </div>
      
    </>
  );
}

export default App;
