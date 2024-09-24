import React from 'react'
import FeedbackItem from './FeedbackItem'

import FeedbackContext from '../context/FeedbackContext'

import { useContext } from 'react'


const FeedbackList = () => {



  // const {feedback,number,iNumber} = useContext(FeedbackContext);
  const {feedback} = useContext(FeedbackContext);




  if(feedback.length === 0){
    return <p>No Feedback yet</p>
  }  

   

  return (
    <div className='feedback-list'>

      {/* <h4>{number}</h4> */}

      {/* <button className='btn btn-primary' onClick={() => iNumber()}>Click</button> */}
        {
            feedback.map((item) => (
                <FeedbackItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default FeedbackList