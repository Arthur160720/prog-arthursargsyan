// import fs from "fs";
// import path from "path";
// import express from "express";
//
// let app = express();
// let port = 3000;
//
// app.listen(port, () => {
//     console.log(`listening to port ${port}`);
// });
//
// app.use(express.json());
//
// const dir = path.join(path.resolve(), 'file.json');
//
// app.post('/username/:user', (req, res) => {
//     fs.readFile(dir, (err, data) => {
//         if (err && err.errno === -2) {
//             let user = `{"user":"Arman"}`;
//
//             fs.writeFile(dir, user, (err) => {
//                 if (err) throw err;
//                 console.log(user);
//                 res.send(user);
//             });
//         } else res.send(data);
//     });
// });
//
// app.get('/username', (req, res) => {
//     fs.readFile(dir, (err, data) => {
//         if (err) throw err;
//         res.send(data.toString());
//     });
// });


import fs from "node:fs/promises";
import path from "path";
import express, {json, response} from "express";

let app = express();
let port = 3000;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

app.use(express.json());
app.use(express.static('public'));

const dir = path.join(path.resolve(), 'file.json');

function makeId() {
    return Date.now();
}

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.post('/signup', async (req, res) => {
    const {email, password} = req.body;
    let user = {id: makeId(), email, password};

    try {
        let users = await fs.readFile(dir);
        users = JSON.parse(users);

        let emails = users.filter(user => user.email === email);

        if (emails.length > 0) {
            res.status(409).json({
                error: {
                    message: 'email already exists',
                    code: 123
                }
            });
        } else {
            users.push(user);
            await fs.writeFile(dir, JSON.stringify(users));
            res.json(users);
        }

    } catch (err) {
        if (err.errno === -2) {
            await fs.writeFile(dir, JSON.stringify([user]));
            return res.json(user);
        }
        res.status(500).json({message: err.message});
    }
});

app.get('/users', async (req, res) => {
    try {
        let data = await fs.readFile(dir);
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(404).json({message: err.message});
    }
});
