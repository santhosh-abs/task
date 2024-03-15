import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import OutlinedButtons from "../Button/index"
import "./index.css"
import OutlinedCard from "../card/index"
import MixedBarChart from "../Graph/index"
import StackBars from "../Graph1/index"
import TableComponent from "../Table/tableComponent"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Typography } from '@mui/material';
// import { Card } from '@mui/material';
// import { Container } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1450,}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <section className='slider'>
        <div className='topdiv'>
          <button className='exit-arrow-button' onClick={toggleDrawer(anchor, false)} >
            <ArrowBackOutlinedIcon />
          </button>
            {/* <p className='p'>Platinum Credit Card</p> */}
            <Typography variant="h6" component="p">
            Platinum Credit Card
            </Typography>
        </div>

        <OutlinedCard/>
        <div className='graphContainer'>
        <MixedBarChart/>
        <StackBars/>
        </div>

        <div className='table-top-container'>
        <TableComponent/>
        </div>


      </section>

    </Box>
  );

  return (
    <div>
      {/* {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} color="primary">Open</Button>
          <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{ style: { width: '95%', height: '100%' } }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}
       <OutlinedCard/>
        <div className='graphContainer'>
        <MixedBarChart/>
        <StackBars/>
        </div>

        <div className='table-top-container'>
        <TableComponent/>
        </div>
    </div>
  );
}
