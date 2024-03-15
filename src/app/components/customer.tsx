import { Box, Grid, Stack } from '@mui/material';
import CustomCard from './card'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Map from './map';
import CircularProgressWithInner from './CircularProgress'
import CircularBar from './CircleProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,

    // [`&.${linearProgressClasses.colorPrimary}`]: {
    //     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    // },
    // [`& .${linearProgressClasses.bar}`]: {
    //     borderRadius: 5,
    //     backgroundColor: theme.palette.mode === 'light' ? '#309972' : '#309972',
    // },
}));

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} sx={{
                width: 'auto !important',
                height: 'auto !important',
                transform: 'none !important'
            }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}
function Customer() {
    return (
        <>
            <Grid container spacing={2} sx={{ paddingRight: '20px' }}>
                <Grid item xs={2.4}>
                    <CustomCard icon={'src/assets/Icon.png'} backgroundColor='#1C5AA5' text='46' para='Top Channel' data="4% Increase" />
                </Grid>
                <Grid item xs={2.4} >
                    <CustomCard icon={'src/assets/Icon1.png'} backgroundColor='#309972' text="Social" para='Top Channel' data="4% Increase" />
                </Grid>
                <Grid item xs={2.4} >
                    <CustomCard icon={'src/assets/Icon (2).png'} backgroundColor='#F5AE3B' text="7.541%" para="CTR" data="4% Increase" />
                </Grid>
                <Grid item xs={2.4} >
                    <CustomCard icon={'src/assets/Icon (3).png'} backgroundColor='#19B2BB' text="38.76K" para='Impressions' data="4% Increase" />
                </Grid>
                <Grid item xs={2.4} >
                    <CustomCard icon={'src/assets/Icon (4).png'} backgroundColor='#19B2BB' text="38.76K" para='Impressions' data="4% Increase" />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card sx={{
                        '& .MuiCard-root':{
                            padding:'0px'
                        }
                    }}>
                        <Typography sx={{ borderBottom: '1ps solid #c7c7c7' }}>Customer Location</Typography>
                        <CardContent sx={{ borderBottom: "1px solid #c7c7c7", marginTop: '20px' }}>
                            <Map />
                        </CardContent>
                        <Box sx={{ marginTop: "20px", display: 'flex', gap: '20px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <p style={{ marginBottom: '' }}>Europe</p>
                                    <BorderLinearProgress variant="determinate" value={50} sx={{
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#309972',
                                            borderRadius:'8px'
                                        }
                                    }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <p style={{ marginBottom: '' }}>Asia</p>
                                    <BorderLinearProgress variant="determinate" value={20} sx={{
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#F5AE3B',
                                            borderRadius:'8px'
                                        }
                                    }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <p style={{ marginBottom: '' }}>Africa</p>
                                    <BorderLinearProgress variant="determinate" value={60} sx={{
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#D87607',
                                            borderRadius:'8px'
                                        }
                                    }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <p style={{ marginBottom: '' }}>Australia</p>
                                    <BorderLinearProgress variant="determinate" value={40} sx={{
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#328DEC',
                                            borderRadius:'8px'
                                        }
                                    }} />
                                </Grid>
                                <Grid item xs={4}>
                                    <p style={{ marginBottom: '' }}>America</p>
                                    <BorderLinearProgress variant="determinate" value={80} sx={{
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: '#9E49D4',
                                            borderRadius:'8px'
                                        }
                                    }} />
                                </Grid>

                            </Grid>

                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Typography>Gender</Typography>
                        <div style={{textAlign:'center'}}>
                            <ul style={{display:'flex',gap:'25px',margin:'0'}}>
                            <span><span style={{ color: '#184174' }}>•</span>Male</span>
                            <span><span style={{ color: '#8B1D6D' }}>•</span>Female</span>
                            <span><span style={{ color: '#9E9E9E' }}>•</span>Unknown</span>
                            </ul>
                        </div>
                        </div>
                        <CardContent>
                            <Stack direction="row" spacing={2} sx={{
                                width: '100%',
                                // marginBottom: '32px'
                            }}>
                                <CircularBar value={60} color='#184174' fill ='#E4ECFA'/>
                                <CircularBar value={40} color='#8B1D6D' fill ='#FCD2F5'/>
                                <CircularBar value={20} color='#9E9E9E' fill ='#EAEAEA'/>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card>
                        <Typography>Age</Typography>
                        <CardContent sx={{ textAlign: 'start' }}>
                            <p style={{ marginBottom: '' }}>18-35</p>
                            <BorderLinearProgress variant="determinate" value={70} sx={{
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#F5AE3B',
                                    borderRadius:'8px'
                                }
                            }} />
                            <p style={{ marginBottom: '' }}>36-45</p>
                            <BorderLinearProgress variant="determinate" value={40} sx={{
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#713196',
                                    borderRadius:'8px'
                                }
                            }} />
                            <p style={{ marginBottom: '' }}>46-55</p>
                            <BorderLinearProgress variant="determinate" value={30} sx={{
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#328DEC',
                                    borderRadius:'8px'
                                }
                            }} />
                            <p style={{ marginBottom: '' }}>55+</p>
                            <BorderLinearProgress variant="determinate" value={80} sx={{
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#F24E4D',
                                    borderRadius:'8px'
                                }
                            }} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>

    );
}

export default Customer;
