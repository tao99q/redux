import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from "./redux";
import counter from './reducers/counter';

import Provider from './Provider';
import Counter2 from './component/Counter2';

let store = createStore(counter);


ReactDOM.render(
  <Provider store={store}>
    <Counter2/>
  </Provider>,
  document.querySelector("#root")
)


