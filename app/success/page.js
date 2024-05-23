import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SuccessPage = async () => {
    return (
        <>
            <div className="h-100 attending_area p-0 d-flex align-items-center">
                <Container className="main_attending_area" maxWidth="sm" style={{padding: '20px'}}>
                    <div className="flower_1 d-none d-lg-block">
                        <Image src="/img/appointment/flower-top.png"
                            width={400}
                            height={200}/>
                    </div>
                    <div className="flower_2 d-none d-lg-block">
                        <Image src="/img/appointment/flower-bottom.png"
                            width={150}
                            height={150}/>
                    </div>
                    <Card className='p-3' style={{position:'relative', height: 500, boxShadow: '0 0 20px 0px #c5c5c5', backgroundImage: "url('/img/carousel-1.jpg')", backgroundPosition: 'center',backgroundSize: 'cover'}}>
                        <div className="h-100 d-flex justify-content-center align-items-center" style={{background: '#00000070', backdropFilter: 'blur(3px)', borderRadius: 3,}}>
                            <div className='w-100 d-flex flex-column align-items-center pt-4' style={{position: 'absolute', top: 0}}>
                                <CheckCircleOutlineIcon style={{color: 'white', fontSize: '50px'}}></CheckCircleOutlineIcon>
                                <h1 className="text-uppercase font-weight-normal m-0 text-white" style={{letterSpacing: 2}}>報名成功</h1>
                            </div>
                            <CardContent style={{flexDirection:'row', justifyContent:'center'}}>
                                <div className="px-5">
                                    <div className="text-center border-bottom border-1 py-3 px-4">
                                        <h2 className="text-uppercase font-weight-normal m-0 text-white" style={{letterSpacing: 2}}>不見不散喔</h2>
                                    </div>
                                    <div className="py-1 px-4 d-flex justify-content-center">
                                        <div className="text-left">
                                            <h4 className="text-uppercase font-weight-normal m-0 text-white" style={{letterSpacing: 2}}>時間：2025.02.22 17:00</h4>
                                            <h4 className="text-uppercase font-weight-normal m-0 text-white" style={{letterSpacing: 2}}>地點：老新臺菜十全店</h4>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions className='w-100 d-flex justify-content-center' style={{position: 'absolute', bottom: 0}}>
                                <Link href="/"><Button size="small" variant="outlined" className='text-white border-light'>返回首頁</Button></Link>
                            </CardActions>
                        </div>
                    </Card>
                </Container>
            </div>
        </>
    );
};


export default SuccessPage;