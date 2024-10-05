import React, { Component, useState, Fragment } from "react";
import moment from "moment";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import { Loading } from "../index";
import Loading from "../Common/extra/loading";
import Status from "../Common/Status";
import { NavLink, withRouter, Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class DataTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <table className="table common-table">{this.props.children}</table>;
  }
}

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="inner">
      <p className="text">
        {isReadMore ? text.slice(0, 50) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "  ...read more" : " show less"}
        </span>
      </p>
    </div>
  );
};

const DataTableHead = (props) => {
  const { columns, sort, orderBy, style } = props;
  const updateProps = (data) => {
    if (sort) sort(data);
  };
  let rightColums = ["action"];
  return (
    <thead>
      <tr className="text-center" align="center">
        {columns?.map((column) => {
          return (
            <th
              key={column.id}
              style={style}
              align={!rightColums.includes(column.id) ? "left" : "right"}
              padding={column.disablePadding ? "none" : "default"}
              // onClick={() =>
              //   updateProps({
              //     key: column.id,
              //     order: parseInt(column.order) === 1 ? 1 : -1,
              //   })
              // }
            >
              {column.label}
              {orderBy === column.id && orderBy.toLowerCase() !== "action" && (
                <TableSortLabel
                  active={true}
                  direction={column.order === 1 ? "desc" : "asc"}
                />
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

DataTableHead.defaultProps = {
  style: {},
};

const TableCellPrint = (Dkey, key, index) => {
  let notDisplay = ["_id", "action"];
  let noImage = ["", null, undefined, "none"];
  switch (key.type) {
    case "tag": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          <span className={`label status ${Dkey[key.id]}`}>
            {Status[Dkey[key.id]]
              ? Status[Dkey[key.id]]
              : Dkey[key.id] &&
                Dkey[key.id].charAt(0).toUpperCase() + Dkey[key.id].slice(1)}
          </span>
        </td>
      );
      break;
    }
    case "disputeStatus": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          <span className={`label status ${Dkey[key.id]}`}>
            {Dkey[key.id].charAt(0).toUpperCase() + Dkey[key.id].slice(1)}
          </span>
        </td>
      );
      break;
    }
    case "type": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {Dkey[key.id].charAt(0).toUpperCase() + Dkey[key.id].slice(1)}
        </td>
      );
      break;
    }
    case "statustag": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {Dkey.status == "1" ? (
            <span className={`label status active`}> Active </span>
          ) : (
            <span className={`label status inactive`}> InActive </span>
          )}
        </td>
      );
      break;
    }
    case "action": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {key.action(Dkey)}
        </td>
      );
      break;
    }
    case "descriptionaction": {
      return (
        <td
          className="text-center post-descption-table"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {key.action(Dkey) && key.action(Dkey).length > 50 ? (
            <ReadMore>{key.action(Dkey)}</ReadMore>
          ) : (
            key.action(Dkey)
          )}

          {/* {key.action(Dkey)} */}
        </td>
      );
      break;
    }
    case "name": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {key.action(Dkey)}
        </td>
      );
      break;
    }
    case "vehicleMake": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {Dkey[key.id]?.name || "--"}
        </td>
      );
      break;
    }
    case "service": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {Dkey[key.id]?.name || "--"}
        </td>
      );
      break;
    }
    case "addOnCount": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {Dkey[key.id]?.length || "0"}
        </td>
      );
      break;
    }
    case "image": {
      return (
        <td
          className="text-center"
          padding="none"
          key={index}
          align="center"
          style={key.style ? key.style : {}}
        >
          <div className="user-profile d-flex flex-row justify-content-center">
            <Avatar
              alt={Dkey["name"]}
              src={!noImage.includes(Dkey[key.image]) ? Dkey[key.image] : ""}
              className="ml-3 user-avatar"
            />
            {/* <div className="user-detail2">{Dkey[key.id]}</div> */}
          </div>
        </td>
      );
      break;
    }
    case "logo": {
      return (
        <td
          className="text-center"
          padding="none"
          key={index}
          align="center"
          style={key.style ? key.style : {}}
        >
          <div className="user-profile d-flex flex-row justify-content-center">
            <Avatar
              alt={Dkey["name"]}
              src={!noImage.includes(Dkey[key.id]) ? Dkey[key.id] : ""}
              className="ml-1 logo-icn"
            />
            {/* <div className="user-detail2">{Dkey[key.id]}</div> */}
          </div>
        </td>
      );
      break;
    }
    case "Postimage": {
      return (
        <td
          className="text-center"
          padding="none"
          key={index}
          align="center"
          style={key.style ? key.style : {}}
        >
          <div className=" d-flex flex-row justify-content-center">
            {Dkey.mediaType == "video" ? (
              <video
                alt={Dkey["name"]}
                src={!noImage.includes(Dkey[key.image]) ? Dkey[key.image] : ""}
                className="ml-3 post-box"
              />
            ) : (
              <Avatar
                alt={Dkey["name"]}
                src={!noImage.includes(Dkey[key.image]) ? Dkey[key.image] : ""}
                className="ml-3 post-box"
              />
            )}
          </div>
        </td>
      );
      break;
    }
    case "bookingNumber": {
      return (
        <td
          className="text-center"
          padding="none"
          align="center"
          style={key.style ? key.style : {}}
        >
          {Dkey[key.id]?.bookingNumber || "--"}
        </td>
      );
      break;
    }
    case "date": {
      // let format = key.date ? key.date : "YYYY-MM-DD";
      return (
        <td
          padding="none"
          align="center"
          key={index}
          style={key.style ? key.style : {}}
        >
          {moment.utc(Dkey[key.id]).format("DD-MM-YYYY")}
        </td>
      );
      break;
    }
    case "dateTime": {
      // let format = key.date ? key.date : "YYYY-MM-DD";
      return (
        <td
          padding="none"
          align="center"
          key={index}
          style={key.style ? key.style : {}}
        >
          {moment.utc(Dkey[key.id]).format("DD-MM-YYYY, hh:mm A")}
        </td>
      );
      break;
    }
    case "amount": {
      return (
        <td
          padding="none"
          align="center"
          key={index}
          style={key.style ? key.style : {}}
        >
          $ {Dkey[key.id] || "0"}
        </td>
      );
      break;
    }
    default: {
      if (Array.isArray(Dkey[key.id]) || key.numeric) {
        return (
          <td
            padding="none"
            align="center"
            key={index}
            style={key.style ? key.style : {}}
          >
            {Dkey[key.id] && Dkey[key.id].length > 0 ? Dkey[key.id].length : 0}
          </td>
        );
      } else {
        return (
          <td
            padding="none"
            align="center"
            key={index}
            style={key.style ? key.style : {}}
          >
            {Dkey[key.id] || "--"}
          </td>
        );
      }

      break;
    }
  }
};

class DataTableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      loading,
      page,
      rowsPerPage,
      data,
      column,
      actions,
      actionBtn,
      docBtn,
      popupBtn,
    } = this.props;
    let columnNames = column
      ?.map((key) => {
        return key;
      })
      .filter((key) => (key != "_id" && key != "action") || key != "action1");
    let notDisplay = ["_id", "action", "action1"];
    return (
      <tbody>
        {loading === false &&
          data?.length > 0 &&
          data?.map((Dkey, index) => {
            return (
              <tr hover tabIndex={-1} key={Dkey._id}>
                <td padding="none" align="center">
                  {++index + page * rowsPerPage}{" "}
                </td>
                {column.map((key, index) => {
                  if (!notDisplay.includes(key.id)) {
                    return TableCellPrint(Dkey, key, index);
                  }
                })}
                {/* {actions && (
                  <td padding="none" align="right" key={index}>
                    <Action actions={actions} />
                  </td>
                )} */}
                {actionBtn && actionBtn.length > 0 && (
                  <td padding="none" align="center" className="" key={index}>
                    <div className="action-btn d-flex justify-content-center align-items-center">
                      {actionBtn.map((key, i) => {
                        if (key["label"] === "View") {
                          return (
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>View Details</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                to={`${key.link}/${Dkey.id}`}
                                state={{
                                  backLink: `${key.backUrl?.backLink}`,
                                  serviceData: JSON.stringify(
                                    key.serviceData?.[index - 1]
                                  ),
                                }}
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M7.00001 5.25C6.53588 5.25 6.09076 5.43437 5.76257 5.76256C5.43438 6.09075 5.25001 6.53587 5.25001 7C5.25001 7.46413 5.43438 7.90925 5.76257 8.23744C6.09076 8.56563 6.53588 8.75 7.00001 8.75C7.46414 8.75 7.90926 8.56563 8.23745 8.23744C8.56564 7.90925 8.75001 7.46413 8.75001 7C8.75001 6.53587 8.56564 6.09075 8.23745 5.76256C7.90926 5.43437 7.46414 5.25 7.00001 5.25ZM7.00001 9.91667C6.22646 9.91667 5.4846 9.60938 4.93762 9.06239C4.39063 8.51541 4.08334 7.77355 4.08334 7C4.08334 6.22645 4.39063 5.48459 4.93762 4.93761C5.4846 4.39062 6.22646 4.08333 7.00001 4.08333C7.77356 4.08333 8.51542 4.39062 9.0624 4.93761C9.60939 5.48459 9.91668 6.22645 9.91668 7C9.91668 7.77355 9.60939 8.51541 9.0624 9.06239C8.51542 9.60938 7.77356 9.91667 7.00001 9.91667M7.00001 2.625C4.08334 2.625 1.59251 4.43917 0.583344 7C1.59251 9.56083 4.08334 11.375 7.00001 11.375C9.91668 11.375 12.4075 9.56083 13.4167 7C12.4075 4.43917 9.91668 2.625 7.00001 2.625Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          );
                        } else if (key["label"] === "ViewDoc") {
                          return (
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>View Doc</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                to={`${key.link}/${Dkey.id}`}
                                state={{
                                  backLink: `${key.backUrl?.backLink}`,
                                  serviceData: JSON.stringify(
                                    key.serviceData?.[index - 1]
                                  ),
                                }}
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M7.00001 5.25C6.53588 5.25 6.09076 5.43437 5.76257 5.76256C5.43438 6.09075 5.25001 6.53587 5.25001 7C5.25001 7.46413 5.43438 7.90925 5.76257 8.23744C6.09076 8.56563 6.53588 8.75 7.00001 8.75C7.46414 8.75 7.90926 8.56563 8.23745 8.23744C8.56564 7.90925 8.75001 7.46413 8.75001 7C8.75001 6.53587 8.56564 6.09075 8.23745 5.76256C7.90926 5.43437 7.46414 5.25 7.00001 5.25ZM7.00001 9.91667C6.22646 9.91667 5.4846 9.60938 4.93762 9.06239C4.39063 8.51541 4.08334 7.77355 4.08334 7C4.08334 6.22645 4.39063 5.48459 4.93762 4.93761C5.4846 4.39062 6.22646 4.08333 7.00001 4.08333C7.77356 4.08333 8.51542 4.39062 9.0624 4.93761C9.60939 5.48459 9.91668 6.22645 9.91668 7C9.91668 7.77355 9.60939 8.51541 9.0624 9.06239C8.51542 9.60938 7.77356 9.91667 7.00001 9.91667M7.00001 2.625C4.08334 2.625 1.59251 4.43917 0.583344 7C1.59251 9.56083 4.08334 11.375 7.00001 11.375C9.91668 11.375 12.4075 9.56083 13.4167 7C12.4075 4.43917 9.91668 2.625 7.00001 2.625Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          );
                        } else if (key["label"] === "Delete") {
                          return (
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Delete</Tooltip>
                              )}
                              placement="top"
                            >
                              <Button
                                onClick={(e) => {
                                  key.action(true, Dkey.id);
                                }}
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M11.8825 5.1975L11.2992 6.20667L4.22333 2.12333L4.80667 1.11417L6.58 2.135L7.37333 1.91917L9.89917 3.3775L10.115 4.17667L11.8825 5.1975ZM3.5 11.0833V4.08333H6.4575L10.5 6.41667V11.0833C10.5 11.3928 10.3771 11.6895 10.1583 11.9083C9.9395 12.1271 9.64275 12.25 9.33333 12.25H4.66667C4.35725 12.25 4.0605 12.1271 3.84171 11.9083C3.62292 11.6895 3.5 11.3928 3.5 11.0833Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Button>
                            </OverlayTrigger>
                          );
                        } else if (key["label"] === "Edit") {
                          return (
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Edit</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                to={`${key.link}/${Dkey.id}`}
                                state={{ backLink: `${key.backUrl?.backLink}` }}
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                >
                                  <path
                                    d="M10.2583 4.20624L7.77917 1.75624L8.59583 0.939573C8.81944 0.715962 9.09419 0.604156 9.42008 0.604156C9.74558 0.604156 10.0201 0.715962 10.2437 0.939573L11.0604 1.75624C11.284 1.97985 11.4007 2.24974 11.4104 2.56591C11.4201 2.88168 11.3132 3.15138 11.0896 3.37499L10.2583 4.20624ZM9.4125 5.06666L3.22917 11.25H0.75V8.77082L6.93333 2.58749L9.4125 5.06666Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          );
                        } else if (key["label"] === "Mail") {
                          return (
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Send Mail</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                to={`${key.link}/${Dkey.id}`}
                                state={{ backLink: `${key.backUrl?.backLink}` }}
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M12.5417 4.95133V9.84375C12.5417 10.6896 11.8562 11.375 11.0104 11.375H2.98958C2.58347 11.375 2.19399 11.2137 1.90682 10.9265C1.61966 10.6393 1.45833 10.2499 1.45833 9.84375V4.95133L6.82441 7.903C6.93379 7.96308 7.06649 7.96308 7.17558 7.903L12.5417 4.95133ZM11.0104 2.625C11.4101 2.62504 11.794 2.78138 12.08 3.06063C12.366 3.33987 12.5315 3.71989 12.5411 4.1195L6.99999 7.16742L1.45891 4.11921L1.45949 4.09296C1.47583 3.69812 1.64418 3.32488 1.92934 3.05129C2.21451 2.77771 2.5944 2.62496 2.98958 2.625H11.0104Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          );
                        } else if (key["label"] === "Text") {
                          return (
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Send SMS</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                to={`${key.link}/${Dkey.id}`}
                                state={{ backLink: `${key.backUrl?.backLink}` }}
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M4.66699 6.41669C4.83227 6.41669 4.97091 6.36069 5.08291 6.24869C5.19491 6.13669 5.25071 5.99824 5.25033 5.83335C5.25033 5.66808 5.19433 5.52944 5.08233 5.41744C4.97033 5.30544 4.83188 5.24963 4.66699 5.25002C4.50171 5.25002 4.36308 5.30602 4.25108 5.41802C4.13908 5.53002 4.08327 5.66847 4.08366 5.83335C4.08366 5.99863 4.13966 6.13727 4.25166 6.24927C4.36366 6.36127 4.5021 6.41708 4.66699 6.41669ZM7.00033 6.41669C7.1656 6.41669 7.30424 6.36069 7.41624 6.24869C7.52824 6.13669 7.58405 5.99824 7.58366 5.83335C7.58366 5.66808 7.52766 5.52944 7.41566 5.41744C7.30366 5.30544 7.16521 5.24963 7.00033 5.25002C6.83505 5.25002 6.69641 5.30602 6.58441 5.41802C6.47241 5.53002 6.4166 5.66847 6.41699 5.83335C6.41699 5.99863 6.47299 6.13727 6.58499 6.24927C6.69699 6.36127 6.83544 6.41708 7.00033 6.41669ZM9.33366 6.41669C9.49894 6.41669 9.63757 6.36069 9.74957 6.24869C9.86157 6.13669 9.91738 5.99824 9.91699 5.83335C9.91699 5.66808 9.86099 5.52944 9.74899 5.41744C9.63699 5.30544 9.49855 5.24963 9.33366 5.25002C9.16838 5.25002 9.02974 5.30602 8.91774 5.41802C8.80574 5.53002 8.74994 5.66847 8.75033 5.83335C8.75033 5.99863 8.80633 6.13727 8.91833 6.24927C9.03033 6.36127 9.16877 6.41708 9.33366 6.41669ZM1.16699 12.8334V2.33335C1.16699 2.01252 1.28133 1.73777 1.50999 1.5091C1.73866 1.28044 2.01321 1.1663 2.33366 1.16669H11.667C11.9878 1.16669 12.2626 1.28102 12.4912 1.50969C12.7199 1.73835 12.834 2.01291 12.8337 2.33335V9.33335C12.8337 9.65419 12.7193 9.92894 12.4907 10.1576C12.262 10.3863 11.9874 10.5004 11.667 10.5H3.50033L1.16699 12.8334Z"
                                    fill="#515463"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          );
                        } else if (key["label"] === "Upload") {
                          return (
                            <OverlayTrigger
                              delay={{ hide: 450, show: 300 }}
                              overlay={(props) => (
                                <Tooltip {...props}>Upload Doc</Tooltip>
                              )}
                              placement="top"
                            >
                              <Link
                                to={`${key.link}/${Dkey.id}`}
                                state={{ backLink: `${key.backUrl?.backLink}` }}
                                className="btn d-inline-flex align-items-center justify-content-center me-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2ZM7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7Z"
                                    fill="#515362"
                                  />
                                </svg>
                              </Link>
                            </OverlayTrigger>
                          );
                        } else {
                          return (
                            <Button
                              onClick={(e) => {
                                key.action(true, Dkey._id);
                              }}
                              className="bg-transparent border-0 p-0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                              >
                                <path
                                  d="M21.2714 10.7662C20.4628 8.67463 19.0591 6.8658 17.2336 5.56331C15.4082 4.26082 13.2411 3.52177 11.0002 3.4375C8.7593 3.52177 6.59221 4.26082 4.76677 5.56331C2.94133 6.8658 1.53756 8.67463 0.728946 10.7662C0.674336 10.9173 0.674336 11.0827 0.728946 11.2338C1.53756 13.3254 2.94133 15.1342 4.76677 16.4367C6.59221 17.7392 8.7593 18.4782 11.0002 18.5625C13.2411 18.4782 15.4082 17.7392 17.2336 16.4367C19.0591 15.1342 20.4628 13.3254 21.2714 11.2338C21.3261 11.0827 21.3261 10.9173 21.2714 10.7662ZM11.0002 17.1875C7.35645 17.1875 3.50645 14.4856 2.11082 11C3.50645 7.51437 7.35645 4.8125 11.0002 4.8125C14.6439 4.8125 18.4939 7.51437 19.8896 11C18.4939 14.4856 14.6439 17.1875 11.0002 17.1875Z"
                                  fill="#515463"
                                />
                                <path
                                  d="M11 6.875C10.1842 6.875 9.38663 7.11693 8.70827 7.57019C8.02992 8.02345 7.50121 8.66769 7.189 9.42143C6.87679 10.1752 6.7951 11.0046 6.95426 11.8047C7.11343 12.6049 7.50629 13.3399 8.08319 13.9168C8.66008 14.4937 9.39508 14.8866 10.1953 15.0457C10.9954 15.2049 11.8248 15.1232 12.5786 14.811C13.3323 14.4988 13.9766 13.9701 14.4298 13.2917C14.8831 12.6134 15.125 11.8158 15.125 11C15.125 9.90598 14.6904 8.85677 13.9168 8.08318C13.1432 7.3096 12.094 6.875 11 6.875ZM11 13.75C10.4561 13.75 9.92442 13.5887 9.47218 13.2865C9.01995 12.9844 8.66747 12.5549 8.45933 12.0524C8.25119 11.5499 8.19673 10.9969 8.30284 10.4635C8.40895 9.93005 8.67086 9.44005 9.05546 9.05546C9.44005 8.67086 9.93006 8.40895 10.4635 8.30284C10.997 8.19673 11.5499 8.25119 12.0524 8.45933C12.5549 8.66747 12.9844 9.01995 13.2865 9.47218C13.5887 9.92442 13.75 10.4561 13.75 11C13.75 11.7293 13.4603 12.4288 12.9445 12.9445C12.4288 13.4603 11.7293 13.75 11 13.75Z"
                                  fill="#515463"
                                />
                              </svg>
                            </Button>
                          );
                        }
                      })}
                    </div>
                  </td>
                )}

                {/* {popupBtn && (
                  <td padding="none" align="right" key={index}>
                    <Button
                      className="bg-amber text-white CBmargin"
                      onClick={(e) => popupBtn.action(true, Dkey._id)}
                    >
                      <i
                        className={`${
                          popupBtn.icon ? popupBtn.icon : "zmdi zmdi-eye"
                        }`}
                      />
                    </Button>
                  </td>
                )} */}
                {docBtn && docBtn.length > 0 && (
                  <td
                    padding="none"
                    align="center"
                    className="action-btn d-flex align-items-center"
                    key={index}
                  >
                    {docBtn.map((key, i) => {
                      if (key["label"] === "Total Doc") {
                        return (
                          <OverlayTrigger
                            delay={{ hide: 450, show: 300 }}
                            overlay={(props) => (
                              <Tooltip {...props}>Total Docs</Tooltip>
                            )}
                            placement="top"
                          >
                            <Link
                              to={`${key.link}/${Dkey.id}`}
                              state={{
                                backLink: `${key.backUrl?.backLink}`,
                                serviceData: JSON.stringify(
                                  key.serviceData?.[index - 1]
                                ),
                              }}
                              className="btn d-inline-flex align-items-center justify-content-center me-2 dangerBtn"
                            >
                              {Dkey?.document &&
                                Dkey?.document?.documents.length}
                            </Link>
                          </OverlayTrigger>
                        );
                      } else if (key["label"] === "Pending") {
                        return (
                          <OverlayTrigger
                            delay={{ hide: 450, show: 300 }}
                            overlay={(props) => (
                              <Tooltip {...props}>Pending Docs</Tooltip>
                            )}
                            placement="top"
                          >
                            <Link
                              to={`${key.link}/${Dkey.id}`}
                              state={{
                                backLink: `${key.backUrl?.backLink}`,
                                serviceData: JSON.stringify(
                                  key.serviceData?.[index - 1]
                                ),
                              }}
                              className="btn d-inline-flex align-items-center justify-content-center me-2 warningBtn"
                            >
                              {Dkey?.document &&
                                Dkey?.document?.documents.filter(
                                  (item) => item.status == "pending"
                                ).length}
                            </Link>
                          </OverlayTrigger>
                        );
                      } else if (key["label"] === "Submitted") {
                        return (
                          <OverlayTrigger
                            delay={{ hide: 450, show: 300 }}
                            overlay={(props) => (
                              <Tooltip {...props}>Submitted Docs</Tooltip>
                            )}
                            placement="top"
                          >
                            <Link
                              to={`${key.link}/${Dkey.id}`}
                              state={{ backLink: `${key.backUrl?.backLink}` }}
                              className="btn d-inline-flex align-items-center justify-content-center me-2 successBtn"
                            >
                              {Dkey?.document &&
                                Dkey?.document?.documents.filter(
                                  (item) => item.status == "submitted"
                                ).length}
                            </Link>
                          </OverlayTrigger>
                        );
                      } else if (key["label"] === "Accepted") {
                        return (
                          <OverlayTrigger
                            delay={{ hide: 450, show: 300 }}
                            overlay={(props) => (
                              <Tooltip {...props}>Accepted Docs</Tooltip>
                            )}
                            placement="top"
                          >
                            <Link
                              to={`${key.link}/${Dkey.id}`}
                              state={{ backLink: `${key.backUrl?.backLink}` }}
                              className="btn d-inline-flex align-items-center justify-content-center me-2 acceptedBtn"
                            >
                              {Dkey?.document &&
                                Dkey?.document?.documents.filter(
                                  (item) => item.status == "accepted"
                                ).length}
                            </Link>
                          </OverlayTrigger>
                        );
                      } else {
                        return (
                          <Button
                            onClick={(e) => {
                              key.action(true, Dkey._id);
                            }}
                            className="bg-transparent border-0 p-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M21.2714 10.7662C20.4628 8.67463 19.0591 6.8658 17.2336 5.56331C15.4082 4.26082 13.2411 3.52177 11.0002 3.4375C8.7593 3.52177 6.59221 4.26082 4.76677 5.56331C2.94133 6.8658 1.53756 8.67463 0.728946 10.7662C0.674336 10.9173 0.674336 11.0827 0.728946 11.2338C1.53756 13.3254 2.94133 15.1342 4.76677 16.4367C6.59221 17.7392 8.7593 18.4782 11.0002 18.5625C13.2411 18.4782 15.4082 17.7392 17.2336 16.4367C19.0591 15.1342 20.4628 13.3254 21.2714 11.2338C21.3261 11.0827 21.3261 10.9173 21.2714 10.7662ZM11.0002 17.1875C7.35645 17.1875 3.50645 14.4856 2.11082 11C3.50645 7.51437 7.35645 4.8125 11.0002 4.8125C14.6439 4.8125 18.4939 7.51437 19.8896 11C18.4939 14.4856 14.6439 17.1875 11.0002 17.1875Z"
                                fill="#515463"
                              />
                              <path
                                d="M11 6.875C10.1842 6.875 9.38663 7.11693 8.70827 7.57019C8.02992 8.02345 7.50121 8.66769 7.189 9.42143C6.87679 10.1752 6.7951 11.0046 6.95426 11.8047C7.11343 12.6049 7.50629 13.3399 8.08319 13.9168C8.66008 14.4937 9.39508 14.8866 10.1953 15.0457C10.9954 15.2049 11.8248 15.1232 12.5786 14.811C13.3323 14.4988 13.9766 13.9701 14.4298 13.2917C14.8831 12.6134 15.125 11.8158 15.125 11C15.125 9.90598 14.6904 8.85677 13.9168 8.08318C13.1432 7.3096 12.094 6.875 11 6.875ZM11 13.75C10.4561 13.75 9.92442 13.5887 9.47218 13.2865C9.01995 12.9844 8.66747 12.5549 8.45933 12.0524C8.25119 11.5499 8.19673 10.9969 8.30284 10.4635C8.40895 9.93005 8.67086 9.44005 9.05546 9.05546C9.44005 8.67086 9.93006 8.40895 10.4635 8.30284C10.997 8.19673 11.5499 8.25119 12.0524 8.45933C12.5549 8.66747 12.9844 9.01995 13.2865 9.47218C13.5887 9.92442 13.75 10.4561 13.75 11C13.75 11.7293 13.4603 12.4288 12.9445 12.9445C12.4288 13.4603 11.7293 13.75 11 13.75Z"
                                fill="#515463"
                              />
                            </svg>
                          </Button>
                        );
                      }
                    })}
                  </td>
                )}
              </tr>
            );
          })}

        {loading === false && data?.length === 0 && (
          <tr>
            <td align="center" colSpan={column.length}>
              No data Found!
            </td>
          </tr>
        )}

        {loading === true && (
          <tr>
            <td align="center" colSpan={column.length}>
              <Loading />
            </td>
          </tr>
        )}
      </tbody>
    );
  }
}

