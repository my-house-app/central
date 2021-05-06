/* eslint-disable no-undef */
const { v4: uuidv4 } = require('uuid');
const { Property, conn } = require('../../src/db.js');

describe('Property model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => {
      Property.sync({ force: true });
    });
    describe('add new Property', () => {
      it('should work when required fields are provided', () => {
        const id = uuidv4();
        Property.create({
          id,
          city: 'Bogota',
          street_number: 'Calle de San Lorenzo 123',
          zip_code: 'CP1234',
          neighborhood: 'Las Flores',
          price: 158000000,
          m2: 48,
          rooms: 3,
          bathrooms: 4,
        })
          .then(() => done('Should have been created correctly'))
          .catch(() => done());
      });
      it('should throw an error if phone is not a number', () => {
        const id = uuidv4();
        Property.create({
          id,
          city: 'Bogota',
          street_number: 'Calle de San Lorenzo 123',
          zip_code: 'CP1234',
          neighborhood: 'Las Flores',
          price: 158000000,
          m2: 48,
          rooms: 3,
          bathrooms: 4,
          pool: 'not a boolean',
        })
          .then(() => done("Shouldn't have been created - pool is not boolean"))
          .catch(() => done());
      });
      it('should throw an error if the type of the propety is not valid', () => {
        const id = uuidv4();
        Property.create({
          id,
          city: 'Bogota',
          street_number: 'Calle de San Lorenzo 123',
          zip_code: 'CP1234',
          neighborhood: 'Las Flores',
          price: 158000000,
          m2: 48,
          rooms: 3,
          bathrooms: 4,
          prop_type: 'not a valid type',
        })
          .then(() => done(new Error("Shouldn't have been created - not a valid type")))
          .catch(() => done());
      });
      it('should throw an error if required fields are null', (done) => {
        Property.create({})
          .then(() => done(new Error("Shouldn't have been created - not-null required fields")))
          .catch(() => done());
      });
    });
  });
});
