import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

export const TikTokPerfectSection = () => {
    return (
        <>
            <section className="tiktok-perfect">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="left-img-perfect-tiktok">
                                <img src="../../../assets/images/tiktok-img-2.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="content-right-perfect">
                                <h2>This is Perfectly Reasonable.</h2>
                                <p>One of the common avenues for tax relief is an IRS Repayment Plan. This will allow you to split the total amount owed into manageable payments and avoid garnishments and levies
                                </p>
                                <p>
                                    Many people feel their confidence decreasing once they face the complex and grueling process of dealing with taxes. This is perfectly reasonable. There is a reason professionals such as enrolled agents and certified public accountants and tax relief programs exist. These professionals understand and can stay on top of the</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
