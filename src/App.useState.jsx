import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('Alex')
  let onChange = (event) => setValue(event.target.value)
  
  return (
    <div className='App'>
      <input type='text' placeholder='Enter your value' onChange={onChange} />
      <h1>{value}</h1>
    </div>
  )
}

export default App
