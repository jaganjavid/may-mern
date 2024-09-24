import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackLength = () => {

  const {feedback} = useContext(FeedbackContext);

  return (
    <div className="container">
        <h5 className="length">Length : ({feedback.length})</h5>
    </div>
  )
}

export default FeedbackLength