import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

 const App = props => {

    return (
            <div className="container">
              <h3>Todo App (React) <img alt="" src="logo192.png" style={{with:35, height:35}} /></h3>
              <h6>Em memória, sem Firebase, sem Navigation</h6>
              <h6>Com Redux, com CSS (materializecss)</h6>
              <TodoForm />
              <TodoList /> 
            </div>

    )
  }

export default App;