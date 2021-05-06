const { v4: uuidv4 } = require('uuid');

const firstNames = [
  'José',
  'Pedro',
  'Raúl',
  'María',
  'Luisa',
  'Adriana',
  'Ángela',
  'Alan',
];
const lastNames = [
  'Pérez',
  'Rodríguez',
  'Hernández',
  'Martínez',
  'García',
  'Marín',
  'Sánchez',
  'Smith',
  'Rivera',
  'Alderson',
];
const mergedNames = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i <= 200; i++) {
  mergedNames.push(
    `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`,
  );
}

const cities = ['Bogotá', 'Medellín', 'Cartagena'];
const users = [];

// eslint-disable-next-line no-plusplus
for (let i = 1; i < mergedNames.length; i++) {
  users.push({
    id: uuidv4(),
    name: mergedNames[i],
    email: `${mergedNames[i]
      .replace(/\s+/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()}${i}@gmail.com`,
    password: uuidv4(),
    phone: Math.floor(Math.random() * 1000000000),
    photo: '',
    city: cities[Math.floor(Math.random() * cities.length)],
    street_number: '',
    zip_code: '',
    favorites: '',
  });
}

module.exports = users;
