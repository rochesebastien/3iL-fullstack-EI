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
const express = require('express');
const app = express();
const cors = require('cors');
const Repository = require('./Repository.js');
app.use(cors());
app.use(express.json());
// Afficher tous les tickets
app.get('/ticket', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Repository.showTickets();
    res.json(data);
}));
// Ajouter un ticket
app.post('/ticket', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titre, description, statut } = req.body;
    yield Repository.createTicket(titre, description);
    res.send(`Ticket ${titre} créé avec succés`);
}));
// Modifier un ticket
app.put('/ticket/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const titre = req.body.libelle;
    const description = req.body.description;
    const id = parseInt(req.params.id);
    yield Repository.modifyTicket(id, titre, description);
    res.send(`Modification du ticket ${id} effectuée avec succès`);
}));
// Supprimer un ticket
app.delete('/ticket/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    yield Repository.deleteTicket(id);
    res.send(`Ticket numéro ${id} supprimé avec succès`);
}));
app.get('/ticket/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const data = yield Repository.showOneTicket(id);
    res.json(data);
}));
app.put('/ticket/status/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const status = req.body.status;
    const data = yield Repository.modifyStatusTicket(id, status);
    res.json(data);
}));
app.listen(3000, () => {
    console.log('API started on port 3000');
});
