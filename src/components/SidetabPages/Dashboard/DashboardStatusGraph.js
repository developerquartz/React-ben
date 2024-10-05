// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const DashboardStatusGraph = (props) => {
//   const { list, statusCount } = props;
//   const [statusGraph, SetStatusGraph] = useState({
//     series: [],
//     options: {
//       chart: {
//         width: 400,
//         type: "pie",
//       },
//       labels: [
//         "Requested",
//         "Accepted",
//         "Rejected",
//         "In Route",
//         "In Progress",
//         "Completed",
//         "Cancelled",
//       ],
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });

//   useEffect(() => {
//     SetStatusGraph((pre) => ({
//       ...pre,
//       series: statusCount || [],
//       options: {
//         chart: {
//           width: 360,
//           type: "pie",
//         },
//         labels: [
//           "Requested",
//           "Accepted",
//           "Rejected",
//           "In Route",
//           "In Progress",
//           "Completed",
//           "Cancelled",
//         ],
//         colors: [
//           "#3b63dc",
//           "#00FF00",
//           "#FF0000",
//           "#FFFF00",
//           "#FFA500",
//           "#8F00FF",
//           "#4B0082",
//         ],
//         theme: {
//           monochrome: {
//             enabled: false,
//           },
//         },
//         plotOptions: {
//           pie: {
//             dataLabels: {
//               offset: -20,
//             },
//           },
//         },
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 position: "bottom",
//               },
//             },
//           },
//         ],
//       },
//     }));
//   }, [list]);

//   return (
//     <>
//       <div className="inner my-2">
//         <div className="tab-body">
//           <div className="text-center mt-5 cstm-pie-chart">
//             <ReactApexChart
//               options={statusGraph.options}
//               series={statusGraph.series}
//               type="pie"
//               className="apex-charts w-100"
//               //   width={300}
//             />
//           </div>
//         </div>
//       </div>{" "}
//     </>
//   );
// };
// export default DashboardStatusGraph;
