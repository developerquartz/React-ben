import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bookingReportGraph } from "../../../../store/actions";
import moment from 'moment';
import { DatePicker } from 'antd';

import BookingCountGraph from "./BookingCountGraph";
import BookingStatusGraph from "./BookingStatusGraph";
import BookingRevenueGraph from "./BookingRevenueGraph";

const OrderReportIndex = () => {
  const dispatch = useDispatch();
  const ReportGraphData = useSelector((s) => s?.Dashboard?.bookingReportGraphDetails?.data);

  const [dates, setDates] = useState({
    startDate: moment().startOf("week").format("YYYY-MM-DD"),
    endDate: moment().endOf("week").format("YYYY-MM-DD"),
  });

  const weekFormat = "YYYY-MM-DD";
  const list = [];

  var start = moment(dates.startDate);
  var end = moment(dates.endDate);
  for (var current = start; current <= end; current.add(1, "d")) {
    list.push(current.format("MMMM DD"));
  }

  const [graphData, SetGraphData] = useState({
    bookingCount: [],
    bookingRevenue: [],
    adminCommission: [],
    bookingStatus: [],
  });

  const getTableRecords = () => {
    let body = {
      startDate: dates.startDate,
      endDate: dates.endDate,
    };
    dispatch(bookingReportGraph(body));
  };

  useEffect(() => {
    getTableRecords();

    if(dates?.startDate && dates?.endDate){
      var start = moment(dates.startDate);
      var end = moment(dates.endDate);
      for (var current = start; current <= end; current.add(1, "d")) {
        list.push(current.format("MMMM DD"));
      }
    }
  }, [dates]);

  const customWeekStartEndFormat = (value) =>
    `${moment(value?.$d).startOf("week").format(weekFormat)} ~ ${moment(value?.$d).endOf("week").format(weekFormat)}`;

  useEffect(() => {
    BookingCountAndRevenueGraphData();

    StatusGraphData(ReportGraphData);
  }, [ReportGraphData]);

  const BookingCountAndRevenueGraphData = async () => {
    var bookingCountData = (await ReportGraphData?.weeklyBookings) || 0;
    var bookingRevenueData = (await ReportGraphData?.weeklyRevenue) || 0;

    const bookingCountDataFilter = {};
    for (var i in bookingCountData) {
      let date = bookingCountData[i]._id;
      bookingCountDataFilter[date] = bookingCountData[i]?.totalCount;
    }

    const bookingRevenueDataFilter = {};
    for (var i in bookingRevenueData) {
      let date = bookingRevenueData[i]._id;
      bookingRevenueDataFilter[date] = bookingRevenueData[i]?.totalRevenue;
    }

    const adminCommissionDataFilter = {};
    for (var i in bookingRevenueData) {
      let date = bookingRevenueData[i]._id;
      adminCommissionDataFilter[date] = bookingRevenueData[i]?.adminCommission;
    }

    for (let index = 0; index < bookingDataGraph.length; index++) {
      let GraphDay = bookingDataGraph[index].name;
      if (bookingCountDataFilter.hasOwnProperty(GraphDay)) {
        bookingDataGraph[index].bookingCount = bookingCountDataFilter[GraphDay];
      }
      if (bookingRevenueDataFilter.hasOwnProperty(GraphDay)) {
        bookingDataGraph[index].bookingRevenue = bookingRevenueDataFilter[GraphDay];
      }
      if (bookingRevenueDataFilter.hasOwnProperty(GraphDay)) {
        bookingDataGraph[index].adminCommission = adminCommissionDataFilter[GraphDay];
      }
    }
    const bookingCountDataArr = [];
    const bookingRevenueDataArr = [];
    const adminCommissionDataArr = [];

    await bookingDataGraph.map((data) => {
      bookingCountDataArr.push(data.bookingCount);
    });

    await bookingDataGraph.map((data) => {
      bookingRevenueDataArr.push(data.bookingRevenue);
    });

    await bookingDataGraph.map((data) => {
      adminCommissionDataArr.push(data.adminCommission);
    });


    SetGraphData((pre) => ({
      ...pre,
      bookingCount: bookingCountDataArr,
      bookingRevenue: bookingRevenueDataArr,
      adminCommission: adminCommissionDataArr,
    }));
  };

  const bookingDataGraph = [
    {
      name: 1,
      bookingCount: 0,
      bookingRevenue: 0,
      adminCommission: 0
    },
    {
      name: 2,
      bookingCount: 0,
      bookingRevenue: 0,
      adminCommission: 0
    },
    {
      name: 3,
      bookingCount: 0,
      bookingRevenue: 0,
      adminCommission: 0
    },
    {
      name: 4,
      bookingCount: 0,
      bookingRevenue: 0,
      adminCommission: 0
    },
    {
      name: 5,
      bookingCount: 0,
      bookingRevenue: 0,
      adminCommission: 0
    },
    {
      name: 6,
      bookingCount: 0,
      bookingRevenue: 0,
      adminCommission: 0
    },
    {
      name: 7,
      bookingCount: 0,
      bookingRevenue: 0,
      adminCommission: 0
    }
  ];

  const StatusGraphData = async (ReportGraphData) => {

    if(ReportGraphData?.statusCount != undefined){
      SetGraphData((pre) => ({
        ...pre,
        bookingStatus: ReportGraphData?.statusCount,
      }));
    }
  };

  console.log("graphData", graphData);

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
                            startDate: moment(value?.$d).startOf("week").format(weekFormat),
                            endDate: moment(value?.$d).endOf("week").format(weekFormat),
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
                  <h4 className="dashboard-head m-0">Booking Count Report</h4>
                </div>
                <BookingCountGraph list={list} bookingCount={graphData.bookingCount} />
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <div className="top">
                  <h4 className="dashboard-head m-0">Booking Status Report</h4>
                </div>
                <div className="text-center">
                  <Row>
                    <Col lg="3" >

                    </Col>
                    <Col lg="6">
                      <BookingStatusGraph list={list} bookingStatus={graphData.bookingStatus}/>
                    </Col>
                    <Col lg="3" >

                    </Col>
                  </Row>

                </div>

              </div>
            </Col>
            <Col lg="12" className="my-2">
              <div className="bg-white px-4 py-3 card-box rounded">
                <div className="top">
                  <h4 className="dashboard-head m-0">Booking Revenue Report</h4>
                </div>
                <BookingRevenueGraph list={list} bookingRevenue={graphData.bookingRevenue} adminCommission={graphData.adminCommission} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default OrderReportIndex;
