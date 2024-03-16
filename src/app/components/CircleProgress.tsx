import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';



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
                        width: '110px',
                        height: '110px',
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
                        width: '110px',
                        height: '110px',
                        strokeLinecap: 'round',
                    },
                }}
                size={40}
                thickness={3}
                value={value}
            />
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
          >{`${Math.round(100)}%`}</Typography>
        </Box>
        </Box>
    );
};

export default CircularBar;
