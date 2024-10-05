import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const InstaConsult = () => {
    return (
        <>
            <section className="insta-consult-section position-relative">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="content-all-consult text-center">
                                <h2>Consultation</h2>
                                <p>Falling behind on tax payments to the IRS is something that millions of Americans have dealt with at one time or another. Owing money to the IRS can be very intimidating, but don’t worry and definitely don’t lose hope – there is tax relief available. A reputable tax relief company can help you reach a tax relief agreement with the IRS.</p>
                              <div className="img-three-consult">
                                <img src="../../../assets/images/three-img-insta.png" alt="" className="img-fluid" />
                              </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
