import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [state, setState] = useState('Hello')
  useEffect(() => {
    const fetchComments = async () => {
      try {
        setState((await axios.get('https://jsonplaceholder.typicode.com/comments')).data[0].email)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchComments()
  }, [])
  return (
    <div className='App'>
      <h1>{state}</h1>
    </div>
  )
}

export default App
