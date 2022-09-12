// const express = require('express');
// const app = express();
// const port = 3000;
//
// app.get('/', (req, res) => {
//     res.send('Hello World JS! :) ');
// });
//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

// import express from 'express';
// const app = express();
// const port = 3000;
//
// app.use(express.json());
//
// app.get('/', (req, res) => {
//     res.send("Hello World js!");
// });
//
// app.get('/name', (req, res) => {
//     res.send(`my name is arthur`);
// });
//
// function makeId() {
//     return Date.now();
// }
//
// app.post('/name', (req, res) => {
//     const {name} = req.body;
//     console.log(req.body);
//     res.json({name, id: makeId()});
// });
//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });


import fs from "node:fs/promises";
import path from "path";
import express from "express";


const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.json());

console.log(path.resolve());

const dir = path.join(path.resolve(), "/index.json");

function makeId() {
    return Date.now();
}


app.post('/nameSurname', async (req, res) => {
    let {name, surname, age} = req.body;
    let id = makeId();
    let credentials = {id, name, surname, age};

    let data = JSON.stringify(credentials);
    try {
        await fs.writeFile(dir, data);
        res.json(credentials);
    } catch (err) {
        res.json(err);
    }
});

app.get('/nameSurname', async (req, res) => {
    try {
        let data = await fs.readFile(dir);
        res.json(data.toString());
    } catch (err) {
        res.json(err);
    }
});