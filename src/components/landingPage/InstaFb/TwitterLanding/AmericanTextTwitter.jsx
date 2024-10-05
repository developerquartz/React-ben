import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const AmericanTextTwitter = () => {
    return (
        <>
            <section className="american-text-twitter pb-5 mt-5 position-relative">
              
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="content-image-twitter-amrcan text-center">
                                <h2 className='pt-3'>American Tax Settlement</h2>
                                <p>Offer in Compromise is a negotiation between the IRS and an individual who struggles to pay their tax liability in full or will experience financial hardship in doing so. This is also a legitimate method to settle tax delinquencies for a reduced amount. There are certain factors to consider such as income, ability to pay, and asset equity.</p>
                              <img src="../../../assets/images/get-bakc-phone.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
