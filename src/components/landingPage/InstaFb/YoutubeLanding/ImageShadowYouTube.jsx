import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
export const ImageShadowYouTube = () => {
    return (
        <>
            <section className="shadow-image-youtube position-relative">
                <div className="shape-last-sectionyoutube">
                    <img src="../../../assets/images/topshapebplue-youtbe.svg" alt="" className="img-fluid" />
                </div>
                <Container fluid>
                    <div className="heading-shadowimages text-center">
                        <p>The first-time penalty abatement is the most commonly available type of waiver allowed by the IRS. If you have a good history of filing and paying taxes on time and you don’t have a record of penalties, you may be qualified for first-time penalty abatement where the IRS waives the penalty.</p>
                    </div>
                    <Row>
                        <Col md={4}>
                            <div className="image-shadow">
                                <img src="../../../assets/images/shdow-img1.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="image-shadow">
                                <img src="../../../assets/images/shadowimg2.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="image-shadow">
                                <img src="../../../assets/images/shazdowimg3.png" alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
