import React, { useState } from "react";
import { TableCell, TableBody, TableRow, createTheme, ThemeProvider, Chip } from "@mui/material";
import { producttablebody } from "./variables/productpageDetails";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import Overview from "../overview";
import Customer from "../customer";
import AnchorTemporaryDrawer from "../campaingedawer";
import { theme } from "../../../theme/theme";


const theme1 = createTheme({
    components: {
        MuiTableBody: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #F1F1F1'
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    color: '#101213',
                    fontSize: '14px',
                    padding: '16px 24px'
                },
            },
        },
    },
})

const TableData = ({ page, rowsPerPage }: any) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={theme1}>
                <TableBody>
                    {(rowsPerPage > 0
                        ? producttablebody.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : producttablebody
                    ).map((body, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ width: '360px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', columnGap: '8px' }}>
                                    <img src={body.icon} alt='icon' />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span>{body.product}</span>
                                        <span style={{ color: '#9E9E9E' }}>{body.info}</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell sx={{ width: '360px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {body.sale}
                                    <SparkLineChart
                                        sx={{ stroke: '#3099723b' }}
                                        data={[1, 2, 4, 5, 4, 7, 8, 9, 7, 8, 6]}
                                        width={80}
                                        height={50}
                                        curve="natural"
                                        area
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ width: '360px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {body.revenue}
                                    <SparkLineChart
                                        data={[0, 2, 4, 5, 10, 8, 10, 7, 5, 8, 6,]}
                                        width={80}
                                        height={50}
                                        curve="natural"
                                        area
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ width: '160px' }}><Chip sx={{ color: "#309972", backgroundColor: "#3099723b" }} label={body.acqrate} /></TableCell>
                            <TableCell sx={{ width: '160px' }}><Chip sx={{ color: "#F24E4D", backgroundColor: "#f24e4d4d" }} label={body.churnRate} /></TableCell>
                            <TableCell>
                                <div style={{ display: 'flex', columnGap: '8px' }}>
                                    <img src='/images/product-indication-icon.svg' alt='icon' />
                                    <img src='/images/view-eye.svg' alt='icon' onClick={() => setOpen(true)} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ style: { width: '95%', height: '100%' } }}
            >
                <Container>
                    <div onClick={() => setOpen(false)} style={{ padding: '15px' }}>
                        <ArrowBackIcon />
                    </div>
                </Container>
                <div style={{ marginLeft: '40px' }}>
                    <TabContext value={value}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Overview" value="1" />
                            <Tab label="Campaign" value="2" />
                            <Tab label="Customer" value="3" />
                        </TabList>
                        <TabPanel value="1">
                            <Overview />
                        </TabPanel>
                        <TabPanel value="2">
                            <AnchorTemporaryDrawer />
                        </TabPanel>
                        <TabPanel value="3">
                            <Customer />
                        </TabPanel>
                    </TabContext>
                </div>
                <div>
                    <Button></Button>
                </div>

            </Drawer>
            </ThemeProvider >
        </>
    );
}

export default TableData;