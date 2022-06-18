const cors =  require ("cors");
const express=  require('express');
const app = express ();
const axios = require('axios');

app.use(cors());

app.get("/advice", async (req, res) => {

    //response é a resposta do axios mas eu retiro o data de dentro do response com as chaves
    const {data} = await axios ('https://api.adviceslip.com/advice')

    return res.json(data)
});

