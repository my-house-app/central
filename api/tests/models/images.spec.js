/* eslint-disable no-undef */
const { v4: uuidv4 } = require('uuid');
const { Image, conn } = require('../../src/db.js');

describe('Image model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => {
      Image.sync({ force: true });
    });
    describe('add new Image', () => {
      it('should work when required fields are provided', () => {
        const id = uuidv4();
        Image.create({
          id,
          photo: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        })
          .then(() => done('Should have been created correctly'))
          .catch(() => done());
      });
      it('should throw an error if url is not valid', () => {
        const id = uuidv4();
        Image.create({
          id,
          photo: 'not a valid url',
        })
          .then(() => done("Shouldn't have been created - not a valid url"))
          .catch(() => done());
      });
      it('should throw an error if required fields are null', (done) => {
        Image.create({})
          .then(() => done(new Error("Shouldn't have been created - not-null required fields")))
          .catch(() => done());
      });
    });
  });
});
