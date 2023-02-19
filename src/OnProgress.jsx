import React from 'react';
import ToDo from './ToDo';

function OnProgress ({toDos, setToDos}) {

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

    function moveToComplete(id){
        toDos.map((todo) =>{
            if(todo.id === id){
                todo.status = "completed";
            }
        })
        setToDos([...toDos]);
    }

    return (
        <div className='all-todos'>
            <h2>On Progress</h2>
            {toDos.map(todo => (todo.status == "onProgress")?
                    <ToDo  key={todo.id} todo={todo} updateToDo={updateToDo} deleteToDo={deleteToDo} moveToComplete={moveToComplete}/>
                    : ""
                )}
        </div>
        

    )
}
export default OnProgress;