import React from "react";
import Card from '@mui/material/Card';

interface CustomCardProps {
    icon?: string;
    text: string;
    para: string;
    data: string;
    arrow: string
}

function CustomCard({ icon, text, para, data, arrow }: CustomCardProps) {
    return (
        <>
            <Card sx={{
                padding: "21px",
                borderRadius: '12px'
            }}>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: "space-between" }}>
                    {icon &&
                        <div style={{ width: 65, height: 65, borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <img src={icon} alt='icon' />
                        </div>}
                    <div style={{ display: 'grid' }}>
                        <h4 className='h4'>
                            {text}
                        </h4>
                        <p style={{ marginBottom: '0', fontSize: '12px', marginTop: '5px', color: '#4B4B4B' }}>{para}</p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                            <img src={arrow} alt='icon' />
                            <p style={{ marginBottom: '0', fontSize: '10px', marginTop: '5px', color: '#A3A3A3' }}>{data}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default CustomCard;