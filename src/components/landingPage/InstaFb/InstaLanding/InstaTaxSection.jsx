import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const InstaTaxSection = () => {
    return (
        <>
        <section className="insta-tax-section position-relative">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                    <div className="img-tax-insta">
                     <img src="../../../assets/images/insta-left.png" alt="" className="img-fluid" />
                    </div>
                    </Col>
                    <Col md={6}>
                     <div className="content-right-tax">
                        <h2>What is Tax Relief?</h2>
                        <p>Falling behind on tax payments to the IRS is something that millions of Americans have dealt with at one time or another. Owing money to the IRS can be very intimidating, but don’t worry and definitely don’t lose hope – there is tax relief available. A reputable tax relief company can help you reach a tax relief agreement with the IRS.
</p>
<p>
Using proven strategies, our knowledgeable experts can assist you through tax audits, help reduce your tax debt, and stop wage garnishments and bank levies from happening. In some cases, you may be able to settle tax debts for much less than was originally owed.The tax relief experts at Optima Tax Relief are available to be your dedicated resource to save you the most money while resolving your IRS debt in the shortest amount of time possible.</p>
                     </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
