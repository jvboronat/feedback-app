
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/feedback";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {


  return (
    <FeedbackProvider>

    <Router>
      <Header />
      <div className="container">
      <Routes>

        <Route 
          exact 
          path='/' 
          element={
            <>
              <FeedbackForm/>
              <FeedbackStats/>
              <FeedBackList/>
            </>
        }>

        </Route>
        <Route path='/about' element={<AboutPage/>}>
            This is the about route
        </Route>

      </Routes>


      </div>
      <AboutIconLink/>

      
    </Router>
  </FeedbackProvider>
  );
}

export default App;
