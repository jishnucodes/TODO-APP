// Task.jsx
import React, { useState, useRef, useEffect } from 'react';
import TaskNavbar from './TaskNavbar';
import { useNavigate } from 'react-router-dom';
import { useToDosContext } from '../ToDoContext';


const Task = () => {

  const { updateToDos } = useToDosContext()
  const [toDo, setToDo] = useState('');
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  const navigate = useNavigate();

  const handleAdd = () => {
    if (toDo.length > 0) {
      updateToDos(toDo)
      setToDo('');

    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="task">
      <TaskNavbar />
      <div className="task-content">
        <div className="container">
          <div className="task-header pt-4">
            <h2 className="text-capitalize">
              Organize, simplify, achieve, repeat
            </h2>
          </div>
          <div className="task-input-box">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Task"
                ref={inputRef}
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
              />
              <span className="input-button">
                <button className="btn btn-danger" onClick={handleAdd}>
                  ADD
                </button>
              </span>
            </form>
          </div>
          <div className="task-footer">
            <h3 className="">Track your task</h3>
            <button className="btn btn-info" onClick={() => navigate("/tasklist")}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
