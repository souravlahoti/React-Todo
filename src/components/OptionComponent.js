import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Option extends React.Component {
  render() {
    return (
      <div style={{margin:20+"px"}}>
       <Card style={{width:200+'px'}} body outline color="primary">
         <CardBody>
         <CardSubtitle>{this.props.value} </CardSubtitle>
         <Button color="danger" onClick={(e) => {this.props.onRemoveList(e,this.props.keys)}}>Remove</Button>
         </CardBody>
        </Card>
      </div>
    );
  }
}

export default Option;
