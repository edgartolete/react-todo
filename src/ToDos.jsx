import React, { useState } from 'react';

function ToDos () {

    let [addButtonState, setAddButtonState] = useState(true)

    function addButtonClick(){
        setAddButtonState(addButtonState = false)
    }
    return (
        <div className='all-todos'>
            <h2>To Dos</h2>
            { addButtonState ? <button className='todo-add-button' onClick={addButtonClick}>Add</button> : "" }
            <div className='todo-card'>

            </div>
        </div>
        )
}
export default ToDos;