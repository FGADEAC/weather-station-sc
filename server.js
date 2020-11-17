const http = require('http');
const app = require('./app');

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port);

app.listen(app.get('port'), () => {
    console.log('Server is running in port: ', port);
})

