import React, { Component } from 'react';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Stable from './Stable';

const NOOP = () => {};

class Steps extends Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(activeIndex) {
    this.setState({
      activeIndex,
    });
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Tabs onActive={this.onClick} activeIndex={activeIndex}>
        <Tab title="Stable">
          <p>Stable</p>
          <Stable />
        </Tab>
        <Tab title="Financial">
          <p>Financial</p>
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
        <Tab title="Charge Types">
          <p>Charge Types</p>
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
        <Tab title="Horses">
          <p>Horses</p>
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
        <Tab title="Owners">
        <p>Owners</p>
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
        <Tab title="Summary">
        <p>Summary</p>
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default Steps;
