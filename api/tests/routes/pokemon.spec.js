/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const { v4: uuid } = require('uuid');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const id = uuid();
const pokemon = {
  nombre: 'Pikachu',
  id,
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () => agent.get('/pokemons').expect(200));
    it('responds with a object with message', () => agent.get('/pokemons').then((res) => {
      expect(!!res.body.api).to.be.equal(true);
    }));
  });

  describe('GET /pokemons?name=nombre', () => {
    it('should get 200', () => agent.get('/pokemons?name=pikachu').expect(200));
    it('responds with a object with message', () => agent.get('/pokemons?name=pikachu').then((res) => {
      expect(res.body.nombre).to.be.equal('pikachu');
    }));
  });

  describe('GET /pokemons/:idPokemon', () => {
    it('should get 200', () => agent.get('/pokemons/25').expect(200));
    it('responds with a object with message', () => agent.get('/pokemons/25').then((res) => {
      expect(res.body.nombre).to.be.equal('pikachu');
    }));
  });

  describe('GET /types', () => {
    it('should get 200', () => agent.get('/types').expect(200));
    it('responds with a object with message', () => agent.get('/types').then((res) => {
      expect(!!res.body).to.be.equal(true);
    }));
  });

  describe('POST /pokemons', () => {
    it('responds with 200', () => agent.post('/pokemons').send({}).expect(200));
    it('responds with a object with message', () => agent.post('/pokemons')
      .send({
        nombre: 'pablo',
        vida: 20,
        fuerza: 1,
        defensa: 1,
        velocidad: 100,
        altura: 12,
        peso: 123,
        tipo: [1, 2],
      })
      .then((res) => {
        expect(res.body.message).to.be.equal('Pokemon pablo creado con exito');
      }));
  });
});
