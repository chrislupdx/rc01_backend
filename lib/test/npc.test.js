const request = require('supertest');
const app = require('../app');

require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../utils/connect');

const createNPC = fields => {
  return request(app)
    .post('/api/v1/NPCs')
    .send(fields)
    .then(res => res.body);

};

describe('NPC routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a NPC via post', () => {
    return request(app)
      .post('/api/v1/NPCs')
      .send({ name: 'george' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'george',
          __v: 0
        });
      });
  });
});
