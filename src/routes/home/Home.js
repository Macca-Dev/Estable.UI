import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Steps from '../../components/Steps';
import EmailPanel from '../../components/EmailPanel';
import updateUser from '../../actions/user';

class Home extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  render() {
    const { user } = this.props;
    const content = user.email ?
      <Steps />
      : <EmailPanel user={user} onSubmit={this.props.onSubmit}/>;

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

const mapDispatchToProps = dispatch => {
  return  {
    onSubmit : value => {
      dispatch(updateUser({name: 'email', value: value}));
    }
  }
}

const ComponentWithStyles = withStyles(s)(Home)

export default connect(mapState, mapDispatchToProps)(ComponentWithStyles);
