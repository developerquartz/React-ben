// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const DashboardRevenueGraph = (props) => {
//   const { list, revenue, adminCommission } = props;
//   const [revenueGraph, SetRevenueGraph] = useState({
//     series: [
//       {
//         name: "Revenue",
//         data: [],
//       },
//       {
//         name: "Commission",
//         data: [],
//       }
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
//     SetRevenueGraph((pre) => ({
//       ...pre,
//       series: [
//         {
//           name: "Revenue",
//           data: revenue,
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
//               options={revenueGraph.options}
//               series={revenueGraph.series}
//               type="bar"
//               className="apex-charts"
//               height={300}
//             />
//           </div>
//         </div>
//       </div>{" "}
//     </>
//   );
// };
// export default DashboardRevenueGraph;
