import { Button, ThemeProvider, createTheme } from "@mui/material";


const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
                    color: '#4B4B4B',
                    fontSize: '14px',
                    textTransform: 'capitalize',
                    border: '1px solid #EAEAEA',
                    borderRadius: '8px',
                },
            },
        }
    },
})


const ButtonComponent = ({ children, icon }: any) => {
    return (
        <ThemeProvider theme={theme}>
            <Button startIcon={icon}>
                {children}
            </Button>
        </ThemeProvider>
    );
}

export default ButtonComponent;