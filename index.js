require('dotenv').config()
const cool = require ('cool-ascii-faces')
const express = require('express');
const port = process.env.PORT || 3001;  // Corrigido para 'process.env.PORT'
const app = express();

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/cool',(req, res) => {
    res.send(cool())
})

app.listen(port, () => {  // Corrigido para uma função de callback corretamente
    console.log(`Start listening on port ${port}`);  // Corrigido o uso das aspas e a interpolação de string
});