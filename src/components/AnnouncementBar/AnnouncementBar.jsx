import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const AnnouncementBar = () => {
  return (
    <>
      <section
        className="announcementBar text-center"
        style={{ backgroundColor: "#f1b44c" }}
      >
        <Container>
          <Row>
            <Col lg="12">
              {/* <p className=" m-0 py-2">
                Notifications are disabled. You might miss some incoming orders-
                <Button className="p-0 border-0 rounded-0 fw-bold">
                  enable notifications.
                </Button>
              </p> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AnnouncementBar;
