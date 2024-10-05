import React, { Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import gif from "../../assest/images/loader.gif";

const NotFound = ({ className }) => (
  <>
    <div className={`${className} text-center h-100 w-100 loader-admin`}>
      <img alt="No data available" src={gif} />
    </div>
  </>
);

export default NotFound;
