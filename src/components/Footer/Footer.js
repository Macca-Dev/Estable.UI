import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import GrommetFooter from 'grommet/components/Footer';
import s from './Footer.css';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <GrommetFooter className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Your Company</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/admin">Admin</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/privacy">Privacy</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/not-found">Not Found</Link>
        </div>
      </GrommetFooter>
    );
  }
}

export default withStyles(s)(Footer);
