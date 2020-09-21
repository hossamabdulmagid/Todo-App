import React, { useState, Fragment } from 'react';

import './App.css';
const Todo = ({ text, completed, index, onCompelte }) => {
  return (
    <Fragment>
      <tr>
        <td style={completed ? { textDecoration: "line-through" } : null}>
          {text}
        </td>
        <td>
          <input type="checkbox" disabled={completed} onClick={() => onCompelte(index)} />
        </td>
      </tr>
    </Fragment>
  )
};

const App = () => {
  const [todos, setTodo] = useState([
    { text: "go to walk", completed: false },
    { text: "go to walk", completed: false },

  ]);

  const [formData, setFormData] = useState({
    text: '',
  })
  const onCompelte = (e) => {
    const newTodos = [...todos];
    newTodos[e].completed = true;
    setTodo(newTodos);
  }
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTodo([...todos, { text: formData.text, completed: false }])
  };
  return (
    <Fragment>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>
                Todo
              </th>
              <th>
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => <Todo text={todo.text} completed={todo.completed} index={index} onCompelte={onCompelte} />)}
          </tbody>
        </table>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text" >Todo</label>
            <input type="text" name="text" value={formData.text} onChange={e => onChange(e)} className="form-control" placeholder="Enter Your Todo" />
            <button type="submit" className="btn btn-success btn-sm" >Add Todo </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default App;