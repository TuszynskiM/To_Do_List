import React, { Component } from 'react';

class AddTask extends Component {
    state = { 
        value:"",
        date:"",
        priority: false,
     }

     handleInputValue = e => {
        this.setState({
            value: e.target.value
        })
     }

     handleDateValue = e => {
        this.setState({
            date: e.target.value
        })
     }

     handleChangePriority = () => {
         const {priority} = this.state
         this.setState(
             {priority: !priority}
         )
     }

    render() { 
        const {value, date, priority} = this.state;
        const AddTask = this.props.addTask
        return (
            <div className="addTaskContainer">
                <label>
                    Do zrobienia:
                    <input onChange={this.handleInputValue} value={value} type="text"></input>
                </label>
                <label>
                    Data:
                    <input onChange={this.handleDateValue} value={date} type="date"></input>
                </label>
                <label>
                    priorytet 
                    <input type="checkbox" value={priority} onChange={this.handleChangePriority}></input>
                </label>
                <button onClick={() => AddTask(value, date, priority)}>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;