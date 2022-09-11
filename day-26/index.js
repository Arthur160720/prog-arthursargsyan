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


import fs from "fs";
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

// fs.writeFile(dir, '{"nameSurname": "Arthur Sargsyan"}', err => {
//     if (err) {
//         console.error(err);
//     }
// });

// fs.readFile(dir, (req, res) => {
//     console.log(res.toString());
// });

function makeId() {
    return Date.now();
}

app.post('/nameSurname', (req, res) => {
    // const {nameSurname} = '/index.json';
    // console.log(nameSurname);
    // res.json({nameSurname, id: makeId()});
       res.json(fs.writeFile(dir, '{"nameSurname": "Arthur Sargsyan"}', err => {
        if (err) {
            console.error(err);
        }
    }));

    //res.json({nameSurname, id:makeId()});
});

app.get('/nameSurname', (req, res) => {
    // res.send(`my name is Arthur and surname is Sargsyan`);
    res.send(fs.readFile(dir, (req, res) => {
        console.log(res.toString());
    }));
});