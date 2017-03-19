import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import GrommetHeader from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
const app;
class Header extends Component {
  render() {
    return (
      <GrommetHeader className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="250" height="250" alt="Estable" />
            <span className={s.brandTxt}>fay@gmail.com</span>
          </Link>
          <Title>Estable
            <p className={s.bannerDesc}>Something good here</p>
          </Title>
        </div>
      </GrommetHeader>
    );
  }
}

export default withStyles(s)(Header);
