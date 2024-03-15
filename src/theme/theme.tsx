// theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#434242', // Change primary color
    },
    secondary: {
      main: '#dc004e', // Change secondary color
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Customize button border radius
        },
        containedPrimary: {
          color: 'white', // Change text color of contained primary button
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined', // Set default variant to outlined
      },
      styleOverrides: {
        root: {
          width: '100%', // Set text field width to 100%
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0, // Set default elevation to 0
      },
      styleOverrides: {
        root: {
          backgroundColor: '#333', // Change app bar background color
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between', // Align toolbar content to space-between
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#555',
          fontWeight:'600'
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#EFF5F5', 
          padding:'0px'
        },
      },
      defaultProps: {
        transitionDuration: {
          enter: 500, 
          exit: 300, 
        },
      },
    },
    MuiContainer : {
      styleOverrides: {
        root: {
          backgroundColor:'#fff',
          minWidth:'100%',
          height:'8%',
          display:'flex',
          alignItems:'center'
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          border: '1px solid #EAEAEA',
          padding: '10px 12px',
          marginTop:'40px',
        },
        
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#1C5AA5', // Change the background color of the selected tab
            color: 'white', // Change the text color of the selected tab
          },
          '& .MuiTabs-indicator': {
            display: 'none', // Hide the indicator
          },
        },
      },
    },
    // MuiTabList: {
    //   styleOverrides: {
    //     root: {
    //     '&.MuiTabList-root': {
    //       borderRadius: '58px'
    //     },
    //   }
    //   },
    // },
    MuiTabs: {
      styleOverrides: {
        root: {
          // "&.MuiTab-root": {
          //   backgroundColor: "black",
          //   innerHeight:"40px",
          //   outerHeight:"40px",
          //   height:"40px",
          //   border: 0,
          //   borderBottom: "2px solid",
          //   borderRadius:"10px",
          //   "&:hover": {
          //     border: 0,
          //     borderBottom: "2px solid",
          //   },
          // },
          // "&.Mui-selected": {
          //   backgroundColor: "none",
          //   borderBottom: "2px solid #373985",
          //   borderColor: "#373985",
          // },
          '& .MuiTabs-indicator': {
            display: 'none', // Hide the indicator
          },
          // '& .MuiButtonBase-root ':{
          //   minHeight:"40px",
          //   minWidth:"auto",
          //   fontSize:"14px",
          // },
          // '& .MuiTabs-flexContainer':{
          //   borderRadius:"10px",
          //   border:"solid 1px #D3D3D3",
          //   overflow:"hidden",
          // }
        },
      },
    },
    // MuiTabPanel : {
    //   styleOverrides: {
    //     root: {
    //       padding:"0px",
    //       paddingTop:'24px'
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: {
         borderRadius:'10px',
         padding:'15px',
         marginBottom:'13px',
        //  height:'400px'
        //  textAlign:'center'
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
         textAlign:'center',
        },
      },
    },
    MuiCircularProgress:{
      styleOverrides: {
        root: {
        color:'#F24E4D',
        '&.MuiCircularProgress-root': {
          width: 'auto',
          height: 'auto'
        },
         
        },
       
        svg:{
          height:'200px',
          width:'200px'
        }
      },
    }, 
  
   
  },
});
