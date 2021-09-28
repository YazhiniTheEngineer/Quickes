import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Cards(props){
  console.log(props);
    return(
      <>
        <Card className="cards">
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.task}
          </Card.Text>
          <Button variant="primary">{props.radio}</Button>
        </Card.Body>
      </Card>
      
      </>
    );
}
export default Cards;


