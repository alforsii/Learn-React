import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: uuid.v4(),
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

  //Add Todo
  addTodo = title => {
    // console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
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
    // //3.
    // return (
    //   <div className="App">
    //     <div className="container">
    //       <Header />
    //       <AddTodo addTodo={this.addTodo} />
    //       <Todos
    //         markComplete={this.markComplete}
    //         todos={this.state.todos}
    //         delTodo={this.delTodo}
    //       />
    //     </div>
    //   </div>
    // );
    //4.
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* Home page route */}
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            {/* About page route */}
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
