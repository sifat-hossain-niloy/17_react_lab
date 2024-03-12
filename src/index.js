import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            title: '',
            description: '',
            isEditing: true,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleTitleChange = (id, value) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, title: value };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleDescriptionChange = (id, value) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, description: value };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const saveTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isEditing: false };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const editTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isEditing: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
      <div className="container mt-5">
          <div className="text-end mb-3">
              <button onClick={addTask} className="btn btn-primary">Add Task</button>
          </div>
          <div className="row">
              {tasks.map((task) => (
                  <div key={task.id} className="col-12 mb-4"> {}
                      <div className="card">
                          <div className="card-body">
                              {task.isEditing ? (
                                  <>
                                      <input
                                          type="text"
                                          className="form-control mb-2"
                                          placeholder="Title"
                                          value={task.title}
                                          onChange={(e) => handleTitleChange(task.id, e.target.value)}
                                      />
                                      <textarea
                                          className="form-control mb-2"
                                          placeholder="Description"
                                          value={task.description}
                                          onChange={(e) => handleDescriptionChange(task.id, e.target.value)}
                                      ></textarea>
                                      <button onClick={() => saveTask(task.id)} className="btn btn-success me-2">Save</button>
                                  </>
                              ) : (
                                  <>
                                      <h5 className="card-title">{task.title}</h5>
                                      <p className="card-text">{task.description}</p>
                                      <button onClick={() => editTask(task.id)} className="btn btn-secondary me-2">Edit</button>
                                      <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Delete</button>
                                  </>
                              )}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
