const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// ตั้งค่าที่เก็บเทมเพลตและ engine
app.set('views', path.join(__dirname, 'views copy'));

app.get("/", (req, res) => {
    res.render("index.ejs", { Day: 6 }); // index.ejs
});

app.listen(port, () => {
   console.log(`Listening on http://localhost:${port}`);
});
