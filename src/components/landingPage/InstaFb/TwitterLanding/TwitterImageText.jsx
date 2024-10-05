import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const TwitterImageText = () => {
  return (
<>
 <section className="twitter-image-text position-relative mt-5">
    <Container fluid className='ps-0'>
        <Row className="align-items-center">
            <Col md={7}>
                <div className="left-twitter-image">
                    <img src="../../../assets/images/twiiter-second-section-imagew.png" alt="" className="img-fluid" />
                </div>
            </Col>
            <Col md={5}>
                <div className="right-text-twitter">
                    <h2>There are different types<br/> of tax relief</h2>
                    <p>including tax deductions, tax credits, and tax forgiveness. In essence, tax relief consists of IRS programs that were designed to reduce one’s tax bill.
                    </p>
                        <p>
                        Offer in Compromise is a negotiation between the IRS and an individual who struggles to pay their tax liability in full or will experience financial hardship in doing so. This is also a legitimate method to settle tax delinquencies for a reduced amount. There are certain factors to consider such as income, ability to pay, and asset equity.</p>
                </div>
            </Col>
        </Row>
    </Container>
 </section>
</>
  )
}
