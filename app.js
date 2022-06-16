const express = require ('express');
const app = express();
const path = require('path');  
const { listenerCount } = require('process');

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'));

app.get('/',async(req, res) => {
    res.render('index');

})

console.log('Aplicação iniciada com sucesso');
app.listen(3333);
