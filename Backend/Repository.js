"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function showTickets() {
    return __awaiter(this, void 0, void 0, function* () {
        const alltickets = yield prisma.ticket.findMany({});
        return alltickets;
    });
}
function showOneTicket(idticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticket = yield prisma.ticket.findUnique({
            where: {
                id: idticket,
            },
        });
        return ticket;
    });
}
function deleteTicket(idticket) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteTicket = yield prisma.ticket.delete({
            where: {
                id: idticket,
            },
        });
    });
}
function createTicket(titre, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticket = yield prisma.ticket.create({
            data: {
                titre: titre,
                description: description,
            },
        });
    });
}
function modifyTicket(idticket, newTitre, newDescription) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteUser = yield prisma.ticket.update({
            where: {
                id: idticket,
            },
            data: {
                titre: newTitre,
                description: newDescription,
            },
        });
    });
}
function modifyStatusTicket(idticket, newStatus) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteUser = yield prisma.ticket.update({
            where: {
                id: idticket,
            },
            data: {
                status: newStatus,
            },
        });
    });
}
module.exports = {
    showTickets,
    showOneTicket,
    deleteTicket,
    createTicket,
    modifyTicket,
    modifyStatusTicket,
};
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
