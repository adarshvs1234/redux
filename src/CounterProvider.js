import React, { createContext, useContext, useReducer } from 'react'
import Reducer from './pages/Reducer'


const UserContext = createContext()

const CounterProvider = ({children}) => {
 
 const [initialState,dispatch] = useReducer(Reducer,initialState)


    return (
   <UserContext.Provider value= {{initialState,dispatch}}>

    {children}
   </UserContext.Provider>
  )
}

export const useCount = ()=>{

    const context = useContext(UserContext)
    return context 
}

export default CounterProvider
