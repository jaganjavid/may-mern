import { useDispatch, useSelector } from "react-redux"
import { increment,decrement } from "./counterSlice"
import { updateTest } from "../test/testSlice";

const Counter = () => {

  const count = useSelector((state) => state.counter.value);

  const changeName = useSelector((state) => state.test.value);
  
  const dispatch = useDispatch();

  return (
    <div>
        <h1>Count : ({count})</h1>

        <h3>{changeName}</h3>

        <div className='flex'>
            <button onClick={() => dispatch(increment(1))}>Increment</button>
            <button onClick={() => dispatch(decrement(1))}>Decrement</button>
            <button onClick={() => dispatch(updateTest("Javid"))}>Change Name</button>
            <button>Light</button>
        </div>
    </div>
  )
}

export default Counter