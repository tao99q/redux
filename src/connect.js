import React, {Component} from "react";
import {PropTypes} from "prop-types";

/**
 *
 * @param mapStateToProps 把store 里的状态映射成属性
 * @returns {Function}
 */
let connect = (mapStateToProps, mapDispatchToProps) => (_component) => {

  class Proxy extends Component {
    constructor() {
      super();
      this.state = {};
    }

    componentWillMount() {
      this.unSubcribe = this.context.store.subscribe(() => {
        this.setState(mapStateToProps(this.context.store.getState()));
      })
    }

    componentWillUnMount() {
      this.unSubcribe();
    }

    render() {
      return <_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
    }
  }

  Proxy.contextTypes = {
    store: PropTypes.object
  }
  return Proxy;
};

export default connect;