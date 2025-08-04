// index.js
const http = require('http');

const handler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
};

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  // Start server only if this file is run directly
  http.createServer(handler).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

module.exports = handler;
