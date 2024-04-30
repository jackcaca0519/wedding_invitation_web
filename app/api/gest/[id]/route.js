import { redirect } from 'next/navigation'
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic' // defaults to auto

export async function DELETE(request, { params }) {
    const id = params.id

    try {
        const res = await prisma.gest.delete({
            where: { id: parseInt(id) },
        })
    } catch (error) {
        return new Response(`error: ${error.message}`, {
            status: 400,
        })
    }

    return new Response('success', {
        status: 200,
    })
}
