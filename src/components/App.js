import React, { Component } from 'react';
import '../css/App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';


class App extends Component {
  state = { 
    index:3,
    tasks:
      [
        {
          id:1,
          description: 'testowy task',
          date: '20-02-2015',
          active:true,
          priority: false,
        },
        {
          id:2,
          description: 'testowy task 2',
          date: '02-02-2015',
          active:true,
          priority: false,
        },
      ]
   }

   handleFinishTask = () => {
      console.log("finish taks")
   }

   handleRemoveTask = () => {
      console.log("remove task")
   }

   handleAddTask = (description, date, priority) => {
     const tasks = [...this.state.tasks];
     const {index} = this.state;
     tasks.push({
       id: index,
       description,
       date,
       active:true,
       priority
     });
     this.setState({
       tasks,
       index: index +1,
     });
   }

  render() { 
    const {tasks} = this.state;
    return (
      <div>
        <AddTask addTask={this.handleAddTask}/>
        <TaskList tasks={tasks} finishTask={this.handleFinishTask} removeTask={this.handleRemoveTask} />
      </div> 
    );
  }
}
 
export default App;
