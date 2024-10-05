import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import UserGraph from "./UserGraph";
import { useDispatch, useSelector } from "react-redux";
import { customerReportGraph } from "../../../../store/actions";
import moment from "moment";
import { DatePicker } from "antd";

const CustomerReportIndex = () => {
  const dispatch = useDispatch();
  const ReportGraphData = useSelector(
    (s) => s?.Dashboard?.customerReportGraphDetails?.data
  );

  const [dates, setDates] = useState({
    startDate: moment().startOf("week").format("YYYY-MM-DD"),
    endDate: moment().endOf("week").format("YYYY-MM-DD"),
  });

  const [graphData, SetGraphData] = useState({
    userCount: [],
  });

  const getTableRecords = () => {
    let body = {
      startDate: dates.startDate,
      endDate: dates.endDate,
    };
    dispatch(customerReportGraph(body));
  };

  useEffect(() => {
    getTableRecords();
  }, [dates]);

  var start = moment(dates.startDate);
  var end = moment(dates.endDate);
  const list = [];
  for (var current = start; current <= end; current.add(1, "d")) {
    list.push(current.format("MMMM DD"));
  }

  const userDataGraph = [
    {
      name: 1,
      userCount: 0,
    },
    {
      name: 2,
      userCount: 0,
    },
    {
      name: 3,
      userCount: 0,
    },
    {
      name: 4,
      userCount: 0,
    },
    {
      name: 5,
      userCount: 0,
    },
    {
      name: 6,
      userCount: 0,
    },
    {
      name: 7,
      userCount: 0,
    },
  ];

  const UserGraphData = async () => {
    var userdata = (await ReportGraphData) || 0;

    const userdataFilter = {};
    for (var i in userdata) {
      let date = userdata[i]._id;
      userdataFilter[date] = userdata[i]?.totalCount;
    }

    for (let index = 0; index < userDataGraph.length; index++) {
      let GraphDay = userDataGraph[index].name;
      if (userdataFilter.hasOwnProperty(GraphDay)) {
        userDataGraph[index].userCount = userdataFilter[GraphDay];
      }
    }
    const UserDataArr = [];

    await userDataGraph.map((data) => {
      UserDataArr.push(data.userCount);
    });

    SetGraphData((pre) => ({
      ...pre,
      userCount: UserDataArr,
    }));
  };

  useEffect(() => {
    UserGraphData();
  }, [ReportGraphData]);

  const weekFormat = "YYYY-MM-DD";
  const customWeekStartEndFormat = (value) =>
    `${moment(value?.$d).startOf("week").format(weekFormat)} ~ ${moment(
      value?.$d
    )
      .endOf("week")
      .format(weekFormat)}`;

  return (
    <>
      <section className="dashboard profile-main py-2">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top mb-2">
                <h4 className="dashboard-head m-0">Report</h4>
                <Form className="mt-2">
                  <Row>
                    <Col lg="3" sm="6" className="my-2 col-9">
                      <DatePicker
                        placeholder="select date"
                        format={customWeekStartEndFormat}
                        picker="week"
                        onChange={(value) => {
                          setDates((pre) => ({
                            ...pre,
                            startDate: moment(value?.$d)
                              .startOf("week")
                              .format(weekFormat),
                            endDate: moment(value?.$d)
                              .endOf("week")
                              .format(weekFormat),
                          }));
                        }}
                        defaultValue={moment()}
                        name="dates"
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <div className="top">
                  <h4 className="dashboard-head m-0">Customer Reports</h4>
                </div>
                <UserGraph list={list} userCount={graphData.userCount} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default CustomerReportIndex;
