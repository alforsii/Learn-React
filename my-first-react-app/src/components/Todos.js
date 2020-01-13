import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    //1.Step
    // // console.log(this.props.todos);
    // return (
    //   <div>
    //     <h1>Todos</h1>
    //   </div>
    // );
    //2.Step
    // return this.props.todos.map(todo => {
    //   return <h3>{todo.title}</h3>;
    // });
    // return this.props.todos.map(todo => <h3>{todo.title}</h3>);
    //3.Step
    // return this.props.todos.map(todo => <TodoItem />);
    //4.Step
    // return this.props.todos.map(todo => <TodoItem todo={todo} />);
    //5.we still have a warning on the console
    //to remove that we need to add key to TodoItem
    // return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
    //6.passing markComplete()
    // return this.props.todos.map(todo => (
    //   <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} />
    // ));
    //7.passing markComplete()
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }

  // // for example 6.
  //   markComplete() {
  //     console.log('From Todos');
  //   }
}

//Prop
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
