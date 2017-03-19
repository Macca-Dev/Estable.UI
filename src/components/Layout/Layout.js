import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import App from 'grommet/components/App';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <App>
        <Header/>
        {this.props.children}
        <Footer />
      </App>
    );
  }
}


const ComponentWithStyles = withStyles(s)(Layout);

export default (ComponentWithStyles);
