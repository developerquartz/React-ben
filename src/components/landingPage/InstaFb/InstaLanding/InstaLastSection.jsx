import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
export const InstaLastSection = () => {
    return (
        <>
            <section className="insta-tax-section insta-last position-relative">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <div className="img-tax-insta">
                                <img src="../../../assets/images/last-round-instaimg.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="content-right-tax">
                                <h2>Lots of People Get Tax Relief</h2>
                                <p>The tax code is REALLY complicated. So many Americans end up in a situation where we owe more to the IRS than we can afford to pay. Lots of people end up with big debts to the IRS.
                                </p>
                                <p>
                                    Now we’re in a really tough situation – because the IRS is the world’s most powerful collection agency. They can do some scary things like seize your home or bank accounts</p>
                                <p>The tax code is REALLY complicated. So many Americans end up in a situation where we owe more to the IRS than we can afford to pay. Lots of people end up with big debts to the IRS. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
