import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
  Row,
  Col,
  Button,
} from "reactstrap";

const NotFound = (props) => {
  const { style, src, link, name } = props;
  return (
    <Card>
      <CardBody style={{ textAlign: "center" }} className="no-image-card">
        <Row>
          <Col md="12" xs="12">
            <CardImg
              style={style}
              alt="No data available"
              src={require(`assets/images/${src}`)}
            />
          </Col>
          {link && (
            <Col md="12" xs="12">
              <CardLink href={link}>
                <Button color="success">{name}</Button>
              </CardLink>
            </Col>
          )}
        </Row>
      </CardBody>
    </Card>
  );
};
NotFound.defaultProps = {
  src: "not-found.png",
  style: { width: "20%" },
  link: false,
  name: "Go",
};

export default NotFound;
