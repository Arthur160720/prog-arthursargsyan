// import fs from "fs";
// import path from "path";
//
// console.log(path.resolve());
//
// const dir = path.join(path.resolve(), "/playground.txt");
//
// fs.writeFile(dir, 'text', err => {
//     if (err) {
//         console.error(err);
//     }
// });

// import path from "path";
// import {writeFile, readFile} from 'node:fs/promises';
//
// const dir = path.join(path.resolve(), '/playground.txt');
//
// try {
//     await writeFile(dir, 'text js');
// } catch (err) {
//     console.log(err);
// }
//
// try {
//     const data = await readFile(dir);
//     console.log(data);
//     console.log(data.toString());
// } catch (err) {
//     console.log(err);
// }
