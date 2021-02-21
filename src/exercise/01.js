// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import { useReducer } from 'react'

const INCREMENT_ACTION_TYPE = "INCREMENT";

function countReducer(state, action) {
  switch (action.type) {
    case INCREMENT_ACTION_TYPE:
      return { count: state.count + action.step }
    default:
      throw new Error(`Unsupported Action Type: ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = useReducer(countReducer, { count: initialCount })

  const increment = () => setState({ type: INCREMENT_ACTION_TYPE, step });
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
