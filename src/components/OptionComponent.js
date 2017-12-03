import React from 'react';

class Option extends React.Component {
  render() {
    return (
      <div>
        <li key={this.props.keys}>{this.props.value} <button onClick={(e) => {this.props.onRemoveList(e,this.props.keys)}}>Remove</button></li>
        
      </div>
    );
  }
}

export default Option;
