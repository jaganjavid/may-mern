import { useContext } from "react";
import Card from "./shared/Card"
import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ( {item} ) => {


  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);


  return (
    <Card>
       <div className='text-display'>
          {item.text}
           <button className="delete" onClick={() => deleteFeedback(item.id)}>
              <FaRegTrashAlt color="red" size={"20px"}/>
           </button>
           <button className="edit" onClick={() => editFeedback(item)}>
              <MdModeEditOutline color="green" size={"20px"}/>
           </button>

          
       </div>    
    </Card>
  )
}

export default FeedbackItem