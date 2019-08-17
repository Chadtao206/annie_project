import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const UserCard = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="200px"
          height="200px"
          src={props.info.image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.info.name}</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Chat With Mate</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
