// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const BookingRevenueGraph = (props) => {
//   const { list, bookingRevenue, adminCommission } = props;
//   const [bookingRevenueGraph, SetBookingRevenueGraph] = useState({
//     series: [
//       {
//         name: "Bookings",
//         data: [],
//       },
//       {
//         name: "Commission",
//         data: [],
//       },
//     ],
//     options: {
//       chart: {
//         type: 'bar',
//         height: 430
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "55%",
//           endingShape: "rounded",
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         offsetX: -6,
//         style: {
//           fontSize: '12px',
//           colors: ['#fff']
//         }
//       },
//       stroke: {
//         show: true,
//         width: 1,
//         colors: ['#fff']
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return val;
//           },
//         },
//       },
//       xaxis: {
//         categories: [],
//       },
//       yaxis: {
//         min: 0,
//         max: 100,
//         floating: false,
//         title: {
//           text: "Booking Revenue ($)",
//         },
//       }
//     }
//   });

//   useEffect(() => {
//     SetBookingRevenueGraph((pre) => ({
//       ...pre,
//       series: [
//         {
//           name: "Bookings",
//           data: bookingRevenue,
//         },
//         {
//           name: "Commission",
//           data: adminCommission,
//         },
//       ],

//       options: {
//         chart: {
//           type: 'bar',
//           height: 430
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             columnWidth: "55%",
//             endingShape: "rounded",
//           }
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         stroke: {
//           show: true,
//           width: 2,
//           colors: ['transparent']
//         },
//         tooltip: {
//           y: {
//             formatter: function (val) {
//               return "$ " + val;
//             },
//           },
//         },
//         xaxis: {
//           categories: list,
//           title: {
//             text: "Date",
//           },
//         },
//       }
//     }));
//   }, [list]);

//   return (
//     <>
//       <div className="inner my-2">
//         <div className="tab-body">
//           <div className="text-center">
//             <ReactApexChart
//               options={bookingRevenueGraph.options}
//               series={bookingRevenueGraph.series}
//               type="bar"
//               className="apex-charts"
//               height={450}
//             />
//           </div>
//         </div>
//       </div>{" "}
//     </>
//   );
// };
// export default BookingRevenueGraph;
