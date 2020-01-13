import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    // //1.
    // return (
    //   <div>
    //     <p>Hello</p>
    //   </div>
    // );
    // //2.
    // return (
    //   <div>
    //     <p>{this.props.todo.title}</p>
    //   </div>
    // );
    // //3.add style
    // return (
    //   <div style={{ backgroundColor: '#f4f4f4' }}>
    //     <p>{this.props.todo.title}</p>
    //   </div>
    // );
    // //4.add style we can also use variable
    // //uncomment itemStyle variable below to test
    // return (
    //   <div style={itemStyle}>
    //     <p>{this.props.todo.title}</p>
    //   </div>
    // );
    // //5.add style we can also use a function
    // return (
    //   <div style={this.getStyle()}>
    //     <p>{this.props.todo.title}</p>
    //   </div>
    // );
    // //6.add style we can also use a function
    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       {/* if we don't wanna use .bind(this) then we have to make markComplete() arrow function*/}
    //       <input type="checkbox" onChange={this.markComplete.bind(this)} />{' '}
    //       {this.props.todo.title}
    //     </p>
    //   </div>
    // );
    // //7.let's move markComplete() to app.js and see how we can access that from here
    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       {/* if we don't wanna use .bind(this) then we have to make markComplete() arrow function*/}
    //       <input
    //         type="checkbox"
    //         onChange={this.props.markComplete.bind(this)}
    //       />{' '}
    //       {this.props.todo.title}
    //     </p>
    //   </div>
    // );
    // //8.
    // return (
    //   <div style={this.getStyle()}>
    //     <p>
    //       {/* if we don't wanna use .bind(this) then we have to make markComplete() arrow function*/}
    //       <input
    //         type="checkbox"
    //         onChange={this.props.markComplete.bind(this, this.props.todo.id)}
    //       />{' '}
    //       {this.props.todo.title}
    //     </p>
    //   </div>
    // );
    // //9. Let's simplify the example 8 by using destructuring
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* if we don't wanna use .bind(this) then we have to make markComplete() arrow function*/}
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
  // // this is for example number 6.
  //   markComplete(e) {
  //     console.log(this.props);
  //   }
  getStyle() {
    //1.
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
    //2.
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through',
    //   };
    // } else {
    //   return {
    //     textDecoration: 'none',
    //   };
    // }
  }
}

//Prop
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

//Delete button style
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};
//uncomment to test
// const itemStyle = {
//   backgroundColor: '#f4f4f4',
// };

export default TodoItem;
