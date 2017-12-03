import React from 'react';
import Option from './OptionComponent';

class OptionList extends React.Component {
  
  render() {
    return (
        <ol>
          {
            this.props.options.map((option, index) =>
              <Option keys={index} value={option} onRemoveList={this.props.onRemoveList}/>
            )
          }
        </ol>
    );
  }
}

export default OptionList;
