import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const tasks = props.tasks.map(task => <Task key={task.id} id={task.id} text={task.description} date={task.date} active={task.active} finishTime={task.finishTime} finishTask={props.finishTask} removeTask={props.removeTask}/>)
    const actualTasks = tasks.filter(task => task.props.active)
    const doneTasks = tasks.filter(task => task.props.active === false)
    
    return (
        <div className="TaskListContainer">
            <p>Do zrobienia</p>
            <ul className="activeTask">
                {actualTasks}
            </ul>
            <p>Wykonane</p>
            <ul className="doneTask">
                {doneTasks.reverse()}
            </ul>
        </div> 
    );
}
 
export default TaskList;