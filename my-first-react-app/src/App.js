import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      },
    ],
  };

  // //
  // markComplete = () => {
  //   console.log('From app.js');
  // };
  // // after doing step 9 in TodoItem.js by passing id
  // //we can catch it in our markComplete()
  markComplete = id => {
    // console.log('From app.js');
    // console.log(id);
    //toggle status.complete
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = id => {
    // console.log(id);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
      // todos: this.state.todos.filter(todo => todo.id !== id),
    });
  };

  render() {
    //1.
    // console.log(this.state.todos);
    //2.
    // return (
    //   <div>
    //     <Todos todos={this.state.todos} />
    //   </div>
    // );
    //3.
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            markComplete={this.markComplete}
            todos={this.state.todos}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
export default App;
