// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import { useReducer } from 'react'

function countReducer({ count }, { step }) {
  return { count: count + step }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = useReducer(countReducer, { count: initialCount })

  const increment = () => setState({ step })
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
