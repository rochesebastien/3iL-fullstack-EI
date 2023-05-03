const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {

}

async function showTickets(){
    const alltickets = await prisma.ticket.findMany({
    });
    return alltickets;
}

async function showOneTicket(idticket : Number){
    const ticket = await prisma.ticket.findUnique({
      where: {
        id: idticket,
        },
  })
  return ticket
  }


async function deleteTicket(idticket : Number){
    const deleteTicket = await prisma.ticket.delete({
        where: {
          id: idticket,
        },
      })
}

async function createTicket(titre : string, description : string) {
  const ticket = await prisma.ticket.create({
    data: {
      titre: titre,
      description: description,
    },
  });
}

async function modifyTicket(idticket : Number, newTitre : string, newDescription : string){
  const deleteUser = await prisma.ticket.update({
      where: {
          id: idticket,
      },
      data: {
        titre: newTitre,
        description: newDescription,
      },
    })  
}

async function modifyStatusTicket(idticket : Number, newStatus : string){
  const deleteUser = await prisma.ticket.update({
      where: {
          id: idticket,
      },
      data: {
        status: newStatus,
      },
    })  
}

module.exports = {
  showTickets,
  showOneTicket,
  deleteTicket,
  createTicket,
  modifyTicket,
  modifyStatusTicket,
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })