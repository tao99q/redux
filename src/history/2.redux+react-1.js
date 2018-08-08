import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "./redux";

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

/**
 * 处理器
 * @param state 状态树，可以是任意结构
 * @param action 是一个纯对象，{type:'INCREASE',amount:2}  {type:'DECREASE',amount:1}
 */
let reducer = (state = {number: 0}, action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case INCREASE:
      return {number: state.number + action.amount};
    case DECREASE:
      return {number: state.number - action.amount};
    default:
      return state;

  }
};

let store = createStore(reducer);

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{store.getState().number}</p>
        <button onClick={()=>store.dispatch({type:INCREASE,amount:2})}>+</button>
        <button onClick={()=>store.dispatch({type:DECREASE,amount:2})}>-</button>
      </div>
    )
  }
}

let render = () => {
  ReactDOM.render(
    <Counter/>,
    document.querySelector('#root')
  )
};
store.subscribe(render);
render();