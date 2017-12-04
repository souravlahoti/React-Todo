import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddOption extends React.Component {
  
  render() {
    return (
      <Form onSubmit={this.props.addTodoList} style={{display: 'flex','justify-content':'center'}}>
          <FormGroup>
            <Input type="text" id="todo" placeholder="Enter your todo" style={{width:'400px','margin-right':'10px'}}/>
          </FormGroup>
          <FormGroup>
            <Button color="primary">Add Todo</Button>
          </FormGroup>
      </Form>
    );
  }
}

export default AddOption;
