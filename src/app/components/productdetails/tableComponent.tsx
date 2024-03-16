import React from "react";
import { Card, /* Paper, */ Table, TableContainer, TablePagination, ThemeProvider, createTheme } from "@mui/material";
import TableHeader from "./tableHead";
import TableData from "./tableBody";
import ButtonComponent from "./button";
import SearchField from "./textfield";
import { useState } from "react";
import { producttablebody } from "./variables/productpageDetails";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
                    margin: '0px 20px',
                    borderRadius: '20px',
                    // padding: '20px'
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#101213',
                    fontSize: '14px'
                },
            },
        },
    },
})

const TableComponent = ({title}: any) => {

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    // const [searchValue, setSearchValue] = useState('')
    // const handleSearch = (event: any) => {
    //     const { value } = event.target
    //     setSearchValue(value)
    //     setPage(1)
    // }
    const handleChangePage = (event: any, newPage: any) => {
        console.log(event)
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: any) => {
        setPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    return (
        <ThemeProvider theme={theme}>
            <Card>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px 0px'}}>
                    <h3 style={{fontSize: '20px', color: 'rgba(16, 18, 19, 1)'}}>{title}</h3>
                    <div style={{display: 'flex', alignItems: 'center', columnGap: '30px'}}>
                        <SearchField holder='Search' />
                        <ButtonComponent icon={<AddLocationOutlinedIcon />}>Location</ButtonComponent>
                        <ButtonComponent icon={<FilterAltOutlinedIcon />}>Filter</ButtonComponent>
                        <ButtonComponent icon={<CalendarMonthOutlinedIcon />}>This Month</ButtonComponent>
                    </div>
                </div>
                <div style={{padding: '25px'}}>
                    <TableContainer /* component={Paper} */>
                        <Table>
                            <TableHeader />
                            <TableData page={page} rowsPerPage={rowsPerPage} />
                        </Table>
                    </TableContainer>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px'}}>
                    <div>
                        <p style={{color: '#4B4B4B', margin: 0, fontSize: '14px'}}>Showings 1-10 of {producttablebody.length} Products</p>
                    </div>
                    <TablePagination
                        rowsPerPageOptions={[10]}
                        component="div"
                        count={producttablebody && producttablebody.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage} />
                </div>
            </Card>
        </ThemeProvider>
    );
}

export default TableComponent;