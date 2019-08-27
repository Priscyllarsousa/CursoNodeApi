'use strict'

//console.log('Testando...');
const app = require('../src/app');//express();
const debug = require('debug')('balta:server');
const http = require('http'); //Para criar o servidor http


const port = normalizePort(process.env.PORT || '3000'); //3000;//normalmente não é viavel setar a porta pois ela pode estar ocupada
app.set('port', port);
const server = http.createServer(app);


server.listen(port);
server.on('error', onError);
console.log('API rodando na porta ' + port);

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

