import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCount } from './CounterProvider'
import { decrement, increment } from './actions/ActionType'




const App = () => {
  
  const count = useSelector((state)=>state.initialState.count)

  

  const dispatch = useDispatch()

  // const{store,dispatch}=useCount()



  return(


    <div>
      <button  onClick={()=>dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button  onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App


