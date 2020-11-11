const http = require('http');
const app = require('./app');

const port = 5000; //precess.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port);

app.listen(app.get('port'), () => {
    console.log('Server is running in port: ', port);
})

