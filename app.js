const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.end("Hello from EC2 Jenkins pipeline! lets move on aaaaaaaa");
});

server.listen(port, () => console.log(`Server running on port ${port}`));

