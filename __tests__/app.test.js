const http = require('http');
const handler = require('../index');
const supertest = require('supertest');

let server;

beforeAll((done) => {
  server = http.createServer(handler).listen(4000, done);
});

afterAll((done) => {
  server.close(done);
});

test('GET / returns Hello, World!', async () => {
  const response = await supertest(server).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello, World!\n');
});
