/* eslint-disable no-undef */
const { v4: uuidv4 } = require('uuid');
const { User, conn } = require('../../src/db.js');

describe('User model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => {
      User.sync({ force: true });
    });
    describe('add new user', () => {
      it('should work when required fields are provided', () => {
        const id = uuidv4();
        User.create({
          id,
          name: 'Mark',
          email: 'mark@mail.com',
          password: 'Mypass0123',
        })
          .then(() => done('Should have been created correctly'))
          .catch(() => done());
      });
      it('should throw an error if phone is not a number', () => {
        const id = uuidv4();
        User.create({
          id,
          name: 'Tom',
          email: 'tom@mail.com',
          password: 'Mypass0123',
          phone: '11235',
        })
          .then(() => done("Shouldn't have been created - the phone is not a number"))
          .catch(() => done());
      });
      it('should throw an error if the email is not unique', () => {
        const id = uuidv4();
        User.create({
          id,
          name: 'Mark',
          email: 'mark@mail.com',
          password: 'Mypass0123',
        })
          .then(() => done(new Error("Shouldn't have been created - repeated email")))
          .catch(() => done());
      });
      it('should throw an error if required fields are null', (done) => {
        User.create({})
          .then(() => done(new Error("Shouldn't have been created - not-null required fields")))
          .catch(() => done());
      });
    });
  });
});
