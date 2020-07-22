import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="center-todo">
      <h1 className="todo-header">TODO LIST</h1>
        {/*<BlockReact  />*/}
       <Form />
       {/*<TodoItem />*/}
    </div>
  );
}

export default App;