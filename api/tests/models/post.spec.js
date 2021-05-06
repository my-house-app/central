/* eslint-disable no-undef */
const { v4: uuidv4 } = require('uuid');
const { Post, conn } = require('../../src/db.js');

describe('Post model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => {
      Post.sync({ force: true });
    });
    describe('add new Post', () => {
      it('should work when required fields are provided', () => {
        const id = uuidv4();
        Post.create({
          id,
          name: 'New house with pool',
          premium: false,
        })
          .then(() => done('Should have been created correctly'))
          .catch(() => done());
      });
      it('should throw an error if premium is not boolean', () => {
        const id = uuidv4();
        Post.create({
          id,
          name: 'New house with pool',
          premium: 'not a boolean',
        })
          .then(() => done("Shouldn't have been created - the premium field is not boolean"))
          .catch(() => done());
      });
      it('should throw an error if required fields are null', (done) => {
        Post.create({})
          .then(() => done(new Error("Shouldn't have been created - not-null required fields")))
          .catch(() => done());
      });
    });
  });
});
