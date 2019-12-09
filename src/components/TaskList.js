import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const tasks = props.tasks.map(task => <Task key={task.id} id={task.id} text={task.description} date={task.date} finishTask={props.finishTask} removeTask={props.removeTask}/>)
    return (
        <div className="TaskListContainer">
            <ul>
                {tasks}
            </ul>
        </div> 
    );
}
 
export default TaskList;