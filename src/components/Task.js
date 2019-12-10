import React from 'react';

const Task = (props) => {
    const {removeTask, finishTask, id} = props
    return ( 
        <li>
            <h3>{props.text}</h3>
            <p>Data do zakoniecznia: {props.date}</p>
            {!props.active && <p>Czas wykonania zadania {props.finishTime}</p>}
            {props.active && <button onClick={() => removeTask(id)}>x</button>}
            {props.active && <button onClick={() => finishTask(id)}>+</button>}
        </li> 
    );
}
 
export default Task;