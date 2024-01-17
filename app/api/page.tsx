import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { foto, descripcion, fecha, titulo } = req.body;

            const newPage = await prisma.fotografia.create({
                data: {
                    foto: foto,
                    descripcion: descripcion,
                    fecha: fecha,
                    titulo: titulo,
                },
            });

            res.status(201).json(newPage);
        } catch (error) {
            res.status(500).json({ error: 'Error creating page' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
