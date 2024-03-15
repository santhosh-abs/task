import { TableCell, TableHead, TableRow, ThemeProvider, createTheme } from "@mui/material";
import { producttablehead } from "./variables/productpageDetails";

const theme = createTheme({
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F7F7F7',
                    textTransform: 'uppercase',
                    border: '1px solid #F1F1F1'
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '8px ',
                    fontWeight: 'bold',
                    color: '#9E9E9E',
                    fontSize: '12px'
                },
            },
        },
    },
})

const TableHeader = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <TableHead>
                    <TableRow>
                        {producttablehead.map((head, index) => (
                            <TableCell key={index} className="text-transform">{head}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
            </ThemeProvider>
        </>
    );
}

export default TableHeader;