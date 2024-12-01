'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function TableComponent({ gests }) {
    async function handleClick(id) {
        var yes = confirm('確定刪除？');

        if (yes) {
            try{
                const res = await fetch(`/api/gest/${id}/`, { method: 'DELETE' })
                alert('刪除成功！');
            }catch(err){
                console.log(err)
            }
        }
    }

    return (
        <>
            <Container maxWidth="sm" style={{padding: '5px', textAlign: 'center' }}>
                <h3>總人數：{ gests.reduce((sum, item) => sum + item.people, 0) }</h3>
            </Container>
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
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {gests.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell align="right">{row.people}</TableCell>
                                <TableCell>
                                    <Button 
                                        onClick={ () => handleClick(row.id) }
                                        variant="outlined"
                                    >刪除</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}