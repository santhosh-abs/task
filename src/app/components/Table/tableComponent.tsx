import { Button, Card, Paper, Table, TableContainer, Typography } from "@mui/material";
import TableHeader from "./tableHead";
import TableData from "./tableBody";
import CustomSearch from "../Search/index"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
// import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
// import BasicDatePicker from "../DatePicker/index"
import TabViewContext from "../Tab context/index"
import ButtonComponent from "./button"
// import SearchField from "./text"
// import DeleteIcon from '@mui/icons-material/Delete';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import "./index.css"

const TableComponent = () => {
    return (
        <div className="table-container">
            <Card>
                <div className="product-head">
                    <TabViewContext/>
                    {/* <Typography variant="h5">All Products</Typography> */}
                    <div className="table-filter">
                        <div className="table-filter-search">
                        <CustomSearch/>
                        </div>

                        <div className="table-filter-sub">
                            {/* <Button sx={{border:"solid 1px grey", outline:"none",margin:"5px"}}><AddLocationOutlinedIcon/>
                            <Typography variant="body1">
                            Location        
                            </Typography>
                            </Button> */}
                            <ButtonComponent icon={<AddLocationIcon />}>Location</ButtonComponent>
                            {/* <Button sx={{border:"solid 1px grey", outline:"none",margin:"5px"}}><FilterAltOutlinedIcon/>
                            <Typography variant="body1">
                            Filter
                            </Typography>
                            </Button> */}
                            <ButtonComponent icon={<FilterAltIcon />}>Filter</ButtonComponent>
                            {/* <BasicDatePicker/> */}
                            <ButtonComponent icon={<DateRangeIcon />}>This Month</ButtonComponent>
                            
                        </div>
 
                    </div>
                </div>
                <div className="table-component">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHeader />
                            <TableData />
                        </Table>
                    </TableContainer>
                    <div className="pagination-div">
                        <Typography variant="body1">
                            Showing 1 - 5 of 47 Campaings
                        </Typography>
                     <Stack spacing={2}>
                        <Pagination count={10} />
                    </Stack>
                    </div>
                </div>

            </Card>
        </div>
    );
}

export default TableComponent;




// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// export default function BasicPagination() {
//   return (
//     <Stack spacing={2}>
//       <Pagination count={10} />
//       <Pagination count={10} color="primary" />
//       <Pagination count={10} color="secondary" />
//       <Pagination count={10} disabled />
//     </Stack>
//   );
// }