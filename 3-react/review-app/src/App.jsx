
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList"
import FeedbackLength from "./components/FeedbackLength";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/About";

import { FeedbackProvider } from "./context/FeedbackContext";




const App = () => {

  return (

    <Router>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={

              <>
                <FeedbackForm />
                <FeedbackLength />
                <FeedbackList />
              </>

            } />

            <Route path="/about" element={<About/>}/>

          </Routes>
        </div>


      </FeedbackProvider>
    </Router>

  )
}

export default App