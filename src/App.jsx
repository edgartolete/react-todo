import { useState } from 'react'
import './App.css'
import ToDos from './ToDos'
import OnProgress from './OnProgress'
import Completed from './Completed'

function App() {
  const [toDos, setToDos] = useState([])
  
  return (
    <div className='container'>
      <div className='todo-wrapper'>
        <div><ToDos toDos={toDos} setToDos={setToDos}></ToDos></div>
        <div><OnProgress></OnProgress></div>
        <div><Completed/></div>
      </div>
    </div>
  )
}
export default App
