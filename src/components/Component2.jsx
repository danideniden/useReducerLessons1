import React, {useState, useReducer} from 'react'

const initialState = 0

function reducer(state,action){
  switch (action.type){
    case "add":
      return parseInt(state) + parseInt(action.payload);
      break
    default:
      return parseInt(state) - parseInt(action.payload)
      break
  }
  
}

const Component2 = ()=>{
  const [result, dispatcher] = useReducer(reducer, initialState)
  const [num, setNum] = useState(0);
  const [oper, setOper] = useState("add");
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatcher({type:oper, payload:num})
  }
  
  return (
    <>
      <h3>{result}</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" value={num} onChange={e=>setNum(e.target.value)}/>
        <select onChange={e=>setOper(e.target.value)}>
          <option>add</option>
          <option>sub</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Component2