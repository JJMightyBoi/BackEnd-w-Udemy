import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res,next) => {
  console.log(req.body);
  console.log(req.body.street);
  console.log(req.body.pet);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//node express have method `urlencoded` no need to import bodyParser
