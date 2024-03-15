import Box from '@mui/material/Box';
import CircularProgress, {
    CircularProgressProps,
    circularProgressClasses,
} from '@mui/material/CircularProgress';



const CircularBar = ({ value, color, fill, ...props }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: fill,
                    width: 'auto !important',
                    height: 'auto !important',
                    transform: 'none !important',
                    '& .MuiCircularProgress-svg': {
                        width: '130px',
                        height: '130px',
                    },
                }}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="determinate"
                disableShrink
                sx={{
                    color: color,
                    animationDuration: '550ms',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 'auto !important',
                    height: 'auto !important',
                    transform: 'none !important',
                    '& .MuiCircularProgress-circle': {
                        fill: fill,
                    },
                    '& .MuiCircularProgress-svg': {
                        width: '130px',
                        height: '130px',
                        strokeLinecap: 'round',
                    },
                }}
                size={40}
                thickness={3}
                value={value}
            />
            <h3 style={{fontWeight:'400',fontSize:'20px',fontFamily:'DM Sans' ,position:'absolute' ,top:'36px' ,right:'46px'}}>{value}%</h3>
        </Box>
    );
};

export default CircularBar;
