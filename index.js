const express = require('express');

const app = express()

app.get('/teste', (req, res) =>{
    return res.json({hello: 'word 2'});
})

app.listen(33333);