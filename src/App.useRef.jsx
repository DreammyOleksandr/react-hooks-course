import './App.css'
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null)
  const onClick = () => inputRef.current.value = ""

  return (
    <div className='App'>
      <h1>Name</h1>
      <input type='text' placeholder='Enter text here...' ref={inputRef} />
      <button onClick={onClick}>Change Text</button>
    </div>
  )
}

export default App
