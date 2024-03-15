import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
interface CustomCardProps {
    icon?: string;
    icon1?: string;
    text: string;
    para: string;
}
function GraphCard({ icon, icon1, text, para }: CustomCardProps) {
    return (
        <Card style={{ width: 205, height: 61, display: 'flex', padding: '10px', borderRadius: '8px', border: '1px solid rgba(234, 234, 234, 1)' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ display: 'grid',alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '8px',alignItems: 'center' }}>
                        {icon &&
                            <div style={{ width: 9, height: 9 }}>
                                <img src={icon} alt='icon' />
                            </div>}
                        <Typography style={{ fontSize: '12px', fontWeight: 'normal', color: '#4B4B4B' }}>
                            {text}
                        </Typography>
                    </div>
                    <p className='text-[17px] font-medium text-[#4B4B4B]' style={{ whiteSpace: 'nowrap' }}>{para}</p>
                </div>
                <div className='flex items-center gap-[5px] mt-[5px]'>
                    {icon1 &&
                        <div style={{ width: 96, height: 26, }}>
                            <img src={icon1} alt='icon' />
                        </div>}
                </div>
            </div>
        </Card>
    );
}
export default GraphCard;