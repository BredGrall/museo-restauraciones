const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./Routes');
app.use('/api', routes)

app.listen(
    PORT,
    () => console.log('Ya esta conectado')
)

app.use('/Routes', routes);