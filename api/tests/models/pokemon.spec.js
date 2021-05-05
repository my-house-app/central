const { Pokemon,Tipo, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });

    describe('vida', () => {
      it('should throw an error if vida is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid vida')))
          .catch(() => done());
      });
      it('should work when its a valid vida', () => {
        Pokemon.create({ vida: 'Pikachu' });
      });
    });

    describe('fuerza', () => {
      it('should throw an error if fuerza is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid fuerza')))
          .catch(() => done());
      });
      it('should work when its a valid fuerza', () => {
        Pokemon.create({ fuerza: 200 });
      });
    });

    describe('defensa', () => {
      it('should throw an error if defensa is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid defensa')))
          .catch(() => done());
      });
      it('should work when its a valid defensa', () => {
        Pokemon.create({ defensa: 200 });
      });
    });

    describe('velocidad', () => {
      it('should throw an error if velocidad is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid velocidad')))
          .catch(() => done());
      });
      it('should work when its a valid velocidad', () => {
        Pokemon.create({ velocidad: 200 });
      });
    });

    describe('altura', () => {
      it('should throw an error if altura is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid altura')))
          .catch(() => done());
      });
      it('should work when its a valid altura', () => {
        Pokemon.create({ altura: 200 });
      });
    });

    describe('peso', () => {
      it('should throw an error if peso is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid peso')))
          .catch(() => done());
      });
      it('should work when its a valid peso', () => {
        Pokemon.create({ peso: 200 });
      });
    });

    describe('img', () => {
      it('should throw an error if img is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid img')))
          .catch(() => done());
      });
      it('should work when its a valid img', () => {
        Pokemon.create({ img: 'http://prueba.com' });
      });
    });
  });
});

describe('Tipo model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() =>    Tipo.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Tipo.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Tipo.create({ name: 'Pikachu' });
      });
    });
  });
});
