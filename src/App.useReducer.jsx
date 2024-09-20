import './App.css'
import { useReducer } from 'react'

function App() {
  const reducer = (state, action) => {
    const types = {
      increment: { count: state.count + 1, showText: state.showText },
      toggleShowText: { count: state.count, showText: !state.showText },
    }
    return types[action.type]
  }

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div className='App'>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'toggleShowText' })
          console.log(`${state.count} and ${state.showText}`)
        }}
      >
        Change states
      </button>
      <h1>{state.showText && 'Hello World, it\'s use reducer'}</h1>
    </div>
  )
}

export default App
