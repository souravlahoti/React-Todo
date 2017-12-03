import React from 'react';

class Action extends React.Component {

  render() {
    return (
        <div>
            <button onClick={this.props.onRemoveAll}>Remove All</button>
        </div>
    );
  }

}

export default Action;
