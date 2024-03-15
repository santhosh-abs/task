import React from 'react';
import { Box, Grid, ThemeProvider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart, SparkLineChart } from '@mui/x-charts';
import CircularProgressWithInner from './CircularProgress';
import { theme } from '../theme';

function Overview() {
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                <Stack direction="row" spacing={2} sx={{
                    width: '100%',
                    marginBottom: '32px'
                }}>
                    <Card sx={{
                        width: '100%'
                    }}>
                        <CardContent>
                            <div style={{position:'relative'}}>
                            <img src='src/assets/Vector2.png' alt='image' />
                            <img src='src/assets/Vector.png' alt='image' style={{position:'absolute',right:'59px',top:'16px'}}/>
                            <div style={{display:'grid',textAlign:'center',position:'absolute',right:'132px',top:'98px',gap:'20px'}}>
                                <h1 style={{margin:'0'}}>$43.57M</h1>
                                <p style={{margin:'0'}}>Revenue Generated</p>
                                <div style={{display:'flex',justifyContent:'center'}}> <img src='src/assets/_Badge base.png' alt='icon'/></div>
                            </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                <p style={{ color: '#9E9E9E', marginTop: '10px', marginBottom: '0px', fontSize: '12px' }}>Selected Period</p>
                                <p style={{ color: '#9E9E9E', marginTop: '10px', marginBottom: '0px', fontSize: '12px' }}>Selected Period</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card sx={{
                        width: '100%'
                    }}>
                        <Typography>Response Rate</Typography>
                        <CardContent>
                                 <CircularProgressWithInner value={70} />
                        </CardContent>
                        <p>Total Revenue Generated: $2,500,000</p>
                        <p>Total Campaign Costs: $714,285</p>
                    </Card>
                    <Card sx={{
                        width: '100%'
                    }}>
                        <Typography>Recommendations</Typography>
                        <Box>
                        <Alert severity="success" 
                        sx={{
                            '& .MuiPaper-elevation' : {
                                height:'auto'
                            }
                        }}
                        >
                            <AlertTitle>Success</AlertTitle>
                            This is a success Alert with an encouraging title.
                        </Alert>
                        <Alert severity="info">
                            <AlertTitle>Info</AlertTitle>
                            This is an info Alert with an informative title.
                        </Alert>
                        <Alert severity="warning">
                            <AlertTitle>Warning</AlertTitle>
                            This is a warning Alert with a cautious title.
                        </Alert>
                        <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            This is an error Alert with a scary title.
                        </Alert>
                        </Box>

                    </Card>
                </Stack>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card>
                        <Typography>Real Time Sale</Typography>
                        <CardContent>
                            <LineChart
                                sx={{
                                    '& .MuiLineElement-root': {
                                        stroke: '#1C5AA5',
                                    },
                                    '& .MuiMarkElement-root': {
                                        display: 'none',
                                    }
                                }}
                                xAxis={[{ data: [0, 200, 400, 600, 800] }]}
                                series={[
                                    {
                                        data: [2, 5.5, 2, 8.5, 1.5],
                                    },
                                ]}
                                width={900}
                                height={350}
                            />


                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <Typography>Total Conversions: 2,500</Typography>
                        <LineChart
                            sx={{
                                '& .MuiLineElement-root': {
                                    stroke: '#A7C26E',
                                },
                                '& .MuiMarkElement-root': {
                                    display: 'none',
                                },
                                '& .MuiChartsAxis-root': {
                                    display: 'none',
                                }

                            }}
                            xAxis={[{ data: [0, 200, 400, 600, 800] }]}
                            yAxis={[]} // Empty array to hide y-axis
                            series={[
                                {
                                    data: [2, 9.8, 2, 7.5, 1.5],
                                },
                            ]}
                            width={450}
                            height={165}
                        />
                    </Card>
                    <Card>
                        <Typography>Conversion Rate: 12%</Typography>
                        <LineChart
                            sx={{
                                '& .MuiLineElement-root': {
                                    stroke: '#A7C26E',
                                },
                                '& .MuiMarkElement-root': {
                                    display: 'none',
                                },
                                '& .MuiChartsAxis-root': {
                                    display: 'none',
                                },
                            }}
                            xAxis={[{ data: [0, 200, 400, 600, 800] }]}

                            yAxis={[]}
                            series={[
                                {
                                    data: [2, 9.8, 2, 6.5, 1.5],
                                },
                            ]}
                            width={450}
                            height={165}
                        />

                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card>
                        <Typography>Cost Per Acquisition</Typography>
                        <SparkLineChart 
                         sx={{
                            '& .MuiLineElement-root': {
                                stroke: '#D87607',
                                strokeWidth:'4'
                            },
                            '& .MuiMarkElement-root': {
                                stroke: '#D87607',
                            },
                        }}
                        
                        data={[1, 4, 2, 5, 7, 2, 4, 6]} 
                        width={400}
                        height={350}
                        />
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card>
                        <Typography>Conversion Tracking</Typography>
                        <BarChart
                            sx={{
                                '& .MuiBarElement-root': {
                                    width:'10px',
                                },
                            }}
                            xAxis={[{ scaleType: 'band', data: ['Jun', 'July', 'Aug','Sep','Oct','Nov','Dec'] }]}
                            series={[{ data: [4, 3, 2] }, { data: [1, 2, 3] }]}
                            width={900}
                            height={350}
                        />
                    </Card>
                </Grid>
            </Grid>
        </ThemeProvider>

    );
}

export default Overview;
