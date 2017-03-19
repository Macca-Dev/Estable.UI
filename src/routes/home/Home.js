import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Steps from '../../components/Steps';

class Home extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Estable Setup</h1>
          <Steps />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
