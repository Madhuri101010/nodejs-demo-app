// server.js
const http = require('http');
const handler = require('./index');

const PORT = process.env.PORT || 3000;

http.createServer(handler).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
