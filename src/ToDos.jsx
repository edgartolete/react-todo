import React, { useState } from 'react';

function ToDos ({toDos, setToDos}) {

    let [addButtonState, setAddButtonState] = useState(false)
    let [toDoName, setToDoName] = useState("")
    function addButtonToggle(){
        setAddButtonState(addButtonState = !addButtonState)
    }

    function addTask(){
        if(toDoName != ""){
            console.log(toDoName);
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

    function updateToDo (){
        console.log("test")
    }
    return (
        <div className='all-todos'>
            <h2>To Dos</h2>
            { addButtonState ? 
                <button className='todo-add-button' onClick={addButtonToggle}>Add</button> : 
                    <div className='todo-add-input'>
                        <input type="text" placeholder='Enter new task.' onChange={e => setToDoName(e.target.value + "")}></input>
                        <div className='add-action-button'><button onClick={addTask} className="task-button">Add</button><button className="task-button" onClick={addButtonToggle}>Cancel</button>
                    </div>
            </div> } 
            {toDos.map(todo => (todo.status == "new")?
                    <div className='todo-card' key={todo.id} >
                        <input type="text" value={todo.name} onChange={updateToDo} disabled/>
                    </div>
                    : ""
                )}
        </div>
        )
}
export default ToDos;