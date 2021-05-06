/* eslint-disable no-undef */
const { v4: uuidv4 } = require('uuid');
const { VisitDate, conn } = require('../../src/db.js');

describe('VisitDate model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => {
      VisitDate.sync({ force: true });
    });
    describe('add new VisitDate', () => {
      it('should work when required fields are provided', () => {
        const id = uuidv4();
        VisitDate.create({
          id,
          date: '2003-01-01 19:10:25-07',
        })
          .then(() => done('Should have been created correctly'))
          .catch(() => done());
      });
      it('should throw an error if date field is not valid', () => {
        const id = uuidv4();
        VisitDate.create({
          id,
          date: 'not a valid date',
        })
          .then(() => done("Shouldn't have been created - not a valid date"))
          .catch(() => done());
      });
      it('should throw an error if required fields are null', (done) => {
        VisitDate.create({})
          .then(() => done(new Error("Shouldn't have been created - not-null required fields")))
          .catch(() => done());
      });
    });
  });
});
