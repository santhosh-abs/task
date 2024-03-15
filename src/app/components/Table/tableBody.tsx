import {
  TableCell,
  TableBody,
  TableRow,
  createTheme,
  ThemeProvider,
  Box,
  Typography,
} from "@mui/material";
import { producttablebody } from "../../json";
import TinyLineChart from "../Linegraph/index";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Vector from "../../assets/camIcon.svg"
import Eye from "../../assets/view-eye.svg"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import "./index.css"
const theme = createTheme({
  components: {
    MuiTableBody: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#101213",
          fontSize: "14px",
        },
      },
    },
  },
});

const TableData = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TableBody>
          {producttablebody.map((body, index) => (
            <TableRow key={index}>
              <TableCell>
                {/* {body.campname} */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* <Avatar alt={row.name} src={row.avatar} /> */}
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">
                      {" "}
                      {body.campname}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      social
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <TinyLineChart />
              </TableCell>
              <TableCell>{body.spent}</TableCell>
              <TableCell>{body.revenue}</TableCell>
              <TableCell>{body.Roas}</TableCell>
              <TableCell>
                <Stack spacing={1} alignItems="center">
                  <Stack direction="row" spacing={1}>
                    <Chip icon ={<ArrowUpwardIcon sx={{color:"#309972"}}/>} label={body.Engagement} sx={{color:"#309972" , backgroundColor:"#D1FFBD"}} >
                    </Chip>
                  </Stack>
                </Stack>

                {/* {body.Engagement} */}
              </TableCell>
              <TableCell>
              <Stack spacing={1} alignItems="center">
                  <Stack direction="row" spacing={1}>
                    <Chip  icon ={<ArrowDownwardOutlinedIcon sx={{color:"#F24E4D"}} />} label={body.convrate} sx={{color:"#F24E4D" , backgroundColor:"#FFCCCB"}} />
                  </Stack>
                </Stack>
                </TableCell>
              <TableCell>
                <div className="table-v-eye">
                <img src={Vector} alt="v"/>
                <img src={Eye} alt="e"/>
                </div>
                </TableCell>
                
            </TableRow>
          ))}
        </TableBody>
      </ThemeProvider>
    </>
  );
};

export default TableData;
