import React from 'react';

class AddOption extends React.Component {
  
  render() {
    return (
      <form onSubmit={this.props.addTodoList}>
          <input type="text" id="todo" />
          <button type="submit" value="add">Add Todo</button>
      </form>
    );
  }
}

export default AddOption;
