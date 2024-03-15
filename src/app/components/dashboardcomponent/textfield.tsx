import { TextField, ThemeProvider, createTheme ,InputAdornment} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


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


const SearchField = ({ holder ,icon}: any) => {
    return (
        <ThemeProvider theme={theme}>
            <TextField placeholder={holder} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon/>
                        </InputAdornment>
                    ),
                }}/>
        </ThemeProvider>
    );
}

export default SearchField;