class DataTablePagination extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count, page, rowsPerPage, rowsPerPageOptions, onPageChange } =
      this.props;
    return (
      <TableFooter>
        <tr>
          <TablePagination
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            rowsPerPageOptions={rowsPerPageOptions}
          />
        </tr>
      </TableFooter>
    );
  }
}

class Action extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      anchorEl: undefined,
      menuState: false,
    };

    this.onOptionMenuSelect = this.onOptionMenuSelect.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  onOptionMenuSelect = (event) => {
    this.setState({ menuState: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ menuState: false });
  };

  render() {
    const { id, actions } = this.props;
    const { menuState, anchorEl } = this.state;

    return (
      <Fragment>
        <IconButton key={id} onClick={(e) => this.onOptionMenuSelect(e)}>
          <i className="zmdi zmdi-more-vert" />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={menuState}
          onClose={(e) => this.handleRequestClose()}
          MenuListProps={{
            style: {
              width: 93,
              paddingTop: 0,
              paddingBottom: 0,
            },
          }}
        >
          {actions &&
            actions.map((key, index) => {
              if (key.action) {
                return (
                  <Button className="bg-transparent border-0 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M21.2714 10.7662C20.4628 8.67463 19.0591 6.8658 17.2336 5.56331C15.4082 4.26082 13.2411 3.52177 11.0002 3.4375C8.7593 3.52177 6.59221 4.26082 4.76677 5.56331C2.94133 6.8658 1.53756 8.67463 0.728946 10.7662C0.674336 10.9173 0.674336 11.0827 0.728946 11.2338C1.53756 13.3254 2.94133 15.1342 4.76677 16.4367C6.59221 17.7392 8.7593 18.4782 11.0002 18.5625C13.2411 18.4782 15.4082 17.7392 17.2336 16.4367C19.0591 15.1342 20.4628 13.3254 21.2714 11.2338C21.3261 11.0827 21.3261 10.9173 21.2714 10.7662ZM11.0002 17.1875C7.35645 17.1875 3.50645 14.4856 2.11082 11C3.50645 7.51437 7.35645 4.8125 11.0002 4.8125C14.6439 4.8125 18.4939 7.51437 19.8896 11C18.4939 14.4856 14.6439 17.1875 11.0002 17.1875Z"
                        fill="#9a1bac40"
                      />
                      <path
                        d="M11 6.875C10.1842 6.875 9.38663 7.11693 8.70827 7.57019C8.02992 8.02345 7.50121 8.66769 7.189 9.42143C6.87679 10.1752 6.7951 11.0046 6.95426 11.8047C7.11343 12.6049 7.50629 13.3399 8.08319 13.9168C8.66008 14.4937 9.39508 14.8866 10.1953 15.0457C10.9954 15.2049 11.8248 15.1232 12.5786 14.811C13.3323 14.4988 13.9766 13.9701 14.4298 13.2917C14.8831 12.6134 15.125 11.8158 15.125 11C15.125 9.90598 14.6904 8.85677 13.9168 8.08318C13.1432 7.3096 12.094 6.875 11 6.875ZM11 13.75C10.4561 13.75 9.92442 13.5887 9.47218 13.2865C9.01995 12.9844 8.66747 12.5549 8.45933 12.0524C8.25119 11.5499 8.19673 10.9969 8.30284 10.4635C8.40895 9.93005 8.67086 9.44005 9.05546 9.05546C9.44005 8.67086 9.93006 8.40895 10.4635 8.30284C10.997 8.19673 11.5499 8.25119 12.0524 8.45933C12.5549 8.66747 12.9844 9.01995 13.2865 9.47218C13.5887 9.92442 13.75 10.4561 13.75 11C13.75 11.7293 13.4603 12.4288 12.9445 12.9445C12.4288 13.4603 11.7293 13.75 11 13.75Z"
                        fill="#9a1bac40"
                      />
                    </svg>
                  </Button>
                );
              } else if (key["label"] === "Delete") {
                return (
                  <MenuItem
                    key={key["label"]}
                    onClick={(e) => this.handleRequestClose()}
                    className="customIcon"
                  >
                    <a href="javascript:void(0)" onClick={() => key.link(id)}>
                      <ListItemIcon>
                        <DeleteForeverIcon fontSize="small" />
                      </ListItemIcon>
                      Delete
                    </a>
                  </MenuItem>
                );
              } else {
                return (
                  <MenuItem
                    key={key["label"]}
                    onClick={(e) => this.handleRequestClose()}
                    className="customIcon"
                  >
                    <NavLink to={`${key.link}/${id}`}>
                      <ListItemIcon>
                        {key["icon"] !== "" && key["icon"]}
                        {key["label"] === "View" && (
                          <VisibilityIcon fontSize="small" />
                        )}
                        {key["label"] === "Edit" && (
                          <EditIcon fontSize="small" />
                        )}
                        {key["label"] === "Pay" && (
                          <MonetizationOnIcon fontSize="small" />
                        )}
                      </ListItemIcon>
                      {key["label"]}
                    </NavLink>
                  </MenuItem>
                );
              }
            })}
        </Menu>
      </Fragment>
    );
  }
}

const ActionLink = (props) => {
  const { index, actionBtn1, id } = props;
  return (
    <td padding="none" align="right" key={index}>
      <NavLink to={`${actionBtn.link}${id}`}>
        <Button className="bg-amber text-white CBmargin">
          <i className={`zmdi ${actionBtn.icon}`} /> {actionBtn.title}
        </Button>
      </NavLink>
    </td>
  );
};

const ActionPopup = (props) => {
  const { key, action, id, title, icon } = props;
  return (
    <td padding="none" align="right" key={key}>
      <Button
        className="bg-amber text-white CBmargin"
        onClick={() => action(id)}
      >
        <i className={`zmdi ${icon}`} /> {title}
      </Button>
    </td>
  );
};

ActionPopup.defaultProps = {
  key: Math.random(),
  title: "",
  icon: "Zmdi-delete",
};

export {
  DataTable,
  DataTableHead,
  DataTableBody,
  DataTablePagination,
  Action,
  ActionPopup,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  ActionLink,
  moment,
};
