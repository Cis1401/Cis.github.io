// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const http = require('http');

const port = 4000;

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/login') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
            console.log(typeof body);
        });

        req.on('end', () => {
            const data = JSON.parse(body);
            const userName = 'kimbosanz123';
            const passWord = 'root123';

            if (data.username === userName && data.password === passWord) {
                // Here we're just echoing back the received data in the response
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('You have logged in successful');
                res.end();
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('Wrong password or username is being supplied');
                res.end();
            }

        });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});