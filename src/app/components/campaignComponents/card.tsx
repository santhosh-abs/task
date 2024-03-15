import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
interface CustomCardProps {
    icon?: string;
    icon1?: string;
    text: string;
    para: string;
    para1: string;
}
function CustomCard({ icon, icon1, para1, text, para }: CustomCardProps) {
    return (
        <Card style={{ width: 245, height: 120, display: 'flex',backgroundColor:"#fff", borderRadius: '12px', margin: 'auto', justifyContent: 'space-between', alignItems: 'center', padding: 20 }}>
            <div style={{ display: 'flex', gap: '15px' }}>
                {icon &&
                    <div style={{ width: 65, height: 65, borderRadius: '20px' }}>
                        <img src={icon} alt='icon' />
                    </div>}
                <div style={{ display: 'grid' }}>
                    <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#112340' }}>
                        {text}
                    </Typography>
                    <p className='text-[14px] font-normal text-[#4B4B4B]' style={{ whiteSpace: 'nowrap' }}>{para}</p>
                    <div className='flex items-center gap-[5px] mt-[5px]'>
                        {icon1 &&
                            <div style={{ width: 16, height: 16, }}>
                                <img src={icon1} alt='icon' />
                            </div>}
                        <p className='text-[12px] font-normal text-[#A3A3A3]' style={{ whiteSpace: 'nowrap' }}>{para1}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
export default CustomCard;