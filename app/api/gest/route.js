import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request) {
    const formData = await request.json()
    const name = formData.name;
    const phone = formData.phone;
    const email = formData.email;
    const address = formData.address;
    const people = formData.people;
    
    if( name && phone && email && address && people ){
        try {
            const saveContact = await prisma.gest.create({
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    address: address,
                    people: parseInt(people),
                },
            });
        } catch (error) {
            return new Response(`error: ${error.message}`, {
                status: 400,
            })
        }
    }
    return new Response('success', {
        status: 200,
    })
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
