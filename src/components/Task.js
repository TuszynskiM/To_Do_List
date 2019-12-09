import React from 'react';

const Task = (props) => {
    return ( 
        <li>
            <h3>{props.text}</h3>
            <p>{props.date}</p>
            <button onClick={props.removeTask}>x</button>
            <button onClick={props.finishTask}>+</button>
        </li> 
    );
}
 
export default Task;