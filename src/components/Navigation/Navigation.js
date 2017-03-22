import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    const { email } = this.props
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/help">Help</Link>
        <Link className={s.link} to="/contact">Contact</Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/login">{email}</Link>
      </div>
    );
  }
}

const mapState = state => ({
  email: state.user.email
});

const ComponentWithStyles = withStyles(s)(Navigation)

export default connect(mapState)(ComponentWithStyles);
