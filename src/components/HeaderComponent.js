import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Header extends React.Component {

  render() {
    return(
      <div>
            <h1 className="display-3">{this.props.title}</h1>
            <p className="lead">{this.props.subtitle}</p>
      </div>
    );
  }
}

export default Header;
