import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(req.rawHeaders);
    res.send('Hello Express!');
  })

  app.get('/contact', (req, res) => {
    // console.log(req.);
    res.send('<h1>🖕 GO *UCK YOUSELF 🖕</h1>');
  })

  app.get('/about', (req, res) => {
    // console.log(req.);
    res.send(`<h1>About me‼</h1>
<h3>My name is Supitcha Supitmaros</h3>
<p>🤣😢😭🍆💦🤔</p>`);
  })


app.listen(port,() =>{
    console.log(`Server running on port ${port}.`);
})
