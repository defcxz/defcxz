import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getFotografias() {
  const data = await prisma.fotografia.findMany({
    select: {
      titulo: true,
      descripcion: true,
      foto: false,
    }
  })
    return JSON.stringify(data)
}
