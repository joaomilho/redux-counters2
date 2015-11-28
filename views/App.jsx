import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux';
import Counter from './Counter';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
