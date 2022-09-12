import fs from "node:fs/promises";
import path from "path";
import express from "express";

const app = express();
const port = 3000;

const dir = path.join(path.resolve(), '/credentials.json');


app.use(express.static('public'));
app.use(express.json());

console.log(path.resolve());

function makeId() {
    return Date.now();
}

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
