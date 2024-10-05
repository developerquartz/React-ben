import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { InputAdornment, withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Container, Row, Col } from "reactstrap";
import Switch from "@material-ui/core/Switch";
import { DatePicker } from "material-ui-pickers";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Tooltip from "@material-ui/core/Tooltip";
// import PlacesAutocomplete from "react-places-autocomplete";
// import { COUNTRIES } from "./countries";
// import IntlMessages from "../../util/IntlMessages";
// import {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
// } from "react-places-autocomplete";

//----------------------------------------------------//
//-------------------- TEXT FIELD ---------------------//
//----------------------------------------------------//
const TEXTFIELD = (props) => {
  const {
    label,
    type,
    onChange,
    className,
    name,
    margin,
    value,
    helperText,
    errors,
  } = props;
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={(event) => onChange(event)}
      onFocus={(event) => onChange(event)}
      onBlur={(event) => onChange(event)}
      className={className}
      margin={margin}
      {...props}
      error={errors[name] && errors[name].length > 0 ? true : false}
      helperText={
        errors[name] && errors[name].length > 0 ? (
          <IntlMessages id={`${errors[name]}`} />
        ) : (
          helperText
        )
      }
      fullwidth
    />
  );
};

TEXTFIELD.defaultProps = {
  type: "text",
  className: "input-text",
  label: "Text Input",
  name: "",
  margin: "normal",
  value: "",
  helperText: "",
  errors: {},
};
TEXTFIELD.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
//-------------------------------------------------/
//------------------SELECT ------------------------/
//-------------------------------------------------/

const SELECT = (props) => {
  const {
    label,
    all,
    type,
    onChange,
    className,
    name,
    margin,
    value,
    data,
    helperText,
    errors,
  } = props;
  let MenuItems =
    data.length > 0 &&
    data.map((keys, index) => {
      for (let [key, value] of Object.entries(keys)) {
        return <MenuItem value={key}>{value}</MenuItem>;
      }
    });

  return (
    <FormControl
      style={{ width: "100%", margin: "15px 0px 0px" }}
      className="select-simple"
      error={errors[name] && errors[name].length > 0 ? true : false}
    >
      <InputLabel id="demo-mutiple-checkbox-label">{label}</InputLabel>
      <Select value={value} name={name} onChange={(event) => onChange(event)}>
        <MenuItem value="">
          <em>{all ? "All" : "None"}</em>
        </MenuItem>
        {data.length > 0 && MenuItems}
      </Select>
      <FormHelperText>
        {errors[name] && errors[name].length > 0 ? errors[name] : helperText}
      </FormHelperText>
    </FormControl>
  );
};

SELECT.defaultProps = {
  className: "select-box",
  label: "Text Input",
  fieldName: "",
  margin: "normal",
  helperText: "",
  errors: {},
  all: false,
};
SELECT.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};
const SELECT2 = (props) => {
  const {
    label,
    all,
    type,
    onChange,
    className,
    name,
    margin,
    value,
    data,
    helperText,
    errors,
  } = props;
  let MenuItems =
    data.length > 0 &&
    data.map((keys, index) => {
      return <MenuItem value={keys._id}>{keys.name}</MenuItem>;
    });

  return (
    <FormControl
      style={{ width: "100%", margin: "15px 0px 0px" }}
      className="select-simple"
      error={errors[name] && errors[name].length > 0 ? true : false}
    >
      <InputLabel id="demo-mutiple-checkbox-label">{label}</InputLabel>
      <Select value={value} name={name} onChange={(event) => onChange(event)}>
        <MenuItem value="">
          <em>{all ? "All" : "None"}</em>
        </MenuItem>
        {data.length > 0 && MenuItems}
      </Select>
      <FormHelperText>
        {errors[name] && errors[name].length > 0 ? errors[name] : helperText}
      </FormHelperText>
    </FormControl>
  );
};

SELECT2.defaultProps = {
  className: "select-box",
  label: "Text Input",
  fieldName: "",
  margin: "normal",
  helperText: "",
  errors: {},
  all: false,
};
SELECT2.propTypes = {
  name: PropTypes.string,
  data: PropTypes.array,
  onChange: PropTypes.func.isRequired,
};
//-------------------------------------------------/
//------------------Checkbox------------------------/
//-------------------------------------------------/

