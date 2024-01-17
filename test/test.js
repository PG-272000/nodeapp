const request = require('supertest');
const app = require('../app'); // Update the path to your app file

describe('GET /', () => {
  it('respond with hello world', (done) => {
    request(app)
      .get('/')
      .expect('hello world')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

