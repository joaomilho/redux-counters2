import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

export default class Counter extends React.Component {
  inc(e){
    e.preventDefault();
    this.props.inc();
  }

  dec(e){
    e.preventDefault();
    this.props.dec();
  }

  render() {
    return (
      <div>
        <h1>{ this.props.count }</h1>
        <form action="/inc" method="post">
          <button onClick={ (e) => this.inc(e) }>+1</button>
        </form>
        <form action="/dec" method="post">
          <button onClick={ (e) => this.dec(e) }>-1</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(Counter);
