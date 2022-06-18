
const cors =  require ("cors");
const express = require ('express');
const app = express();
const path = require('path');  
const { listenerCount } = require('process');

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(cors())

app.get('/',async(req, res) => {
    res.render('index');

})

//get pra pegar o conselho
app.get("/advice", async (req, res) => {

    //response é a resposta do axios mas eu retiro o data de dentro do response com as chaves
    const data = await axios ('https://api.adviceslip.com/advice');

    return res.json(data);
});


console.log('Aplicação iniciada com sucesso');
app.listen(3333);