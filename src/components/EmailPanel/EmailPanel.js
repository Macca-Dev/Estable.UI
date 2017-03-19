import React, { Component, PropTypes } from 'react';

import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

class EmailPanel extends Component {
  static propTypes = {
    onClick: PropTypes.bool
  }

  render(){
    const { onClick } = this.props;
    return (
      <div>
        <Form>
          <FormFields>
            <TextInput />
          </FormFields>
          <div>
            <Button label='Start eStable Creation'
              type='submit'
              primary={true}
              onClick={onClick} />
          </div>
        </Form>
      </div>
    )
  }
}

export default EmailPanel;
