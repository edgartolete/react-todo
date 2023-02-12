import { useState } from 'react'
import './App.css'
import ToDos from './ToDos'
import OnProgress from './OnProgress'
import Completed from './Completed'

function App() {
  const [todos, setTodos] = useState({})

  return (
    <div className='container'>
      <div className='todo-wrapper'>
        <div><ToDos></ToDos></div>
        <div><OnProgress></OnProgress></div>
        <div><Completed/></div>
      </div>
    </div>
  )
}
export default App
