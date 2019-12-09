import React from 'react';

const AddTask = () => {
    return ( 
    <div className="AddTaskContainer">
        <form>
            <label>
                zadanie:
                <input type="text"></input>
            </label>
            <label>
                data:
                <input type="date"></input>
            </label>
            <button>Dodaj</button>
        </form>
    </div> 
    );
}
 
export default AddTask;