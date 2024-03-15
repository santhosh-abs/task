import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import "./index.css"
interface CustomCardProps {
    icon?: string;
    icons?: string;
    backgroundColor: string;
    text: string;
    para: string;
    data : string
  
}

export const theme = createTheme({


  components: {
    MuiCard : {
      styleOverrides: {
        root: {
          backgroundColor:'#fff',
          // width:"100%",
          // display:"flex",
          // margin: '10px',
          // padding:'20px',
          boxShadow:"none",
         borderRadius:"10px",
        },
      },
    },
  },
});

function CustomCard({  icon , icons, text, para,data  }: CustomCardProps) {
    return (
      <ThemeProvider theme={theme}>
        {/* <Card sx={{
            padding:" 30px",
            marginTop: "30px",
        }}>
                <div style={{display:'flex',gap:'30px',alignItems:'center',justifyContent:"center",width:'90%'}}>
                    {icon &&
                        <div style={{ width: 50, height: 50, borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <img src={icon} alt='icon' style={{ stroke: backgroundColor }} />
                        </div>}
                    <div style={{ display: 'grid' }}>
                        <Typography sx={{ fontFamily: 'default' ,fontWeight:"900"}} >
                            {text}
                        </Typography>
                        <p style={{marginBottom:'0',fontSize:'14px',marginTop:'5px',fontFamily:"Arial"}}>{para}</p>
                       <div style={{display:'flex',gap:'10px',marginTop:'5px'}}>
                       <img src={'src/app/assets/arrow.svg'} alt='icon' style={{ stroke: backgroundColor,textAlign:'center'}} />
                       <p style={{marginBottom:'0',fontSize:'10px',marginTop:'5px',fontFamily:"Arial"}}>{data}</p>
                       </div>
                    </div>
                </div>
        </Card> */}
        <Card style={{ width: 225, height: 100, display: 'flex', borderRadius: '12px', margin: 'auto', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <div style={{ display: 'flex', alignItems:'center',justifyContent:"center",width:'90%',gap:'30px' }}>
                {icon &&
                    <div style={{ width: 65, height: 65, borderRadius: '20px' }}>
                        <img src={icon} alt='icon' />
                    </div>}
                <div style={{ display: 'grid' }}>
                    <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#112340' }}>
                        {text}
                    </Typography>
                    <p className='main-para' style={{ whiteSpace: 'nowrap' ,margin:'0'}}>{para}</p>
                    <div className='para-container'>
                        {icons &&
                            <div style={{ width: 16, height: 16, }}>
                                <img src={icons} alt='icon' />
                            </div>}
                        <p className='card-top-p' style={{ whiteSpace: 'nowrap' }}>{data}</p>
                    </div>
                </div>
            </div>
        </Card>
        </ThemeProvider>
    );
}
export default CustomCard;