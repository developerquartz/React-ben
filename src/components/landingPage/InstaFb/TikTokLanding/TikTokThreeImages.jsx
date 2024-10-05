import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const TikTokThreeImages = () => {
    return (
        <>
            <section className="tiktok-three-image mt-5">
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <div className="content-all-three-tiktok text-center">
                                <h2>You must make the required tax return</h2>
                                <p>The first-time penalty abatement is the most commonly available type of waiver allowed by the IRS. If you have a good history of filing and paying taxes on time and you don’t have a record of penalties, you may be qualified for first-time penalty abatement where the IRS waives the penalty.</p>
                                <img src="../../../assets/images/tiktok-three-imhg.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
