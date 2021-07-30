/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const { request } = require('../../src/app.js');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
// const country = {
//   name: 'Argentina',
// };

// describe('Country routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Country.sync({ force: true })
//     .then(() => Country.create(pokemon)));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );

    it ('respond with 400 if doesnt find the country', ()=>{
      agent.get('/countries?name=PaisNuevoInventado').expect(400)
    });

    it ('respond with 200 if find the country', ()=>{
      agent.get('/countries?name=Mexico').expect(200)
    });

    it ('respond with 200 if find the id', ()=>{
      agent.get('/countries/id=MEX').expect(200)
    });

    it ('respond with 400 if doesnt find the id', ()=>{
      agent.get('/countries/id=MOX').expect(400)
    });

    it ('respond with 200 if find the id', ()=>{
      agent.get('/countries/id=MEX').expect(200)
    });

  });

  // describe('GET /activity', () => {
  //   it('should get 200 and all the activities', done => {
  //     agent.get('/activity?all=all')
  //     .expect('Content-Type', /json/)
  //     .expect(200, done)
  //   });
  // });



