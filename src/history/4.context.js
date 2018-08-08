import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';

import Counter from './component/Counter';
import Todo from './component/Todo';

class Container extends React.Component {
  getChildContext() {
    //返回一个对象，这个对象就是子组件的context对象
    return {color: 'green'};
  }

  render() {
    return (
      <MessageList messages={this.props.messages}/>
    )
  }
}

Container.childContextTypes = {
  color: PropTypes.string
}

class MessageList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.messages.map((message, index) => <Message key={index} message={message}/>)}
        </ul>
      </div>
    )
  }
}

class Message extends React.Component {
  render() {
    return (
      <li style={{color: this.context.color}}>
        {this.props.message}
      </li>
    )
  }
}

Message.contextTypes = {
  color: PropTypes.string
}

let messages = [1, 2, 3];
ReactDOM.render(
  <Container messages={messages}/>,
  document.querySelector('#root')
)

