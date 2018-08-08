import React, {Component} from "react";

import {INCREASE, DECREASE} from '../actions';

import {store} from "../store";

let increase = (amount) => ({type: INCREASE, amount});
let decrease = (amount) => ({type: DECREASE, amount});


class Counter extends Component {
  constructor() {
    super();
    this.state = {number: 0};
  }


  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().counter.number
      })
    })
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch(increase(2))}>+</button>
        <button onClick={() => store.dispatch(decrease(2))}>-</button>
      </div>
    )
  }
}

export default Counter;