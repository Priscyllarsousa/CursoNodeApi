const express = require('express'); //Para utilizar os controllers e afins
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use(bodyParser.json());//converte todo conteúdo para json
app.use(bodyParser.urlencoded({
    extended: false
}));//codifica as urls

app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;