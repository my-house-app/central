const { v4: uuidv4 } = require('uuid');
const rawData = require('./rawData');
const users = require('./users');
const addresses = require('./addresses');

const userIdList = users.map((u) => u.id);
const premiumRate = 0.2;

const posts = rawData.map(
  ({
    mtipoinmueble,
    mciudad,
    title,
    mzona,
    mbarrio,
    mareac,
    mvalorventa,
    mnrocuartos,
    mnrobanos,
    mnrogarajes,
  }) => ({
    id: uuidv4(),
    userId: userIdList[Math.floor(Math.random() * userIdList.length + 1)],
    post_name: title,
    premium: Math.random() < premiumRate,
    prop_type: mtipoinmueble.nombre,
    city: mciudad.nombre,
    street_number: addresses.shift(),
    zip_code: 'To be determined',
    description: title,
    stratum: mzona && mzona.id,
    neighborhood: mbarrio || 'To be determined',
    price: mvalorventa,
    m2: mareac,
    rooms: mnrocuartos,
    bathrooms: mnrobanos,
    years: Math.floor(Math.random() * 20),
    pool: Math.random() < 0.5,
    backyard: Math.random() < 0.5,
    gym: Math.random() < 0.5,
    bbq: Math.random() < 0.5,
    parking_lot: Boolean(mnrogarajes),
    elevator: Math.random() < 0.5,
    security: Math.random() < 0.5,
  }),
);

module.exports = posts;
