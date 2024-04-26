import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request) {
    const formData = await request.formData()
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

    return new Response('Success!', {
        status: 200,
    })
}

