import { Card } from "@mui/material";
import "./index.css"
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';
// import { Padding } from "@mui/icons-material";
// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

// const xLabels = [
//   'Page A',
//   'Page B',
//   'Page C',
//   'Page D',
//   'Page E',
//   'Page F',
//   'Page G',
// ];
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

export default function StackBars() {
  return (
    <ThemeProvider theme={theme}>
    <Card>
    <BarChart
    slotProps={{
      bar: {
        rx: 10,
        // ry: 10,
      },
    }}
     sx={{
      [`.MuiChartsAxis-tick `]:{
        display:"none",
      },
      [`.MuiChartsAxis-line `]:{
        display:"none",
      },
      [`.MuiBarElement-root`]:{
        fill : '#F24E4D',
        padding:"50px",
      },
      [`.MuiChartsLegend-mark`]:{
        display:"none",
      }
  }}
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: '' },
        // { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: '' },
        // { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: '' },
      ]}
      width={600}
      height={350}
    />
    </Card>
    </ThemeProvider>
  );
}

