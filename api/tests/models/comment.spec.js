/* eslint-disable no-undef */
const { v4: uuidv4 } = require('uuid');
const { Comment, conn } = require('../../src/db.js');

describe('Comment model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => {
      Comment.sync({ force: true });
    });
    describe('add new Comment', () => {
      it('should work when required fields are provided', () => {
        const id = uuidv4();
        Comment.create({
          id,
          starts: 4,
          description: 'The owner was very nice and arrived on time',
        })
          .then(() => done('Should have been created correctly'))
          .catch(() => done());
      });
      it('should throw an error if stars are not numeric', () => {
        const id = uuidv4();
        Comment.create({
          id,
          starts: 'not a valid star',
          description: 'The owner was very nice and arrived on time',
        })
          .then(() => done("Shouldn't have been created - not a star is not a number"))
          .catch(() => done());
      });
      it('should throw an error if required fields are null', (done) => {
        Comment.create({})
          .then(() => done(new Error("Shouldn't have been created - not-null required fields")))
          .catch(() => done());
      });
    });
  });
});
