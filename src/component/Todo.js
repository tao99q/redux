import React, {Component} from 'react';

import {ADD_TODO, DELETE_TODO} from '../actions';
import {store} from "../store";



let addTodo = (text) => (
  {
    type: ADD_TODO,
    text
  }
);

let deleteTodo = (index) => (
  {
    type: DELETE_TODO,
    index
  }
);

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().todo.list
    }
  }

  componentWillMount() {
    this.unSubscribe = store.subscribe(() => (
        this.setState({
            list: store.getState().todo.list
          }
        )
      )
    )

  }

  componentWillUnMount() {
    this.unSubscribe();
  }

  handleKeyDown(event) {
    if (event.keyCode === 13 && event.target.value.length > 0) {
      store.dispatch(addTodo(event.target.value))
      event.target.value = '';
    }
  }

  handleDeleteTodo(index) {
    store.dispatch(deleteTodo(index))
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown.bind(this)}/>
        <ul>
          {
            this.state.list.map((todo, index) => (
              <li key={index}>{todo}
                <button onClick={this.handleDeleteTodo.bind(this, index)}>-</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Todo;