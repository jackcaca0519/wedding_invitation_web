import { authOptions } from '@/utils/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import {PrismaClient} from '@prisma/client';

import TableComponent from '../component/TableComponent';

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

    return <TableComponent gests={gests} />;
};


export default ExportPage;