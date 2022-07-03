const { Router } = require('express')

const routes = new Router();

const bodyParser = require("body-parser");

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.get('/', (req, res) => {
    // res.send({ message: 'Connect with success!' })
    res.send('<form action="/" method="post"> <label for="name">Nome</label> <input type="text" name="name" id="name" placeholder="Digite seu nome aqui..." required> <label for="email">E-mail</label> <input type="text" id="email" name="email" placeholder="Digite seu email aqui..." required> <button type="submit">Enviar</button>')
})

routes.post('/', (req, res) => {
    res.send("Nome: " + req.body.name + " E-mail: " + req.body.email);
})

module.exports = routes