const CHECKBOX = (props) => {
  const { labelPlacement, label, color, value, name, onChange } = props;
  return (
    <FormControlLabel
      value={value}
      control={
        <Checkbox
          checked={value}
          onChange={(event) => onChange(event)}
          name={name}
          color={color}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

CHECKBOX.defaultProps = {
  labelPlacement: "start",
  label: "Checkbox",
  name: "",
  value: false,
  color: "primary",
};

CHECKBOX.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
//-------------------------------------------------/
//----------------Password------------------------/
//-------------------------------------------------/
const styles = (theme) => ({
  eye: {
    cursor: "pointer",
  },
});
const PASSWORDFIELD = (props) => {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);

  return (
    <Tooltip title={props.note} arrow>
      {props.edit ? (
        <Row>
          <Col md="4" xs="12">
            <FormControlLabel
              value="top"
              control={
                <Switch checked={check} onChange={() => setCheck(!check)} />
              }
              style={{ fontSize: "xx-small" }}
              // label={<IntlMessages id="field.password" />}
              labelPlacement="bottom"
            />
          </Col>
          {check && (
            <Col md="8" xs="12">
              <TEXTFIELD
                // label={<IntlMessages id="field.password" />}
                type={show === false ? "password" : "text"}
                {...props}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShow(!show)}
                        onMouseDown={() => setShow(!show)}
                      >
                        {show ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Col>
          )}
        </Row>
      ) : (
        <TEXTFIELD
          type={show === false ? "password" : "text"}
          {...props}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShow(!show)}
                  onMouseDown={() => setShow(!show)}
                >
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    </Tooltip>
  );
};
PASSWORDFIELD.defaultProps = {
  className: "input-text",
  label: "Text Input",
  fieldName: "",
  margin: "normal",
  value: "",
  note: "",
  edit: false,
};

PASSWORDFIELD.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
};

const UPDATEPASSWORD = (props) => {
  const [hide, sethide] = useState(false);
  const [show, setShow] = useState(false);
  const hideShow = (value, e) => {
    sethide(value);
    props.onCheck(e);
  };
  return (
    <div className="row update-pass">
      <div className="col-4">
        <FormControlLabel
          control={
            <Checkbox
              checked={hide}
              value={hide}
              name="updatePass"
              onClick={(e) => hideShow(!hide, e)}
              color="default"
            />
          }
          label="Password?"
          labelPlacement="bottom"
        />
      </div>
      <div className="col-8">
        {hide && (
          <Tooltip title={props.note} arrow placement="bottom">
            <FormControlLabel
              control={
                <TextField
                  type={show === false ? "password" : "text"}
                  {...props}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShow(!show)}
                          onMouseDown={() => setShow(!show)}
                        >
                          {show ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              }
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

UPDATEPASSWORD.defaultProps = {
  className: "input-text",
  label: "Update Password",
  fieldName: "",
  margin: "normal",
  value: "",
  note: "",
};

UPDATEPASSWORD.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
};

// PasswordInput = withStyles(styles)(PasswordInput);
//-------------------------------------------------/
//--------------------FileUpload-------------------/
//-------------------------------------------------/

const FILEUPLOAD = (props) => {
  const { label, onChange, className, value, name, accept, errors } = props;
  return (
    <div className={`${className} file-upload`}>
      <label className="btn-bs-file btn jr-btn jr-btn-label left CBmargin CBmarginT">
        <i className="zmdi zmdi-attachment-alt"></i>
        {label}
        <input
          onChange={(e) => onChange(e)}
          type="file"
          name={name}
          accept={accept}
        />
      </label>
      {value.name !== undefined && (
        <span className="success">{value.name}</span>
      )}
      {errors[name] && errors[name].length > 0 ? (
        <span className="error">
          {/* <IntlMessages id={`${errors[name]}`} /> */}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

FILEUPLOAD.defaultProps = {
  className: "upload-btn",
  label: "Upload File",
  accept: ".png, .jpg, .jpeg",
  errors: {},
};

FILEUPLOAD.propTypes = {
  onChange: PropTypes.func.isRequired,
};

//---------------------------------------------------/
//-------------------DATEPICKER  --------------------/
//---------------------------------------------------/

const DATEPICKER = (props) => {
  const { label, value, onChange, scroll } = props;
  return (
    <DatePicker
      label={label}
      openTo="year"
      format="dd/MM/yyyy"
      value={new Date()}
      onChange={onChange}
    />
  );
};

DATEPICKER.defaultProps = {
  value: new Date(Date.now()),
  scroll: false,
};

DATEPICKER.propTypes = {
  onChange: PropTypes.func.isRequired,
};

//---------------------------------------------------/
//------------------BUTTON-------------------------/
//---------------------------------------------------/

const BUTTON = (props) => {
  const { className, name, color, onClick, disabled, icon, title, style } =
    props;
  return (
    <div className="flex-auto Filtertripbutton">
      <Button
        variant="raised"
        color={color}
        name={name}
        className="jr-btn jr-btn-label left CBmargin CBmarginT"
        onClick={(event) => onClick(event)}
        disabled={disabled}
        style={style}
      >
        {icon && <i className={`zmdi ${icon} zmdi-hc-fw `} />}
        <span className="nowrap">{title}</span>
      </Button>
    </div>
  );
};

BUTTON.defaultProps = {
  color: "primary",
  disabled: true,
  name: "",
  icon: "zmdi-search",
  title: "Filter",
  style: {},
};
BUTTON.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const SUBMIT = (props) => {
  const { className, name, color, disabled, icon, title, style } = props;
  return (
    <Button
      variant="raised"
      color={color}
      name={name}
      type="submit"
      className="jr-btn jr-btn-label left CBmargin CBmarginT"
      disabled={disabled}
      style={style}
    >
      {icon && <i className={`zmdi ${icon} zmdi-hc-fw `} />}
      <span className="nowrap">{title}</span>
    </Button>
  );
};

SUBMIT.defaultProps = {
  color: "primary",
  disabled: true,
  name: "",
  icon: "zmdi-check-circle",
  // title: <IntlMessages id="common.submit" />,
  style: {},
};

const RESET = (props) => {
  const { className, name, color, disabled, icon, title, style, onClick } =
    props;
  return (
    <Button
      variant="raised"
      color={color}
      className="jr-btn jr-btn-label left CBmargin CBmarginT"
      disabled={disabled}
      style={style}
      onClick={() => onClick()}
    >
      {icon && <i className={`zmdi ${icon} zmdi-hc-fw `} />}
      <span className="nowrap">{title}</span>
    </Button>
  );
};
RESET.defaultProps = {
  color: "primary",
  disabled: false,
  name: "",
  icon: "zmdi-close-circle",
  // title: <IntlMessages id="common.clear" />,
  style: {},
};

// const GoogleAutocomplete = (props) => {
//   const {
//     address,
//     lat,
//     lng,
//     onChange,
//     label,
//     className,
//     margin,
//     type,
//     errors,
//     helperText,
//     name,
//   } = props;
//   const handleChange = (address) => {
//     if (address == "") {
//       onChange({ address: address, lat: "", lng: "" });
//     } else {
//       onChange({ address: address, lat: lat, lng: lng });
//     }
//   };
//   const handleSelect = (address) => {
//     geocodeByAddress(address)
//       .then((results) => {
//         return getLatLng(results[0]);
//       })
//       .then((latLng) => {
//         onChange({
//           address: address,
//           lat: latLng.lat,
//           lng: latLng.lng,
//         });
//       })
//       .catch((error) => {
//         onChange({
//           address: "NA",
//           lat: "NA",
//           lng: "NA",
//         });
//       });
//   };

//   return (
//     <PlacesAutocomplete
//       value={address}
//       onSelect={handleSelect}
//       onChange={handleChange}
//     >
//       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//         <div>
//           <TextField
//             label={label}
//             type={type}
//             fullWidth
//             error={errors[name] && errors[name].length > 0 ? true : false}
//             helperText={
//               errors[name] && errors[name].length > 0
//                 ? errors[name]
//                 : helperText
//             }
//             className={className}
//             margin={margin}
//             {...getInputProps({
//               placeholder: "Search Places ...",
//               className: "location-search-input",
//             })}
//           />
//           <div className="autocomplete-dropdown-container">
//             {loading && <div>Loading...</div>}
//             {suggestions.map((suggestion) => {
//               const className = suggestion.active
//                 ? "suggestion-item--active"
//                 : "suggestion-item";
//               // inline style for demonstration purpose
//               const style = suggestion.active
//                 ? { backgroundColor: "#fafafa", cursor: "pointer" }
//                 : { backgroundColor: "#ffffff", cursor: "pointer" };
//               return (
//                 <div
//                   {...getSuggestionItemProps(suggestion, {
//                     className,
//                     style,
//                   })}
//                 >
//                   <span>{suggestion.description}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </PlacesAutocomplete>
//   );
// };
// GoogleAutocomplete.defaultProps = {
//   type: "text",
//   className: "input-text",
//   label: "Text Input",
//   margin: "normal",
//   errors: {},
//   helperText: "",
// };

//----------------------------------------------------//
//-------------------- TEXT FIELD ---------------------//
//----------------------------------------------------//
const MOBILENUMBER = (props) => {
  const { label, onChange, className, name, value, countryCode } = props;

  const [error, setError] = useState("");
  let countries = COUNTRIES.map((key) => {
    return { [key.dial_code]: `${key.name}` };
  });

  const mobileChange = (e) => {
    if (isNaN(e.target.value)) {
      setError("Only number allowed");
    } else {
      setError("");
      onChange(e);
    }
  };

  return (
    <div className="row">
      <div className={"SelectTrip SelectCustomer col-4"}>
        <SELECT
          value={countryCode}
          name={"countryCode"}
          label="C Code"
          data={countries}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="col-8">
        <TEXTFIELD
          name={name}
          inputProps={{ pattern: "[0-9]" }}
          label="Mobile No."
          value={value}
          onChange={(e) => mobileChange(e)}
        />
        <p className="error">{error}</p>
      </div>
    </div>
  );
};

MOBILENUMBER.defaultProps = {
  className: "mobile-number",
  label: "",
  name: "",
  value: "",
  defaultCountry: "us",
};
MOBILENUMBER.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export {
  TEXTFIELD,
  MOBILENUMBER,
  SUBMIT,
  RESET,
  PASSWORDFIELD,
  SELECT,
  SELECT2,
  BUTTON,
  FILEUPLOAD,
  DATEPICKER,
  UPDATEPASSWORD,
  // GoogleAutocomplete,
  CHECKBOX,
};
