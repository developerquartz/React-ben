// import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const BookingStatusGraph = (props) => {
//   const { list, bookingStatus } = props;

//   const [bookinStatusGraph, SetBookinStatusGraph] = useState({
//     series: [1, 1, 1, 1, 1, 1, 1],
//     options: {
//       chart: {
//         width: 360,
//         type: 'pie',
//       },
//       labels: ['Requested', 'Accepted', 'Rejected', 'In Route', 'In Progress', 'Completed', 'Cancelled'],
//       responsive: [{
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200
//           },
//           legend: {
//             position: 'bottom'
//           }
//         }
//       }]
//     },
//   });

//   useEffect(() => {
//     SetBookinStatusGraph((pre) => ({
//       ...pre,
//       series: bookingStatus || [],
//       options: {
//         chart: {
//           width: 360,
//           type: 'pie',
//         },
//         labels: ['Requested', 'Accepted', 'Rejected', 'In Route', 'In Progress', 'Completed', 'Cancelled'],
//         colors:['#3b63dc', '#00FF00', '#FF0000', '#FFFF00', '#FFA500', '#8F00FF', '#4B0082'],
//         theme: {
//           monochrome: {
//             enabled: false
//           }
//         },
//         plotOptions: {
//           pie: {
//             dataLabels: {
//               offset: -20
//             }
//           }
//         },
//         responsive: [{
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: 'bottom'
//             }
//           }
//         }]
//       },
//     }));
//   }, [list]);

//   return (
//     <>
//       <div className="inner my-2">
//         <div className="tab-body">
//           <div className="text-center">
//             <ReactApexChart
//               options={bookinStatusGraph.options}
//               series={bookinStatusGraph.series}
//               type="pie"
//               className="apex-charts"
//               width={500}
//             />
//           </div>
//         </div>
//       </div>{" "}
//     </>
//   );
// };
// export default BookingStatusGraph;