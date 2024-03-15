import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

interface CustomCardProps {
    icon?: string;
    backgroundColor: string;
    text: string;
    para: string;
    data : string
}

function CustomCard({ icon, backgroundColor, text, para ,data}: CustomCardProps) {
    return (
        <Card sx={{
            padding:"30px 0px 30px 0px",
        }}>
                <div style={{display:'flex',gap:'30px',alignItems:'center',justifyContent:"center",width:'90%'}}>
                    {icon &&
                        <div style={{ width: 50, height: 50, borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <img src={icon} alt='icon' style={{ stroke: backgroundColor }} />
                        </div>}
                    <div style={{ display: 'grid' }}>
                        <Typography>
                            {text}
                        </Typography>
                        <p style={{marginBottom:'0',fontSize:'14px',marginTop:'5px'}}>{para}</p>
                       <div style={{display:'flex',gap:'10px',marginTop:'5px'}}>
                       <img src={'src/assets/arrow.png'} alt='icon' style={{ stroke: backgroundColor,textAlign:'center'}} />
                       <p style={{marginBottom:'0',fontSize:'10px',marginTop:'5px'}}>{data}</p>
                       </div>
                    </div>
                </div>
        </Card>
    );
}

export default CustomCard;
