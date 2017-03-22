import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import GrommetHeader from 'grommet/components/Header';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends Component {
  render() {
    return (
      <GrommetHeader className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="180" height="180" alt="Estable" />
          </Link>
        </div>
      </GrommetHeader>
    );
  }
}

export default withStyles(s)(Header);
