const express = require('express');
const app = express();
const cors = require('cors');
const Repository = require('./Repository.js');

app.use(cors());
app.use(express.json());

// Afficher tous les tickets
app.get('/ticket', async (req : any, res : any) => {
    const data = await Repository.showTickets();
    res.json(data);
});

// Ajouter un ticket
app.post('/ticket', async (req : any, res : any) => {
    const { titre, description, statut } = req.body;
    await Repository.createTicket(titre, description);
    res.send(`Ticket ${titre} créé avec succés`);
});

// Modifier un ticket
app.put('/ticket/:id', async (req : any, res :any) => {
    const titre  = req.body.libelle;
    const description = req.body.description;
    const id = parseInt(req.params.id);
    await Repository.modifyTicket(id, titre,description);
    res.send(`Modification du ticket ${id} effectuée avec succès`);
});

// Supprimer un ticket
app.delete('/ticket/:id', async (req : any, res : any) => {
    const id = parseInt(req.params.id);
    await Repository.deleteTicket(id);
    res.send(`Ticket numéro ${id} supprimé avec succès`);
});

app.get('/ticket/:id', async (req : any, res : any) => {
    const id = parseInt(req.params.id);
    const data = await Repository.showOneTicket(id);
    res.json(data);
});

app.put('/ticket/status/:id', async (req : any, res : any) => {
    const id = parseInt(req.params.id);
    const status = req.body.status;
    const data = await Repository.modifyStatusTicket(id,status);
    res.json(data);
});



app.listen(3000, () => {
    console.log('API started on port 3000');
});