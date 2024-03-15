
// import { ChartContainer } from '@mui/x-charts';
// import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';

// const pData = [240, 139, 980, 390, 480, 380, 430 ];
// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];

// export default function TinyLineChart() {
//   return (
//     <div className='line-graph-div'>
//     <ChartContainer
//       width={180}
//       height={150}
//       series={[{ type: 'line', data: pData }]}
//       xAxis={[{ scaleType: 'point', data: xLabels }]}
//       sx={{
//         '.MuiLineElement-root': {
//           stroke: '#8884d8',
//           strokeWidth: 3,
//         },
//         '.MuiMarkElement-root': {
//           stroke: '#8884d8',
//           scale: '0.6',
//           fill: '#fff',
//           strokeWidth: 3,

//         },
//       }}
//       disableAxisListener
//     >
//       <LinePlot />
//       <MarkPlot />
//     </ChartContainer>
//     </div>
//   );
// }
import ReactApexChart from "react-apexcharts"

// const title="Total Balance"
// const percent:any={data:-0.1}
// const total={total:18765}
const chartColor="#A9C370"
const chartData={chartData:[56, 47,67,78,35, 40, 62, 73, 30, 23, 54, 67, 68]}


export default function TinyLineChart() {


const chartOptions ={
  colors: [chartColor],
  chart: { animations: { enabled: true }, sparkline: { enabled: true } },
  stroke: { width: 2 },
  tooltip: {
    x: { show: false },
    y: {
      // formatter: (seriesName) => fNumber(seriesName),
      title: {
        formatter: () => '',
      },
    },
    marker: { show: false },
  },
};
return (
  <>
    <ReactApexChart type="line" series={[{ data: chartData.chartData }]} options={chartOptions} width={50} height={50} />
  </>
  )}