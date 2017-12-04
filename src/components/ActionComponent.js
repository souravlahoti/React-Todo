import React from 'react';
import {Button} from 'reactstrap'
class Action extends React.Component {

  render() {
    return (
        <div>
            {
              (this.props.options.length != 0)?
              <Button onClick={this.props.onRemoveAll} color="danger">Remove All</Button>:<p></p>
            }
            
        </div>
    );
  }

}

export default Action;
