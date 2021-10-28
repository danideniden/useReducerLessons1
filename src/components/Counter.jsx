import React, {useState, useReducer} from 'react'

const initialState = 1;

const reducer = (state, action)=>{
  switch(action.type){
    case "increment":
      return state+1
      break;
    case "decrement":
      return state-1
      break;
    default:
      throw new Error();
      break;
  }
}

const Counter = ()=>{
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <h1>useReducer hook</h1>
      <h2>{state}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </div>
  )
}

export default Counter;