import React, { useState, useEffect,useRef } from "react";
import { Container, Row, Col, Button, Breadcrumb, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SELECT } from "../../../../Common/InputFields";
import {
  addVehicleModel,
  updateVehicleModel,
  getVehicleModelDetails,
  vehicleMakeList
} from "../../../../store/actions";

const AddVehicleModelIndex = () => {
  const EditId = location.pathname.split("/")[4];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compMounted = useRef();
  const vehicleMakes = [];

  const [data, setData] = useState({
    vehicleModelId: "",
    name: "",
    vehicleMakeId: "",
    vehicleMake: ""
  });

  const [errors, setError] = useState({
    vehicleModelId: "",
    name: "",
    vehicleMakeId: "",
    vehicleMake: "",
    disabled: true,
  });

  const VehicleModelData = useSelector((s) => s.Catalog.vehicleModelDetails?.data);

  useEffect(() => {
    if (EditId) {
      dispatch(getVehicleModelDetails(EditId.toString()));
    }

    setData((pre) => ({
      ...pre,
      vehicleModelId: EditId,
    }));
  }, [EditId]);

  useEffect(() => {
    if (compMounted.current) {
      setData((pre) => ({
        ...pre,
        name: VehicleModelData?.name,
        vehicleModelId: VehicleModelData?._id,
        vehicleMakeId: VehicleModelData?.vehicleMakeId,
        vehicleMake: VehicleModelData?.vehicleMakeDetails?.name
      }));
    } else {
      compMounted.current = true;
    }
  }, [VehicleModelData]);

  useEffect(() => {
    dispatch(vehicleMakeList({ limit: 100 }));
  }, []);

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

  const vehicleMakesData = useSelector((s) => s.Catalog.vehicleMakeList?.data);

  vehicleMakesData?.forEach((element) => {
    vehicleMakes.push({ [element._id]: element.name });
  });

  const handleDropDown = (e) => {
    const Error = { ...errors };
    var selectedMake = vehicleMakesData.filter((element) => {
      return element._id === e.target.value;
    });
    setData((pre) => ({
      ...pre,
      vehicleMake: selectedMake[0]?.name,
      vehicleMakeId: selectedMake[0]?._id,
    }));
    Error["disabled"] = false;
    setError((pre) => ({ ...pre, ...Error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/catalog/vehicle-models");
        }, 500);
      } else {
        toast.error(response.message);
      }
    };
    if (EditId) {
      if (data.vehicleModelId) {
        data.vehicleModelId = data.vehicleModelId;
      }

      dispatch(
        updateVehicleModel(
          {
            ...data,
          },
          callBack
        )
      );
    } 
    else {
      dispatch(
        addVehicleModel(
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
                  <Breadcrumb.Item href="/catalog/vehicle-models">Vehicle Models</Breadcrumb.Item>
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

                    <Col lg="6" className="my-2">
                      <SELECT
                        label="Select Vehicle Make"
                        value={data?.vehicleMakeId}
                        onChange={handleDropDown}
                        data={vehicleMakes}
                        defaultValue=""
                      />
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
                          to="/catalog/vehicle-models"
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
export default AddVehicleModelIndex;
