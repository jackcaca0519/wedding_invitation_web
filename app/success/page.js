import Link from 'next/link'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SuccessPage = async () => {
    return (
        <Container maxWidth="sm" style={{padding: '20px'}}>
            <Card style={{textAlign: 'center'}}>
                <CardContent style={{flexDirection:'row', justifyContent:'center'}}>
                    <CheckCircleOutlineIcon style={{color: 'green', fontSize: '50px'}}></CheckCircleOutlineIcon>
                    <div>資料已送出</div>
                </CardContent>
                <CardActions style={{flexDirection:'row', justifyContent:'center'}}>
                    <Link href="/"><Button size="small" variant="outlined">返回首頁</Button></Link>
                </CardActions>
            </Card>
        </Container>
    );
};


export default SuccessPage;