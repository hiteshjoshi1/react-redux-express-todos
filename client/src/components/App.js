import React, { Component } from 'react';
import TodoListNew from './TodoListNew';
import AddTodo from './AddTodo';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <AddTodo></AddTodo>
        <TodoListNew></TodoListNew>
      
    </div>
    );
  }
}

export default App;
