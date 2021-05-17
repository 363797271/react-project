import { useState } from 'react'


/* ---------- useReducer ---------- */

function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)

  function dispatch(action) {
    const newState = reducer(state, action)
    setState(newState)
  }

  return [state, dispatch]
}

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      {count}
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
    </div>
  )
}

export default App
