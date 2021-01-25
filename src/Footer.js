import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  return (
    <ListGroup flush>
        <p></p>
      <ListGroupItem style={{textAlign:'center'}} disabled tag="a" href="#">&copy; Razteca Goods 2021</ListGroupItem>
    </ListGroup>
  );

}

export default Example;