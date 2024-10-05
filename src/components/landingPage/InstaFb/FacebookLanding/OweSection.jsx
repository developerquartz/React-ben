import React from 'react'
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";


export const OweSection = () => {
    return (
        <>
            <section className="owe-main-section">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={3}>
                            <div className="image-left-owe">
                                <img src="../../../assets/images/resolution-girl.png" alt="" className="img-fluid w-100" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="center-cntnt-owe">
                                <p>OWE THE IRS OVER</p>
                                <span className="price-owe">$30K</span>
                                <h4>And Want</h4>
                                <h3>RESOLUTION?</h3>
                                <p className="text-owe-para">Falling behind on tax payments to the IRS is something that millions of Americans have dealt with at one time or another. Owing money to the IRS can be very intimidating</p>
                            </div>
                        </Col>
                        <Col md={5}>
                        <div className="right-image-owe">
                            <img src="../../../assets/images/handsome-smiling-young-guy-posing-against-white-wall.png" alt="" className="img-fluid w-100" />
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
