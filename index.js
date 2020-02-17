const http = require('http');
const petshop = require ('./petshop');
http.createServer(function(req, res){
    if(req.url == "/listaspets"){
        let resultado = petshop.listarPets();
        return res.end(resultado);
    }
    res.writeHead(200, {"content-type":"text/plain;charset=utf-8"});
    res.end("Bem vindo ao sistema pet-shop, você está na homepage");
}).listen(3030, 'localhost');