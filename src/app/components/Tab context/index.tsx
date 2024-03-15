import * as React from "react";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



export default function TabViewContext(){
  const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

return(
            <TabContext value={value}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All Campaigns" value="1" />
                            <Tab label="Active" value="2" />
                            <Tab label="Paused" value="3" />
                            <Tab label="Suspended" value="4" />


                        </TabList>
                        <TabPanel value="1">
                            {/* <p>OverView</p> */}
                        </TabPanel>
                        <TabPanel value="2">
                            {/* <p>Customer</p> */}
                        </TabPanel>
                    </TabContext>
                    )}