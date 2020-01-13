import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid'; //generates uniq id
import './App.css';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  // //1. this is when we have our todoList
  // state = {
  //   todos: [
  //     {
  //       id: uuid.v4(),
  //       title: 'Take out the trash',
  //       completed: false,
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Dinner with wife',
  //       completed: true,
  //     },
  //     {
  //       id: uuid.v4(),
  //       title: 'Meeting with boss',
  //       completed: false,
  //     },
  //   ],
  // };
  // // 2. This if we wanna make request from browser
  // // lets say from https://jsonplaceholder.typicode.com/todos
  // // to do this we have to first 'npm i axios', or we can use fetch()
  state = {
    todos: [],
  };

  componentDidMount() {
    // //1. with fetch
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(res => {
    //     // console.log(res.json());
    //     return res.json();
    //   })
    //   .then(data => {
    //     // console.log(data);
    //     this.setState({ todos: data });
    //   });
    // //2. with axios
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        // console.log(res.data);
        this.setState({ todos: res.data });
      });
  }

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
    //make delete request
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)],
        // todos: this.state.todos.filter(todo => todo.id !== id),
      })
    );

    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)],
    //   // todos: this.state.todos.filter(todo => todo.id !== id),
    // });
  };

  //Add Todo
  // //1.
  // addTodo = title => {
  //   // console.log(title);
  //   const newTodo = {
  //     id: uuid.v4(),
  //     title: title,
  //     completed: false,
  //   };
  //   this.setState({ todos: [...this.state.todos, newTodo] });
  // };
  // //2. If we wanna post the todos from web browser response
  addTodo = title => {
    // console.log(title);
    // //1.
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then(res => {
        // console.log(res.data);
        this.setState({ todos: [...this.state.todos, res.data] });
      });

    // //2.
    // fetch('https://jsonplaceholder.typicode.com/todos', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-type': 'application/json',
    //     body: JSON.stringify({ title }),
    //   },
    // })
    //   .then(res => {
    //     // console.log(res.json());
    //     return res.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //     return this.setState({ todos: [...this.state.todos, data] });
    //   });
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
