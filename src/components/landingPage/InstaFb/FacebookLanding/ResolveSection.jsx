import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
export const ResolveSection = () => {
    return (
        <>
            <section className="trust-facebook-section tax-facebook-section mt-5 pt-3 pb-5">
                <Container fluid>
                    <Row className='align-items-center'>
                      
                        <Col md={6}>
                            <div className="content-right-trust">
                                <h2>Lots of People Get Tax<br/> Relief</h2>
                                <p>The tax code is REALLY complicated. So many Americans end up in a situation where we owe more to the IRS than we can afford to pay. Lots of people end up with big debts to the IRS.</p>
                                <p>Now we’re in a really tough situation – because the IRS is the world’s most powerful collection agency. They can do some scary things like seize your home or bank accounts, garnish your wages, and a bunch of other things that no other collection agency can do.</p>

                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="left-image-trust right-img-tax position-relative">
                                <img src="../../../assets/images/resolve-image--facebook.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
