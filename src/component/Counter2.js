import React, {Component} from 'react';

import {INCREASE, DECREASE} from '../actions';
import connect from '../connect';


class Counter2 extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    number: state.number
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: () => dispatch({type: INCREASE, amount: 3}),
    onDecrease: () => dispatch({type: DECREASE, amount: 2})
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter2);