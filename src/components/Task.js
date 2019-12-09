import React from 'react';

const Task = (props) => {
    const {removeTask, finishTask, id} = props
    return ( 
        <li>
            <h3>{props.text}</h3>
            <p>{props.date}</p>
            <button onClick={() => removeTask(id)}>x</button>
            <button onClick={() => finishTask(id)}>+</button>
        </li> 
    );
}
 
export default Task;