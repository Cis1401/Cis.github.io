// const http = require('http');
// const host = '127.0.0.1';
// const port = 8080;

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-type', 'text/plain');
//     response.end('Hello world!');
// });

// server.listen(port, host, () => {
//     console.log(`Server running at http://${host}:${port}/`);
// })

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)



// const http = require('http');
// const hostName = 'localhost';
// const portNumber = 8080;

// const server = http.createServer((req, res) => {
//   //front end request format

//   /*
//     payload

//     Request Method: POST
//     Request URL: http://localhost:8080/profile > this is the endpoint accessed by the front end
//   */
//   if (req.method === 'POST' && req.url === '/profile') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); // Assignment: Research for http status codes and content types
//     res.end('Data to be sent to the database using the profile route');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Request Cannot Be Completed');
//   }
// });

// //Error 404 means you have a defect on your declaration of routes/endpoints ** kindly check the spellings and declaration way **


// server.listen(portNumber, () => {
//   console.log(`Server running at http://${hostName}:${portNumber}/`);
// });

const http = require('http');

const port = 3000;

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