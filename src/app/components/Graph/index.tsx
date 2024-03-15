// import { Card } from "@mui/material";
// import "./index.css"
// import { BarChart } from '@mui/x-charts/BarChart';
// import { ThemeProvider } from "@emotion/react";
// import { createTheme } from '@mui/material/styles';

// const uData = [400, 300, 200, 278, 189, 239, 349];
// const pData = [240, 139, 980, 390, 480, 380, 430];
// const amtData = [240, 221, 229, 200, 218, 250, 210];

// const xLabels = [
//   "Phone",
//   "Instagram",
//   "TikTok",
//   "Google Ads",
//   "Facebook",
//   "Print Ads",
//   "Email",
// ];
// export const theme = createTheme({


//   components: {
//     MuiCard : {
//       styleOverrides: {
//         root: {
//           backgroundColor:'#fff',
//           width:"50%",
//           display:"flex",
//           margin: '10px',
//           padding:'20px',
//          borderRadius:"10px",
//         },
//       },
//     },
//   },
// });

// export default function MixedBarChart() {
//   return (
//     <ThemeProvider theme={theme}>
//     <Card>
//     <BarChart
//     slotProps={{
//       bar: {
//         rx: 10,
//         ry: 10,
//       },
//     }}
//       sx={{
//           [`.MuiChartsAxis-tick `]:{
//             display:"none",
//           },
//           [`.MuiChartsAxis-line `]:{
//             display:"none",
//           },
//           [`.MuiChartsLegend-mark`]:{
//             display:"none",
//           },
//           [`.MuiBarElement-series-auto-generated-id-0`]:{
//             fill : '#194B8B',
//             padding:"50px",
//           },
//           [`.MuiBarElement-series-auto-generated-id-1`]:{
//             fill : '#81A141',
//             margin:"50px",
//             // transform: translate3d(50px, 52.8571px, 0px),
//           },
//           [`.MuiBarElement-series-auto-generated-id-2`]:{
//             fill : '#5296DE',
//             padding:"50px",
//           },
//           [`.MuiBarElement-root`]:{
//             padding:"50px",
//           },
          
//       }}
//       width={500}
//       height={300}
//       series={[
//         { data: pData, label: '', stack: 'stack1' },
//         { data: amtData, label: '' },
//         { data: uData, label: '', stack: 'stack1' },
//       ]}
//       yAxis={[{ data: xLabels, scaleType: 'band' }]}
//       layout="horizontal"
//     />
//     </Card>
//     </ThemeProvider>
//   );
// }


// // import * as React from 'react';
// // import { ChartContainer, BarChart, XAxis, YAxis, Tooltip, seriesColors } from '@mui/x-charts';

// // const data = [
// //   {
// //     marketingChannel: 'Phone',
// //     impressions: 100,
// //     engagements: 200,
// //     conversions: 300,
// //   },
// //   {
// //     marketingChannel: 'Instagram',
// //     impressions: 400,
// //     engagements: 500,
// //     conversions: 600,
// //   },
// //   {
// //     marketingChannel: 'TikTok',
// //     impressions: 700,
// //     engagements: 800,
// //     conversions: 900,
// //   },
// //   {
// //     marketingChannel: 'Google Ads',
// //     impressions: 1000,
// //     engagements: 1100,
// //     conversions: 1200,
// //   },
// //   {
// //     marketingChannel: 'Facebook',
// //     impressions: 1300,
// //     engagements: 1400,
// //     conversions: 1500,
// //   },
// //   {
// //     marketingChannel: 'Print Ads',
// //     impressions: 1600,
// //     engagements: 1700,
// //     conversions: 1800,
// //   },
// //   {
// //     marketingChannel: 'E-Mail',
// //     impressions: 1900,
// //     engagements: 2000,
// //     conversions: 2100,
// //   },
// // ];

// // const chart = (
// //   <ChartContainer maxWidth={700} maxHeight={500}>
// //     <BarChart
// //       data={data}
// //       series={[
// //         {
// //           name: 'Impressions',
// //           valueKey: 'impressions',
// //           color: seriesColors.blue[9],
// //         },
// //         {
// //           name: 'Engagements',
// //           valueKey: 'engagements',
// //           color: seriesColors.green[5],
// //         },
// //         {
// //           name: 'Conversions',
// //           valueKey: 'conversions',
// //           color: seriesColors.red[7],
// //         },
// //       ]}
// //     >
// //       <XAxis title="Marketing Channels" tickText={{ angle: 45 }} />
// //       yAxis={[{ data: "Marketing Channels", scaleType: 'band' }]}
// //       <YAxis
// //         title="Count"
// //         min={0}
// //         max={2100}
// //         include={true}
// //         zeroLine={{ lineStyle: { opacity: 0.5 } }}
// //       />
// //       <Tooltip />
// //     </BarChart>
// //   </ChartContainer>
// // );

// // export default chart;
import ReactApexChart from "react-apexcharts"
import { Box, Card } from "@mui/material";
import "./index.css"
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

const series= [{
  name: 'Marine Sprite',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Striking Calf',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Tank Picture',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Bucket Slope',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: 'Reborn Kid',
  data: [25, 12, 19, 32, 25, 24, 10]
}]


const options= {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
  },

  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  stroke: {
    // width: 1,
    // colors: ['#fff'],
    colors: ["transparent"],
    width: 15
  },
  title: {
    text: 'Fiction Books Sales'
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function (val:any) {
        return val + "K"
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function (val:any) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40,
    show: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {

  }

};

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 490, 100, 200, 380] },{ data: [400, 430, 448, 470, 540, 580, 590, 100, 200, 380] },{ data: [400, 430, 448, 470, 540, 580, 590, 100, 200, 380] }];

export const theme = createTheme({
    components: {
      MuiCard : {
        styleOverrides: {
          root: {
            backgroundColor:'#fff',
            width:"50%",
            display:"flex",
            margin: '10px',
            padding:'20px',
           borderRadius:"10px",
          },
        },
      },
    },
  });

export default function MixedBarChart() {
  const chartOptions = {
    tooltip: {
      marker: { show: false },
      y: {
        // formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom',
      ],
    },
  };
return(
      <ThemeProvider theme={theme}>
       <Card>
       <Box sx={{ mx: 3 , width:"100%" }} dir="ltr">
  {/* <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} /> */}
  <ReactApexChart options={options} series={series} type="bar" height={350} />
  </Box>
  </Card>
     </ThemeProvider>

)
}