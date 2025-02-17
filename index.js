const express = require('express');
const port = process.env.PORT || 3001;  // Corrigido para 'process.env.PORT'
const app = express();

app.get('/',(req, res) => {
    console.log('New feature')
})

app.listen(port, () => {  // Corrigido para uma função de callback corretamente
    console.log(`Start listening on port ${port}`);  // Corrigido o uso das aspas e a interpolação de string
});