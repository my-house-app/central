/* eslint-disable no-multi-spaces */
/* eslint-disable key-spacing */
const { Op, Sequelize } = require('sequelize');
// FUNCIONES AUXILIARES DE SEQUELIZE

/**
 * Busca la coincidencias dentro de un rango ve valores
 * @param {* min es de tipo integer y es el minimo valor de busqueda} min
 * @param {* max es de tipo integer y es el maximo valor de busqueda} max
 * @returns Un objeto de busqueda: [Op.gte]: (>=) o [Op.lte]: (<=)
 */
function buildMinMax(min, max) {
  // eslint-disable-next-line no-shadow
  const query = [];
  // { [Op.and]: [{},{},{}] }
  if (min) query.push({ [Sequelize.Op.gte]: min });
  if (max) query.push({ [Sequelize.Op.lte]: max });
  return { [Sequelize.Op.and]: query };
}

/**
   * Busca una las coincidencias (case insensitive) de una palabra (word) en un string
   * @param {* word es de tipo string} word
   * @returns Un objeto de busqueda: [Op.iLike]:
   */
function buildIlike(word) {
  return { [Op.iLike]: `%${word}%` };
}

/**
   * Busca el valor exacto
   * @param {* number es de tipo integer } number
   * @returns Un objeto de busqueda: [Op.eq]:
   */
function buildEqual(number) {
  return { [Op.eq]: number };
}

/**
   * Construye una sentencia where en conjunto con varios and
   * @param {* block es un objeto con los atributos que se van a usar para los filtro } block
   * @returns Las condiciones de busqueda: where atributo1 and atributo2 and ...
   */
function buidlWhere(block) {
  // eslint-disable-next-line no-shadow
  const query = [];
  if (block.post_name)    query.push({ post_name: buildIlike(block.post_name) });
  if (block.city)         query.push({ city:         buildIlike(block.city) });
  if (block.neighborhood) query.push({ neighborhood: buildIlike(block.neighborhood) });
  query.push({ price: buildMinMax(block.priceMin, block.priceMax) });
  query.push({ m2: buildMinMax(block.areaMin, block.areaMax) });
  if (block.stratum)      query.push({ stratum:      buildEqual(block.stratum) });
  if (block.rooms)        query.push({ rooms:        buildEqual(block.rooms) });
  if (block.bathrooms)    query.push({ bathrooms:    buildEqual(block.bathrooms) });
  if (block.years)        query.push({ years:        buildEqual(block.years) });
  if (block.prop_type)    query.push({ prop_type:    buildIlike(block.prop_type) });
  if (block.pool)         query.push({ pool:         buildEqual(block.pool) });
  if (block.backyard)     query.push({ backyard:     buildEqual(block.backyard) });
  if (block.gym)          query.push({ gym:          buildEqual(block.gym) });
  if (block.bbq)          query.push({ bbq:          buildEqual(block.bbq) });
  if (block.parking_lot)  query.push({ parking_lot:  buildEqual(block.parking_lot) });
  if (block.elevator)     query.push({ elevator:     buildEqual(block.elevator) });
  if (block.security)     query.push({ security:     buildEqual(block.security) });
  if (block.garden)       query.push({ garden:       buildEqual(block.garden) });
  return { [Sequelize.Op.and]: query };
}

// FUNCIONES AUXILIARES PARA EL PAGINADO
/**
 * Obtiene el numero de la pagina actual con respecto al offset y al limit
 * @param {* offset es de tipo integer y es desde donde empiezo a traer los datos} offset
 * @param {* limit es de tipo integer y es la cantidad de registros que devuelvo} limit
 * @returns Un integer
 */
function getCurrentPage(offset, limit) {
  return (offset + limit) / limit;
}

module.exports = {
  buidlWhere,
  buildEqual,
  buildIlike,
  buildMinMax,
  getCurrentPage,
};
