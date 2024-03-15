// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import "./index.css";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function OutlinedCard() {
//   return (
//     <div className="boxes">
//       <Box sx={{ minWidth: 275, maxWidth: 275, margin: "10px" }}>
//         <Card variant="outlined">{card}</Card>
//       </Box>
//       <Box sx={{ minWidth: 275, maxWidth: 275, margin: "10px" }}>
//         <Card variant="outlined">{card}</Card>
//       </Box>
//       <Box sx={{ minWidth: 275, maxWidth: 275, margin: "10px" }}>
//         <Card variant="outlined">{card}</Card>
//       </Box>
//       <Box sx={{ minWidth: 275, maxWidth: 275, margin: "10px" }}>
//         <Card variant="outlined">{card}</Card>
//       </Box>
//       {/* <Box sx={{ minWidth: 275, maxWidth: 275, margin: "10px" }}>
//         <Card variant="outlined">{card}</Card>
//       </Box> */}
//     </div>
//   );
// }
// 
import React from 'react';
import { Grid } from '@mui/material';
import CustomCard from './custumcard'
import icon from "../../assets/Icon.svg"
import icon1 from "../../assets/redarrow.svg"
import icon2 from "../../assets/Icon (2).svg"
import icon3 from "../../assets/Icon (3).svg"
import icon4 from "../../assets/Icon (4).svg"
import icon5 from "../../assets/Icon (5).svg"
import icon6 from "../../assets/dollar.svg"



export default function OutlinedCard() {
    return (

        <Grid container spacing={2} sx={{ padding: '20px 20px 20px 10px' }}>
            <Grid item xs={2.4}>
                <CustomCard icon={icon2} icons={icon} backgroundColor='#1C5AA5' text='46' para='Top Channel' data="4% Increase" />
            </Grid>
            <Grid item xs={2.4} >
                <CustomCard icon={icon3} icons={icon} backgroundColor='#309972' text="Social" para='Top Channel' data="4% Increase" />
            </Grid>
            <Grid item xs={2.4} >
                <CustomCard icon={icon6} icons={icon} backgroundColor='#F5AE3B' text="7.541%" para="CTR" data="4% Increase" />
            </Grid>
            <Grid item xs={2.4} >
                <CustomCard icon={icon4} icons={icon} backgroundColor='#19B2BB' text="38.76K" para='Impressions' data="4% Increase" />
            </Grid>
            <Grid item xs={2.4} >
                <CustomCard icon={icon5} icons={icon1} backgroundColor='#19B2BB' text="38.76K" para='Impressions' data="4% Increase" />
            </Grid>
        </Grid>
    )
}