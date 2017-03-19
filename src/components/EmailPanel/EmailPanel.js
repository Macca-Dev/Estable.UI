import React, { Component, PropTypes } from 'react';
import { dispatch } from 'redux';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';

class EmailPanel extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  constructor(props){
    super(props);

    this.state = {
      value: props.user.email || ''
    }
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.value);
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    const { user } = this.props;

    return (
      <div>
        <Form>
          <FormField label="Email Address">
            <TextInput
              value={this.state.value}
              onDOMChange={this.onChange}
            />
          </FormField>
          <div>
            <Button
              label='Start eStable Creation'
              type='button'
              primary={true}
              onClick={this.onSubmit}/>
          </div>
        </Form>
      </div>
    )
  }
}

export default EmailPanel;
