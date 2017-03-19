import React, { Component } from 'react';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';

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
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
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
          <p>Financial</p>
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
        <Tab title="Horses">
          <p>Financial</p>
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
        <Tab title="Financials">
          <input
            type="text"
            value=""
            onChange={NOOP}
          />
        </Tab>
        <Tab title="Summary">
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
