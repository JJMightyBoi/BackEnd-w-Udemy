import express from "express";

const app = express();
const port = 3000;

// commonjs
const logger2 = function (req,res,next) {
  console.log("Request method: ",req.method);
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("FULL URL: ",fullUrl);
  next();
}

// mjs ECMAScript
const logger = (req,res,next) => {
  console.log("Request method: ",req.method);
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log("FULL URL: ",fullUrl);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello in index3.js");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
