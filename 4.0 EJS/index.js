import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// import ejs from "ejs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
// var rnd = 0;
const daySname = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
// const today = new Date();

const today = new Date("June 24, 2023 11:13:00");

const day = today.getDay();


app.get("/", (req, res) => {
     res.render("index.ejs",
        {Day:day,nameDay:daySname[day]}
     );

  });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log('Date is : '+today);
   console.log('day is: '+day);
  });