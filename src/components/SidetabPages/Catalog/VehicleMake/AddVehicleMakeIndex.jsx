import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addVehicleMake,
  updateVehicleMake,
  getVehicleMakeDetails,
} from "../../../../store/actions";

const AddVehicleMakeIndex = () => {
  const EditId = location.pathname.split("/")[4];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();

  const [data, setData] = useState({
    vehicleMakeId: "",
    name: "",
  });

  const [errors, setError] = useState({
    vehicleMakeId: "",
    name: "",
    disabled: true,
  });

  const VehicleMakeData = useSelector((s) => s.Catalog.vehicleMakeDetails?.data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };

    switch (name) {
      case "name":
        Error[name] = "";
        if (value.length < 2) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = false;
        }
        break;
      default:
        break;
    }
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  useEffect(() => {
    if (EditId) {
      dispatch(getVehicleMakeDetails(EditId.toString()));
    }
    setData((pre) => ({
      ...pre,
      vehicleMakeId: EditId,
    }));
  }, [EditId]);

  useEffect(() => {
    if (compMounted.current) {
      setData((pre) => ({
        ...pre,
        name: VehicleMakeData?.name,
        vehicleMakeId: VehicleMakeData?._id,
      }));
    } else {
      compMounted.current = true;
    }
  }, [VehicleMakeData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/catalog/vehicle-makes");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (EditId) {
      if (data.vehicleMakeId) {
        data.vehicleMakeId = data.vehicleMakeId;
      }

      dispatch(
        updateVehicleMake(
          {
            ...data,
          },
          callBack
        )
      );
    } 
    else {
      dispatch(
        addVehicleMake(
          {
            ...data,         
          },
          callBack
        )
      );
    }
  };

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <Breadcrumb>
                  <Breadcrumb.Item href="/catalog/vehicle-makes">Vehicle Makes</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {EditId ? "Edit" : "Add"}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white card-box px-4 py-3 rounded">
                <Form>
                  <Row>
                    <Col lg="6" className="my-2">
                      <label htmlFor="" className="form-label2 m-0">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        value={data?.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.name}
                      </span>
                    </Col>
                   
                    <Col lg="12" className="my-2">
                      <div className="pt-4 btn-wrp d-flex algign-items-center">
                        <Button
                          disabled={errors.disabled}
                          onClick={handleSubmit}
                          className="d-flex align-items-center justify-content-center me-2"
                        >
                          Submit
                        </Button>
                        <Link
                          to="/catalog/vehicle-makes"
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
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AddVehicleMakeIndex;
