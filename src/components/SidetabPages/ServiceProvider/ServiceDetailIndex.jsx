import React from "react";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const ServiceDetailIndex = () => {
    // const id = location.pathname.split("/")[4];

    const bLocation = useLocation();
    const backLink = bLocation?.state?.backLink;
    const serviceDetails = JSON.parse(bLocation?.state?.serviceData);
    var addOnsValue = "";
    if(serviceDetails?.addOns?.length > 1){
        serviceDetails?.addOns?.map(addOn => {
            addOnsValue += addOn.addOnName+ ", ";
        });
    }
    else if(serviceDetails?.addOns?.length == 1){
        addOnsValue = serviceDetails?.addOns?.[0].addOnName;
    }
    return (
        <>
            <section className="dashboard profile-main py-2">
                <Container>
                    <Row>
                        <Col lg="12" className="my-2">
                            <div className="top mb-2">
                                <Breadcrumb>
                                    <Breadcrumb.Item href={backLink}>Provider Service</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>

                        <div className="bg-white card-box px-4 py-3 rounded">
                            <Form>
                                <Row>
                                    <Col lg="12" className="my-2">
                                        <label htmlFor="" className="form-label2 m-0">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form-control"
                                            value={serviceDetails?.serviceName}
                                            name="serviceName"
                                            disabled={true}
                                        />
                                    </Col>

                                    <Col lg="12" className="my-2">
                                        <label htmlFor="" className="form-label2 m-0">
                                            Short Desc
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form-control"
                                            value={serviceDetails?.serviceShortDesc}
                                            name="serviceShortDesc"
                                            disabled={true}
                                        />
                                    </Col>

                                    <Col lg="12" className="my-2">
                                        <label htmlFor="" className="form-label2 m-0">
                                            Category
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form-control"
                                            value={serviceDetails?.serviceCategory}
                                            name="serviceCategory"
                                            disabled={true}
                                        />
                                    </Col>

                                    <Col lg="12" className="my-2">
                                        <label htmlFor="" className="form-label2 m-0">
                                            Service Cost
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form-control"
                                            value={serviceDetails?.serviceCost}
                                            name="serviceCost"
                                            disabled={true}
                                        />
                                    </Col>

                                    <Col lg="12" className="my-2">
                                        <label htmlFor="" className="form-label2 m-0">
                                            Distance Cost
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form-control"
                                            value={serviceDetails?.distanceCost}
                                            name="distanceCost"
                                            disabled={true}
                                        />
                                    </Col>

                                    <Col lg="12" className="my-2 cstm-select">
                                        <label htmlFor="" className="form-label2 mb-2">
                                            Add Ons
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="form-control"
                                            value={addOnsValue}
                                            name="addOns"
                                            disabled={true}
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Row>
                </Container>

                <div className="py-2 mx-2">
                    <Row>
                        <Col lg="12" className="my-2">
                            <div className="pt-3 btn-wrp d-flex algign-items-center">
                                <Link
                                    to={backLink}
                                    className="d-flex btn-2 border align-items-center justify-content-center me-2"
                                >
                                    <span className="me-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="9"
                                            viewBox="0 0 12 9"
                                            fill="none"
                                        >
                                            <path
                                                d="M2.8725 3.75L5.5575 1.0575L4.5 0L0 4.5L4.5 9L5.5575 7.9425L2.8725 5.25H12V3.75H2.8725Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                    Back
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
}
export default ServiceDetailIndex;