import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import OnProgress from './OnProgress'
import Completed from './Completed'

function App() {
  const [toDos, setToDos] = useState([])

  return (
    <div className='container'>
      <div className='todo-wrapper'>
        <div><ToDoList toDos={toDos} setToDos={setToDos}></ToDoList></div>
        <div><OnProgress toDos={toDos} setToDos={setToDos}></OnProgress></div>
        <div><Completed toDos={toDos} setToDos={setToDos}/></div>
      </div>
    </div>
  )
}
export default App
