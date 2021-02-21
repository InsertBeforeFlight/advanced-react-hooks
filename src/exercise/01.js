// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import { useReducer } from 'react'

function countReducer(count, newCount) {
  return newCount;
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = useReducer(countReducer, initialCount)

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
