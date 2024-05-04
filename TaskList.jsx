// TaskList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToDosContext } from '../ToDoContext';
import TaskNavbar from './TaskNavbar';



const TaskList = () => {

  const { toDos, modifyToDos} = useToDosContext()
  const [localData, setLocalData]  =useState(toDos)
  const navigate = useNavigate()
  
  const handleDelete = (index) => {
    const filteredArr = localData.filter((data,i) => i !== index)
    setLocalData(filteredArr);
    modifyToDos(filteredArr);
  }

  
  const handleAddMore = () => {
    navigate('/task')

  }


  return (
    <div>
      <TaskNavbar />
      <div className="task-header">
        <h1>Task List</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            localData && localData.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{todo}</td>
                  <td>
                    <button className='button-active'>Active</button>
                  </td>
                  <td>
                    <button className='edit-button'>Edit</button>
                    <button className='delete-button' onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
       <div className="button-center">
         <button className='add-button' onClick={handleAddMore}>Add more</button>
       </div>
    </div>
  );
};

export default TaskList;

