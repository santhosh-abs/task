import { TableCell, TableBody, TableRow, createTheme, ThemeProvider } from "@mui/material";
import { producttablebody } from "./productpageDetails";

const theme = createTheme({
    components: {
        MuiTableBody: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
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

const TableData = ({page, rowsPerPage}: any) => {
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <TableBody>
                    {(rowsPerPage > 0
                        ? producttablebody.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : producttablebody
                    ).map((body, index) => (
                        <TableRow key={index}>
                            <TableCell>{body.product}</TableCell>
                            <TableCell>{body.sale}</TableCell>
                            <TableCell>{body.revenue}</TableCell>
                            <TableCell>{body.acqrate}</TableCell>
                            <TableCell>{body.churnRate}</TableCell>
                            <TableCell>{body.icon}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </ThemeProvider>
        </>
    );
}

export default TableData;