// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const BookingCountGraph = (props) => {
//   const { list, bookingCount } = props;
//   const [bookingCountGraph, SetBoookingCountGraph] = useState({
//     series: [
//       {
//         name: "Bookings",
//         data: [],
//       },
//     ],
//     options: {
//       chart: {
//         type: "bar",
//         height: 500,
//       },
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           columnWidth: "55%",
//           endingShape: "rounded",
//         },
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         show: true,
//         width: 2,
//         colors: ["transparent"],
//       },
//       xaxis: {
//         categories: [],
//       },
//       yaxis: {
//         min: 0,
//         max: 10,
//         floating: false,
//         title: {
//           text: "$ (thousands)",
//         },
//       },
//       fill: {
//         opacity: 1,
//       },
//       tooltip: {
//         y: {
//           formatter: function (val) {
//             return "$ " + val + " thousands";
//           },
//         },
//       },
//     },
//   });

//   useEffect(() => {
//     SetBoookingCountGraph((pre) => ({
//       ...pre,
//       series: [
//         {
//           name: "Bookings",
//           data: bookingCount,
//         },
//       ],

//       options: {
//         chart: {
//           type: "bar",
//           height: 350,
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             columnWidth: "55%",
//             endingShape: "rounded",
//           },
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         stroke: {
//           show: true,
//           width: 2,
//           colors: ["transparent"],
//         },
//         xaxis: {
//           categories: list,
//           title: {
//             text: "Date",
//           },
//         },
//         yaxis: {
//           min: 0,
//           max: 10,
//           floating: false,
//           title: {
//             text: "Booking Count",
//           },
//         },

//         fill: {
//           opacity: 1,
//           colors: "#3b63dc",
//         },
//         tooltip: {
//           y: {
//             formatter: function (val) {
//               return val ;
//             },
//           },
//         },
//       },
//     }));
//   }, [list]);

//   return (
//     <>
//       <div className="inner my-2">
//         <div className="tab-body">
//           <div className="text-center">
//             <ReactApexChart
//               options={bookingCountGraph.options}
//               series={bookingCountGraph.series}
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
// export default BookingCountGraph;
