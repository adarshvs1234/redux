import { legacy_createStore } from "redux"
import { DECREMENT, INCREMENT } from "../actions/ActionTypes"






const initialState ={
    count:0
}

 const Reducer=(state=initialState,action)=>{


switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count : state.count+1
            }

        case DECREMENT:
            return{
                ...state,
                count: state.count-1
            }
            
            
        default :
            return state
    }
}

const store = legacy_createStore(Reducer)
console.log(store)

export default Reducer