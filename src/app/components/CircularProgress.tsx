import React from 'react';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

export  function  CircularProgressWithInner ({ value,color1,color2  }) {
    return (
        <><Box sx={{ position: 'relative'
         }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: color1,
            opacity:'20%',
              width: 'auto !important',
              height: 'auto !important',
              transform: 'none !important',
          }}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: color2,
            width: 'auto !important',
            height: 'auto !important',
            transform: 'none !important',
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={40}
          thickness={4}
        />
      </Box>
  
    </>
    );
};



export  function Circle(color) {
    return(
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" sx={{
              backgroundColor:color,
              width: 'auto !important',
              height: 'auto !important',
              transform: 'none !important',
              '& .MuiCircularProgress-svg': {
                width: '130px',
                height: '130px',
            },
            '& .MuiCircularProgress-circle': {
                fill:'rgba(242, 78, 77, 0.2)',
            }
        }} value={100} size={40}
        thickness={4}/>
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
    )
}