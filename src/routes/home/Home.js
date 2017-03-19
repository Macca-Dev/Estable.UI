import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Steps from '../../components/Steps';
import EmailPanel from '../../components/EmailPanel';

class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  static defaultProps = {
    user: { email: 'f@g.com' }
  }

  render() {
    const { user } = this.props;
    const content = user.email ? <Steps /> : <EmailPanel />;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Estable Setup</h1>
          {content}
        </div>
      </div>
    );
  }
}


const mapState = state => ({
  user: state.user
})

const ComponentWithStyles = withStyles(s)(Home)

export default connect(mapState)(ComponentWithStyles);
