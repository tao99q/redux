import {createStore} from "./redux";
import $ from 'jquery';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

$('#root').append(`
  <p id="counter"/>
  <button id="increaseBtn">+</button>
  <button id="decreaseBtn">-</button>
`);

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

let render = () => {
  document.querySelector('#counter').innerHTML = store.getState().number;
};
//当仓库里的state发生变化时，会重新执行render,读取最新的状态数据并更新视图
store.subscribe(render);
$('#increaseBtn').click(() => store.dispatch({type: INCREASE,amount:3}));
$('#decreaseBtn').click(() => store.dispatch({type: DECREASE,amount:2}));
render();
