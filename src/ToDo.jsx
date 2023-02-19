import React, { useState, useEffect } from 'react';

function ToDo ({todo, updateToDo, deleteToDo}) {
    let [disabledToken, toggleDisabledToken] = useState(true);

    let [name, setName]  = useState(todo.name);
    
    function handleInputName(e){
        setName(name = e.target.value)
        updateToDo(todo.id, name)
    }

    function handleDelete(){
        deleteToDo(todo.id)
    }
    return (
        <div className='todo-card' key={todo.id}>
            <input type="text" value={name} disabled={disabledToken ? "disabled" : ""} className={disabledToken ? "" : "task-edit"} onChange={e => handleInputName(e)}/>
            <div className='task-buttons'>
                <button className='task-button' onClick={()=>toggleDisabledToken(disabledToken = !disabledToken)}>{disabledToken ? "Edit" : "Save"}</button>
                <button className='task-button' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}
export default ToDo;