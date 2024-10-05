import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

import CsvDownloader from "react-csv-downloader";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { exportBooking } from "../../../../store/actions";

const ExportCsv = (props) => {
  const [state, setState] = useState([]);
  // console.log(state, "state");
  const [colum, setColum] = useState([]);

  const csvLink = useRef();
  const { file, columns } = props;
  const dispatch = useDispatch();
  const Data = useSelector((s) => s?.Export?.exportBookingData?.data);
  const loading = useSelector((s) => s?.Export?.loading);

  useEffect(() => {
    const Data1 =
      Data &&
      Data?.map((k) => {
        return {
          ...k,
          createdAt: k["createdAt"]
            ? moment(k["createdAt"]).format("YYYY-MM-DD")
            : "",
          customerDetails: k["customerDetails"]
            ? k["customerDetails"]?.name
            : "",
          startAddress: k.startAddress
            ? k.startAddress.replace(/[^a-z0-9]+|\s+/gim, " ")
            : "",
          endAddress: k.endAddress
            ? k.endAddress.replace(/[^a-z0-9]+|\s+/gim, " ")
            : "",
          vehicleType: k["customerVehicleDetails"]
            ? k["customerVehicleDetails"]?.vehicleType
            : "",
          model: k["customerVehicleDetails"]
            ? k["customerVehicleDetails"]?.model
            : "",
          make: k["customerVehicleDetails"]
            ? k["customerVehicleDetails"]?.make
            : "",
          plateNumber: k["customerVehicleDetails"]
            ? k["customerVehicleDetails"]?.plateNumber
            : "",
          color: k["customerVehicleDetails"]
            ? k["customerVehicleDetails"]?.color
            : "",
          fuelType: k["customerVehicleDetails"]
            ? k["customerVehicleDetails"]?.fuelType
            : "",
        };
      });
    Data1 && setState(Data1);
  }, [Data]);

  // const loading = useSelector((s) => s.exportuser?.loading);
  const fetchData = () => {
    let body = {
      orderBy: "createdBy",
      order: -1,
      page: 0,
      limit: 1000,
    };
    dispatch(exportBooking(body));
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        csvLink?.current?.handleClick();
      }, 1000);
    }
  }, [loading]);

  useEffect(() => {
    let column =
      columns &&
      columns.length > 0 &&
      columns
        .map((key) => {
          let no = ["_id", "action"];
          if (!no.includes(key.id)) {
            return {
              id: key.id,
              displayName: key.label,
            };
          }
        })
        .filter((key) => key !== undefined);
    column && setColum(column);
  }, [columns]);

  return (
    <div>
      <Button
        onClick={fetchData}
        disabled={false}
        title="Download"
        type="button"
        className="d-flex btn-2 align-items-center justify-content-center me-2 btn btn-primary"
      >
        <span className="me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M4.697 3.9985L6.3 2.3885V9.1015C6.3 9.28715 6.37375 9.4652 6.50503 9.59647C6.6363 9.72775 6.81435 9.8015 7 9.8015C7.18565 9.8015 7.3637 9.72775 7.49497 9.59647C7.62625 9.4652 7.7 9.28715 7.7 9.1015V2.3885L9.303 3.9985C9.36807 4.06411 9.44549 4.11618 9.5308 4.15172C9.6161 4.18726 9.70759 4.20556 9.8 4.20556C9.89241 4.20556 9.9839 4.18726 10.0692 4.15172C10.1545 4.11618 10.2319 4.06411 10.297 3.9985C10.3626 3.93343 10.4147 3.856 10.4502 3.7707C10.4858 3.6854 10.5041 3.59391 10.5041 3.5015C10.5041 3.40909 10.4858 3.3176 10.4502 3.2323C10.4147 3.14699 10.3626 3.06957 10.297 3.0045L7.497 0.204499C7.43043 0.140771 7.35193 0.0908152 7.266 0.0574991C7.09558 -0.0125135 6.90442 -0.0125135 6.734 0.0574991C6.64807 0.0908152 6.56957 0.140771 6.503 0.204499L3.703 3.0045C3.63773 3.06977 3.58596 3.14725 3.55064 3.23252C3.51532 3.3178 3.49714 3.4092 3.49714 3.5015C3.49714 3.5938 3.51532 3.6852 3.55064 3.77047C3.58596 3.85575 3.63773 3.93323 3.703 3.9985C3.76827 4.06377 3.84575 4.11554 3.93103 4.15086C4.0163 4.18618 4.1077 4.20436 4.2 4.20436C4.2923 4.20436 4.3837 4.18618 4.46897 4.15086C4.55425 4.11554 4.63173 4.06377 4.697 3.9985ZM13.3 8.4015C13.1143 8.4015 12.9363 8.47525 12.805 8.60652C12.6737 8.7378 12.6 8.91585 12.6 9.1015V11.9015C12.6 12.0872 12.5263 12.2652 12.395 12.3965C12.2637 12.5278 12.0857 12.6015 11.9 12.6015H2.1C1.91435 12.6015 1.7363 12.5278 1.60503 12.3965C1.47375 12.2652 1.4 12.0872 1.4 11.9015V9.1015C1.4 8.91585 1.32625 8.7378 1.19497 8.60652C1.0637 8.47525 0.885652 8.4015 0.7 8.4015C0.514348 8.4015 0.336301 8.47525 0.205025 8.60652C0.0737498 8.7378 0 8.91585 0 9.1015V11.9015C0 12.4585 0.221249 12.9926 0.615076 13.3864C1.0089 13.7803 1.54305 14.0015 2.1 14.0015H11.9C12.457 14.0015 12.9911 13.7803 13.3849 13.3864C13.7788 12.9926 14 12.4585 14 11.9015V9.1015C14 8.91585 13.9263 8.7378 13.795 8.60652C13.6637 8.47525 13.4857 8.4015 13.3 8.4015Z"
              fill="#515463"
            />
          </svg>
        </span>
        Export
      </Button>

      <div className="d-none">
        <CsvDownloader
          filename={file}
          style={{ display: "none" }}
          separator=";"
          columns={colum}
          datas={state}
          ref={csvLink}
          text="DOWNLOAD"
        />
      </div>
    </div>
  );
};

export default ExportCsv;
