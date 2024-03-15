import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

const CircularProgressWithInner = ({ value, ...props }) => {
    return (
        <><Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: '#F24E4D',
                    opacity: '20%',
                    width: 'auto !important',
                    height: 'auto !important',
                    transform: 'none !important'
                }}
                size={40}
                thickness={4}
                {...props}
                value={100} />
            <CircularProgress
                variant="determinate"
                disableShrink
                sx={{
                    color: '#F24E4D',
                    animationDuration: '550ms',
                    position: 'absolute',
                    top: '0px',
                    left: '100px',
                    width: 'auto !important',
                    height: 'auto !important',
                    transform: 'none !important',
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                value={value} />

        </Box><Box style={{ position: 'absolute', backgroundColor: '#F24E4D' }}>
                <CircularProgress
                    variant="determinate"
                    disableShrink
                    sx={{
                        color: '#F24E4D',
                        animationDuration: '550ms',
                        position: 'absolute',
                        top: '-169px',
                        left: '134px',
                        width: 'auto !important',
                        height: 'auto !important',
                        transform: 'none !important',
                        '& .MuiCircularProgress-svg': {
                            width: '130px',
                            height: '130px',
                        },
                        '& .MuiCircularProgress-circle': {
                            fill: 'rgba(242, 78, 77, 0.2)',
                        }
                    }}
                    value={100}
                    thickness={4} />
            </Box>
            <h2 style={{fontWeight:'700' ,position:'relative',top:'-135px',right:'0px'}}>{value}%</h2></>
    );
};

export default CircularProgressWithInner;
