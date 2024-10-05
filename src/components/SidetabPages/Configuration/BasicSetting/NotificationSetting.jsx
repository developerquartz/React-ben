import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { basicSettingDetails, basicSettingUpdate } from "../../../../store/actions";

const NotificationSetting = () => {
  const dispatch = useDispatch();
  const Data = useSelector((s) => s.Setting.basicSettingDetails?.data?.[0]?.Notifi_Settings );
  const [state, setState] = useState({
    "Notifi_Settings.SMS_Notification": true,
    "Notifi_Settings.Email_Notification": true,
    "Notifi_Settings.Tip": true,
    "Notifi_Settings.Toll": true,
    "Notifi_Settings.Android_User_App_Force_Update": true,
    "Notifi_Settings.Android_Driver_App_Force_Update": true,
    "Notifi_Settings.Android_Provider_App_Force_Update": true,
    "Notifi_Settings.IOS_User_App_Force_Update": true,
    "Notifi_Settings.IOS_Driver_App_Force_Update": true,
    "Notifi_Settings.IOS_Provider_App_Force_Update": true,
  });

  useEffect(() => {
    setState((pre) => ({
      ...pre,
      "Notifi_Settings.SMS_Notification": Data?.SMS_Notification,
      "Notifi_Settings.Email_Notification": Data?.Email_Notification,
      "Notifi_Settings.Tip": Data?.Tip,
      "Notifi_Settings.Toll": Data?.Toll,
      "Notifi_Settings.Android_User_App_Force_Update": Data?.Android_User_App_Force_Update,
      "Notifi_Settings.Android_Driver_App_Force_Update": Data?.Android_Driver_App_Force_Update,
      "Notifi_Settings.Android_Provider_App_Force_Update": Data?.Android_Provider_App_Force_Update,
      "Notifi_Settings.IOS_User_App_Force_Update": Data?.IOS_User_App_Force_Update,
      "Notifi_Settings.IOS_Driver_App_Force_Update": Data?.IOS_Driver_App_Force_Update,
      "Notifi_Settings.IOS_Provider_App_Force_Update": Data?.IOS_Provider_App_Force_Update,
    }));
  }, [Data]);

  useEffect(() => {
    dispatch(basicSettingDetails());
  }, []);

  const handleToggle = (value, name) => {
    setState((pre) => ({ ...pre, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const callBack = (response) => {
      if (response.status == "success") {
        toast.success(response.message);
      } 
      else {
        toast.error(response.message);
      }
    };
    dispatch(basicSettingUpdate(state, callBack));
  };

  return (
    <>
      <Col lg="5" className="my-2">
        <div className="bg-white px-4 py-3 card-box rounded">
          <div className="top">
            <h4 className="dashboard-head m-0">Notification Settings</h4>
          </div>
          <div className="table-responsive py-3">
            <table className="table common-table">
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M19.25 17.4167V18.3333H2.75V17.4167L4.58333 15.5833V10.0833C4.58333 7.24167 6.44417 4.73917 9.16667 3.9325V3.66667C9.16667 3.18044 9.35982 2.71412 9.70364 2.3703C10.0475 2.02649 10.5138 1.83333 11 1.83333C11.4862 1.83333 11.9525 2.02649 12.2964 2.3703C12.6402 2.71412 12.8333 3.18044 12.8333 3.66667V3.9325C15.5558 4.73917 17.4167 7.24167 17.4167 10.0833V15.5833L19.25 17.4167ZM12.8333 19.25C12.8333 19.7362 12.6402 20.2025 12.2964 20.5464C11.9525 20.8902 11.4862 21.0833 11 21.0833C10.5138 21.0833 10.0475 20.8902 9.70364 20.5464C9.35982 20.2025 9.16667 19.7362 9.16667 19.25"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      SMS Notification
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(event, "Notifi_Settings.SMS_Notification")
                        }
                        checked={state["Notifi_Settings.SMS_Notification"]}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M19.25 17.4167V18.3333H2.75V17.4167L4.58333 15.5833V10.0833C4.58333 7.24167 6.44417 4.73917 9.16667 3.9325V3.66667C9.16667 3.18044 9.35982 2.71412 9.70364 2.3703C10.0475 2.02649 10.5138 1.83333 11 1.83333C11.4862 1.83333 11.9525 2.02649 12.2964 2.3703C12.6402 2.71412 12.8333 3.18044 12.8333 3.66667V3.9325C15.5558 4.73917 17.4167 7.24167 17.4167 10.0833V15.5833L19.25 17.4167ZM12.8333 19.25C12.8333 19.7362 12.6402 20.2025 12.2964 20.5464C11.9525 20.8902 11.4862 21.0833 11 21.0833C10.5138 21.0833 10.0475 20.8902 9.70364 20.5464C9.35982 20.2025 9.16667 19.7362 9.16667 19.25"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      Email Notification{" "}
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(event, "Notifi_Settings.Email_Notification")
                        }
                        checked={state["Notifi_Settings.Email_Notification"]}
                      />
                    </div>
                  </td>
                </tr>

                {/* <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M2.75 5.5V16.5H12.21C12.0152 15.9084 11.9162 15.2895 11.9167 14.6667H6.41667C6.41667 14.1804 6.22351 13.7141 5.8797 13.3703C5.53588 13.0265 5.06956 12.8333 4.58333 12.8333V9.16667C5.60083 9.16667 6.41667 8.35083 6.41667 7.33333H15.5833C15.5833 7.81956 15.7765 8.28588 16.1203 8.6297C16.4641 8.97351 16.9304 9.16667 17.4167 9.16667V9.22167C18.0308 9.22167 18.645 9.33167 19.25 9.53333V5.5H2.75ZM11 8.25C9.44167 8.2775 8.25 9.44167 8.25 11C8.25 12.5583 9.44167 13.695 11 13.75C11.3483 13.75 11.7058 13.6767 12.045 13.5392C12.2925 12.5308 12.705 11.5775 13.7225 10.6425C13.6125 9.42333 12.4575 8.2225 11 8.25ZM19.8275 11.2475L16.28 14.8225L15.0425 13.5667L13.75 14.8683L16.2708 17.4167L21.1108 12.54L19.8275 11.2475Z"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      Tip{" "}
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) => handleToggle(event, "Tip")}
                        checked={state.Tip}
                      />
                    </div>
                  </td>
                </tr> */}

                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                        >
                          <path
                            d="M5 19H9V18H5V19ZM0 22V0H14V22H0ZM2 15H12V5H2V15Z"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      Android User App Force Update
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(event, "Notifi_Settings.Android_User_App_Force_Update")
                        }
                        checked={state["Notifi_Settings.Android_User_App_Force_Update"]}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                        >
                          <path
                            d="M5 19H9V18H5V19ZM0 22V0H14V22H0ZM2 15H12V5H2V15Z"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      Android Driver App Force Update
                    </div>
                  </td>
                  <td>
                    <div className=" ">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(event, "Notifi_Settings.Android_Driver_App_Force_Update")
                        }
                        checked={state["Notifi_Settings.Android_Driver_App_Force_Update"]}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                        >
                          <path
                            d="M5 19H9V18H5V19ZM0 22V0H14V22H0ZM2 15H12V5H2V15Z"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      Android Provider App Force Update
                    </div>
                  </td>
                  <td>
                    <div className="">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(
                            event,
                            "Notifi_Settings.Android_Provider_App_Force_Update"
                          )
                        }
                        checked={state["Notifi_Settings.Android_Provider_App_Force_Update"]}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                        >
                          <path
                            d="M5 19H9V18H5V19ZM0 22V0H14V22H0ZM2 15H12V5H2V15Z"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      IOS User App Force Update
                    </div>
                  </td>
                  <td>
                    <div className=" ">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(event, "Notifi_Settings.IOS_User_App_Force_Update")
                        }
                        checked={state["Notifi_Settings.IOS_User_App_Force_Update"]}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                        >
                          <path
                            d="M5 19H9V18H5V19ZM0 22V0H14V22H0ZM2 15H12V5H2V15Z"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      IOS Driver App Force Update
                    </div>
                  </td>
                  <td>
                    <div className=" ">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(event, "Notifi_Settings.IOS_Driver_App_Force_Update")
                        }
                        checked={state["Notifi_Settings.IOS_Driver_App_Force_Update"]}
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="img-wrp me-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="22"
                          viewBox="0 0 14 22"
                          fill="none"
                        >
                          <path
                            d="M5 19H9V18H5V19ZM0 22V0H14V22H0ZM2 15H12V5H2V15Z"
                            fill="#4E4E4E"
                          />
                        </svg>
                      </div>
                      IOS Provider App Force Update
                    </div>
                  </td>
                  <td>
                    <div className=" ">
                      <Switch
                        offColor="#888"
                        onColor="#3363df"
                        onChange={(event) =>
                          handleToggle(event, "Notifi_Settings.IOS_Provider_App_Force_Update")
                        }
                        checked={state["Notifi_Settings.IOS_Provider_App_Force_Update"]}
                      />
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <Button
            onClick={handleUpdate}
            className="d-flex align-items-center justify-content-center"
          >
            Submit
          </Button>
        </div>
      </Col>
    </>
  );
};
export default NotificationSetting;
