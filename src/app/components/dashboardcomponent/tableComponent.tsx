import {
  Card,
  Paper,
  Table,
  TableContainer,
  TablePagination,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonComponent from "../components/button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import download from '../../../assets/images/download.svg'
import TableHeader from "./tableHead";
import TableData from "./tableBody";
import SearchField from "./textfield";
import { producttablebody } from "./productpageDetails";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          margin: "10px 0px",
          borderRadius: "10px",
          padding: "10px",
          boxShadow:
            "4.4914288521px 4.4914288521px 40.4228630066px 0px rgba(0, 0, 0, 0.0509803922)",
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

const TableComponent = ({ title }: any) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [searchValue, setSearchValue] = useState('')
  // const handleSearch = (event: any) => {
  //     const { value } = event.target
  //     setSearchValue(value)
  //     setPage(1)
  // }
  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  const [Product, setProduct] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setProduct(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <div className="product-head">
          <div className="d-flex justifybetween alignItem">
            <h3>Top Products in revenue</h3>
            <div className="filter-field d-flex alignItem">
              <SearchField holder="Search" />
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Product</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={Product}
                  label="Product"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Product</MenuItem>
                  <MenuItem value={20}>Product</MenuItem>
                  <MenuItem value={30}>Product</MenuItem>
                </Select>
              </FormControl>
              <div className="download d-flex">
                <img src={download}/>
                <p>Export</p>
              </div>

              {/* <ButtonComponent icon={<DeleteIcon />}>Location</ButtonComponent>
                        <ButtonComponent icon={<DeleteIcon />}>Filter</ButtonComponent>
                        <ButtonComponent icon={<DeleteIcon />}>This Month</ButtonComponent> */}
            </div>
          </div>
        </div>
        <div className="table-component">
          <TableContainer component={Paper}>
            <Table>
              <TableHeader />
              <TableData page={page} rowsPerPage={rowsPerPage} />
            </Table>
          </TableContainer>
        </div>
        <div>
          <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={producttablebody && producttablebody.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </Card>
    </ThemeProvider>
  );
};

export default TableComponent;
