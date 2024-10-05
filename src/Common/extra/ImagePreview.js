import React, { Fragment } from "react";
import { Card, CardBody } from "reactstrap";

const ImagePreview = (props) => {
  const noImage = ["", null, undefined, "none"];
  const { style, src } = props;
  let image = noImage.includes(src)
    ? require(`../../assest/images/noimage.jpg`)
    : src;
  return (
    <Fragment>
      <img alt="No preview" className="no-preview" style={style} src={image} />
    </Fragment>
  );
};
ImagePreview.defaultProps = {
  src: "",
  style: {},
};

export default ImagePreview;
