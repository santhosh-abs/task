import {
  TableCell,
  TableBody,
  TableRow,
  createTheme,
  ThemeProvider,
  Box,
  Typography,
} from "@mui/material";
import "./index.css"
import { producttablebody } from "./tableData";
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
          fontSize: "15px",
          padding: '12px',
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
              <TableCell style={{ width: '159px' }}>{body.Campaign}</TableCell>
              <TableCell style={{ width: '159px' }}>{body.Age}</TableCell>
              <TableCell style={{ width: '159px' }}>{body.Conversion}</TableCell>
              <TableCell style={{ width: '159px' }}>{body.Impression}</TableCell>
              <TableCell style={{ width: '159px' }}>{body.Tops}</TableCell>
              <TableCell style={{ width: '159px' }}>{body.Cpa}</TableCell>
              <TableCell style={{ width: '159px' }}>{body.Cr}</TableCell>
              <TableCell style={{ display: 'flex', gap: '10px' }}>
                <img src="/svg-images/campaign.svg" className="cursor-pointer" />
                <img src="/svg-images/view-eye.svg" className="cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ThemeProvider>
    </>
  );
};

export default TableData;
