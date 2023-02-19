import React, { useEffect, useReducer, useState } from 'react';
import ToDo from './ToDo';



function ToDoList ({toDos, setToDos}) {

    let [addButtonState, setAddButtonState] = useState(false)
    let [toDoName, setToDoName] = useState("")
    let [disabledToken, toggleDisabledToken] = useState(true);
    function addButtonToggle(){
        setAddButtonState(addButtonState = !addButtonState)
    }

    function addTask(){
        if(toDoName != ""){
            let newId = 1;
            if(toDos.length > 0){
                newId = toDos.length;
                setToDos([...toDos, {id: toDos[newId-1].id+1, name: toDoName, status: "new"}])
            }else{
                setToDos([{id: 0, name: toDoName, status: "new"}])
            }
            setToDoName("");            
        }
        addButtonToggle();
    }

    function updateToDo (id, name){
        toDos.map((todo)=>{
            if(todo.id === id){
                todo.name = name;
            }
        })
        setToDos([...toDos])
    }

    function deleteToDo (id){
        let index = toDos.findIndex( todo => todo.id == id)
        console.log(index)
        if (index !== -1){
            toDos.splice(index, 1)
            setToDos([...toDos]);
        }
    }

    function moveToOnProgress(id){
        toDos.map((todo) =>{
            if(todo.id === id){
                todo.status = "onProgress";
            }
        })
        setToDos([...toDos]);
    }

    return (
        <div className='all-todos'>
            <h2>To Dos</h2>
            { addButtonState ? 
                <button className='todo-add-button' onClick={addButtonToggle}>Add</button> : 
                    <div className='todo-add-input'>
                        <input type="text" placeholder='Enter new task.' onChange={e => setToDoName(e.target.value + "")}></input>
                        <div className='task-buttons'><button onClick={addTask} className="task-button">Add</button><button className="task-button" onClick={addButtonToggle}>Cancel</button>
                    </div>
            </div> } 
            {toDos.map(todo => (todo.status == "new")?
                    <ToDo  key={todo.id} todo={todo} updateToDo={updateToDo} deleteToDo={deleteToDo} moveToOnProgress={moveToOnProgress}/>
                    : ""
                )}
        </div>
        )
}
export default ToDoList;