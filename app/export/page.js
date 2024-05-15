import { authOptions } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import {PrismaClient} from '@prisma/client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ExportPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/export');
    }

    let gests = [];
    try {
        const prisma = new PrismaClient();
        gests = await prisma.gest.findMany()
    } catch (error) {
        console.log(error)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>序號</TableCell>
                        <TableCell>姓名</TableCell>
                        <TableCell>電話</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>地址</TableCell>
                        <TableCell align="right">人數</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gests.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell align="right">{row.people}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


export default ExportPage;