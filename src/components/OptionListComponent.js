import React from 'react';
import Option from './OptionComponent';
import {Row} from 'reactstrap';

class OptionList extends React.Component {
  
  render() {
    return (
      <Row>
          {
          this.props.options.length != 0 ?
            this.props.options.map((option, index) =>
              <Option keys={index} value={option} onRemoveList={this.props.onRemoveList}/>
            ) : <p></p>
          }
         </Row>
    );
  }
}

export default OptionList;
