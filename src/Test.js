import { legacy_createStore } from "redux";

const initialState={
  value:0
} 

function appReducer(prevState = initialState,action){

  return prevState

}

const store = legacy_createStore(appReducer)

const state = store.getState()

document.getElementById('value').innerText = state.value

console.log(state)

export default appReducer