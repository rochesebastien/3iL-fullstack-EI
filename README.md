#  Epreuve Individuelle fullstack 3iL 
Par Roche Sébastien - Promo B3 2023

# Backend

## Installation
Clonez le projet sur votre poste et suivez les instructions
```bash
git clone https://github.com/rochesebastien/3iL-fullstack-EI.git

#Placez vous ensuite dans le dossier backend
cd Backend

#Installez les dépendances
npm install / npm i
``` 
## Prérequis 
Pour cette évaluation, j'ai utilisé une base de donnée postgresql. Pour utiliser l'API, il faudra aussi mettre en place une bdd et modifier  le fichier .env (`./Backend/.env`) en rajoutant la ligne qui correspondra à votre configuration (exemple ci dessous) : 
```.env
DATABASE_URL="postgresql://postgres:admin@localhost:5432/EI_backend"
```


http://localhost:3000

## Démarrage

Effectuez la commande suivante pour lancer l'API :
```bash
npm run start && npm run build
```
Vous pouvez aussi lancez l'api en mode dev pour qu'elle se relance toute seul avec une modification (avec nodemon)
```bash
npm run dev
```
L'API est sur l'adresse suivante : http://localhost:5178/
# Frontend
## Installation
Même principe que  précédemment
```bash
git clone https://github.com/rochesebastien/3iL-fullstack-EI.git

#Placez vous ensuite dans le dossier backend
cd Frontend

#Installez les dépendances
npm install / npm i
``` 

## Démarrage
Pour lancez le site web effectuez la commande suivante, et rendez vous sur http://localhost:5178/
```bash
npm run dev
```