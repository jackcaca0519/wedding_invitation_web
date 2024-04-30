import { redirect } from 'next/navigation'
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request) {
    const formData = await request.formData()
    const name = formData.get('name');
    const email = formData.get('email');
    const address = formData.get('address');
    const people = formData.get('people');
    
    if(name && email && address && people){
        try {
            const saveContact = await prisma.gest.create({
                data: {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    address: formData.get('address'),
                    people: parseInt(formData.get('people')),
                },
            });
        } catch (error) {
            return new Response(`error: ${error.message}`, {
                status: 400,
            })
        }
    }

    redirect('/')
}

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get('name')

    let gestData = null;
    try {
        gestData = await prisma.gest.findFirst({
            where: { name: name },
        });

    } catch (error) {
        return new Response(`error: ${error.message}`, {
            status: 400,
        })
    }

    return Response.json({name: gestData && gestData.name, id: gestData && gestData.id})
}
