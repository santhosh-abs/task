import { Card, Paper, Table, TableContainer, Typography } from "@mui/material";
import TableHeader from "./tableHead";
import TableData from "./tableBody";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ButtonComponent from "./button"
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import "./index.css"
import SearchField from "./text";

const TableComponent = ({ title }: any) => {
    return (
        <div className="bg-[#fff] rounded-[18px] mt-[40px] shadow-md">
            <Card>
                <div className="product-head">
                    <p className="text-[20px] text-[#101213] font-medium">{title}</p>
                    <div className="table-filter">
                        <div className="table-filter-search">
                            <SearchField holder='search' />
                        </div>
                        <div className="flex gap-[10px]">
                            <ButtonComponent icon={<AddLocationIcon />}>Location</ButtonComponent>
                            <ButtonComponent icon={<FilterAltIcon />}>Filter</ButtonComponent>
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
                        <Typography style={{ fontSize: '14px', color: '#4B4B4B' }}>
                            Showing 1 - 5 of 47 Campaings
                        </Typography>
                        <Stack spacing={2}>
                            <Pagination count={10} shape="rounded" />
                        </Stack>
                    </div>
                </div>

            </Card>
        </div>
    );
}

export default TableComponent;
