const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app!")
});

app.get('/ola/:cargo/:nome/:tempo', function(req, res) {
    res.send("<h1> Olá "+req.params.nome+"</h1>" +
        "<h2> Seu cargo cargo é: "+req.params.cargo+"</h2>" +
        "<h3>Você programa a: "+req.params.tempo + " meses</h3>")
});

app.listen(3000, function() {
    console.log("Servidor rodando!")
});