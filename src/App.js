import React, { useState } from 'react'

import './App.css';
import PageHeader from './component/Navbar/Navbar';
import Todo from './component/Todo/Todo';
import Todolist from './component/TodoList/Todolist';

function App() {
  const [collapse, setCollapse] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false);
  const [todo, setTodo] = useState();

  const handleCollapse = () => {
    setCollapse(v => !v)
  }

  const handleUpdate = (todo) => {
    setIsUpdate(v => !v)
    setCollapse(v => !v)
    setTodo(todo);
  }

  return (
    <div className="w-50 m-auto bg-secondary text-light app">
      <PageHeader handleCollapse={handleCollapse} collapse={collapse} />
      <main>
        {collapse ? <Todolist handleUpdate={handleUpdate} /> : <Todo isUpdate={isUpdate} handleUpdate={handleUpdate} todo={todo} />}
      </main>
    </div>
  );
}

export default App;
