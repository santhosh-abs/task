import { TextField, ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    '& $notchedOutline': {
                        borderColor: '#EAEAEA', // change border color
                    },
                    '&:hover $notchedOutline': {
                        borderColor: '#EAEAEA', // change border color on hover
                    },
                    '&$focused $notchedOutline': {
                        border: 'none',
                        // borderColor: '#EAEAEA', // change border color when focused
                    },
                },
                input: {
                    backgroundColor: '#FFFFFF',
                    color: '#4B4B4B',
                    fontSize: '14px',
                    // textTransform: 'capitalize',
                    padding: '9px 13px',
                    border: 'none'
                }
            },
        },
    },
})


const SearchField = ({ holder }: any) => {
    return (
        <ThemeProvider theme={theme}>
            <TextField placeholder={holder} />
        </ThemeProvider>
    );
}

export default SearchField;