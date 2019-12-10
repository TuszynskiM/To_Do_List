import React, { Component } from 'react';

class AddTask extends Component {
    state = { 
        value:"",
        date:"",
        priority: false,
     }

     date = new Date();
     nowDate = this.date.toISOString().slice(0,10);

     componentDidMount(){
         this.setState({
             date: this.nowDate
         })
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

     handleClearFields = () => { 
        const {value, date, priority} = this.state;
        this.props.addTask(value, date, priority)

        this.setState({
            value:"",
            date: this.nowDate,
            priority: false,
         })
     }

    render() { 
        const {value, date, priority} = this.state;
        const maxDate = (parseInt(this.nowDate.slice(0,4)) + 1) + this.nowDate.slice(4);
        return (
            <div className="addTaskContainer">
                <label htmlFor="text">Do zrobienia:</label>
                <input id="text" type="text" value={value} onChange={this.handleInputValue}></input>
                <label htmlFor="date">Data:</label>
                <input id="date"  type="date" min={this.nowDate} max={maxDate} value={date} onChange={this.handleDateValue}></input>
                <label htmlFor="priority">ważne</label>
                <input id="priority" type="checkbox" value={priority} onChange={this.handleChangePriority}></input>
                <button onClick={this.handleClearFields} >Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;