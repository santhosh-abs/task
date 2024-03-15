import React from "react";
import { Grid } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import CustomCard from '../components/campaignComponents/card';
import TableComponent from '../components/campaignComponents/Table/tableComponent';
import ButtonComponent from '../components/campaignComponents/Table/button';
import GraphCard from '../components/campaignComponents/graphCard';
import EcommerceYearlySales from '../components/campaignComponents/graph';
import { sidebar } from '../dashboard/dasboard';

export default function Campaign() {

    return (
        <>
            <section className='bg-[#EFF7FF] top-[0] absolute w-full'>
                <div className='flex'>
                    <div className="navbar">
                        <div style={{ backgroundColor: "#FFFFFF" }}>
                            {sidebar.map((side, index) => (
                                <div key={index} style={{ padding: "24px" }}>
                                    <img src={side} alt="sidebar" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex-grow p-[20px]'>
                        <div className='flex justify-between items-center mb-[20px]'>
                            <p className='text-[28px] font-bold text-[#202224]'>Campaign</p>
                            <div className='flex gap-[10px]'>
                                <button className='group hover:bg-[#1C5AA5] px-[12px] py-[10px] rounded-[4px] border-[#D6D6D6] border-[1px] bg-[#fff] shadow-sm'>
                                    <ReportOutlinedIcon className='group-hover:text-[#fff]' />
                                </button>
                                <button className='bg-[#1C5AA5] rounded-[4px] px-[12px] py-[10px] text-[#fff] text-[14px]'>Run Simulation</button>
                            </div>
                        </div>
                        <Grid container spacing={2} sx={{ paddingRight: '20px' }}>
                            <Grid item xs={2.4}>
                                <CustomCard icon={'/svg-images/eye-icon.svg'} icon1={'/svg-images/Icon (1).svg'} para1='4% Increase' text='28,909' para='Impression' />
                            </Grid>
                            <Grid item xs={2.4} >
                                <CustomCard icon={'/svg-images/reach.svg'} icon1={'/svg-images/Icon (1).svg'} para1='2.5% Increase' text="$55 M" para='Reach' />
                            </Grid>
                            <Grid item xs={2.4} >
                                <CustomCard icon={'/svg-images/spend.svg'} icon1={'/svg-images/Icon (1).svg'} para1='4% Increase' text="$1,075" para="Spent" />
                            </Grid>
                            <Grid item xs={2.4} >
                                <CustomCard icon={'/svg-images/cost.svg'} icon1={'/svg-images/Icon (1).svg'} para1='1.56% Increase' text="142" para='Avg Cost Per View' />
                            </Grid>
                            <Grid item xs={2.4} >
                                <CustomCard icon={'/svg-images/engagement.svg'} icon1={'/svg-images/Icon.svg'} para1='-2.75% Decrease' text="48.76%" para='Avg. Engagement' />
                            </Grid>
                        </Grid>
                        <div className='bg-[#fff] h-[382px] rounded-[16px] mt-[40px] shadow-md p-[30px] mx-auto'>
                            <div className='flex justify-between items-center mb-[25px]'>
                                <div className='flex gap-[20px]'>
                                    <ButtonComponent icon={<DateRangeIcon />}>2015-08-01</ButtonComponent>
                                    <ButtonComponent icon={<DateRangeIcon />}>2016-09-02</ButtonComponent>
                                </div>
                                <div className='flex gap-[20px]'>
                                    <GraphCard icon='/svg-images/blue.svg' text='Impression' para='24,0099' icon1='/svg-images/impression.png' />
                                    <GraphCard icon='/svg-images/yellow.svg' text='Top' para='3,098' icon1='/svg-images/top.svg' />
                                    <GraphCard icon='/svg-images/pink.svg' text='Conversions' para='3,782' icon1='/svg-images/conversions.svg' />
                                </div>
                            </div>
                            <EcommerceYearlySales />
                        </div>
                        <TableComponent title='All Campaign' />
                    </div>
                </div>
            </section>
        </>
    );
}