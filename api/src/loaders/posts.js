/* eslint-disable max-len */
const { v4: uuidv4 } = require('uuid');
const rawData = require('./rawData');
const users = require('./users');
const addresses = require('./addresses');
const coordinates = require('./coordinates');

const department = ['Cundinamarca', 'Antioquia', 'Bolívar'];
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
  }, index) => ({
    id: uuidv4(),
    userId: userIdList[Math.floor(Math.random() * userIdList.length + 1)],
    post_name: title,
    premium: Math.random() < premiumRate,
    prop_type: mtipoinmueble.nombre,
    // eslint-disable-next-line no-nested-ternary
    department: mciudad.id === '1' ? department[0] : (mciudad.id === '2' ? department[1] : department[2]),
    city: mciudad.nombre,
    street_number: addresses[index],
    latitude: coordinates[index].lat,
    longitude: coordinates[index].lng,
    // zip_code: 'To be determined',
    description: title,
    stratum: mzona && mzona.id,
    neighborhood: mbarrio || '' /* 'To be determined' */,
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
