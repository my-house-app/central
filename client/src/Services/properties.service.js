/* eslint-disable no-multi-spaces */
/* eslint-disable no-return-await */
import axios from 'axios';

const LOCALHOST = 'http://localhost:3001';

export async function getFilteredPropiertiesService(block, limit = 10, offset = 0) {
  let endpoint = `${LOCALHOST}/posts?offset=${offset}`;

  if (block.city)         endpoint += `&city=${block.city}`;
  if (block.neighborhood) endpoint += `&neighborhood=${block.neighborhood}`;
  if (block.priceMin)     endpoint += `&priceMin=${block.priceMin}`;
  if (block.priceMax)     endpoint += `&priceMax=${block.priceMax}`;
  if (block.areaMin)      endpoint += `&areaMin=${block.areaMin}`;
  if (block.areaMax)      endpoint += `&areaMax=${block.areaMax}`;
  if (block.stratum)      endpoint += `&stratum=${block.stratum}`;
  if (block.rooms)        endpoint += `&rooms=${block.rooms}`;
  if (block.bathrooms)    endpoint += `&bathrooms=${block.bathrooms}`;
  if (block.years)        endpoint += `&years=${block.years}`;
  if (block.prop_type)    endpoint += `&prop_type=${block.prop_type}`;
  if (limit)              endpoint += `&limit=${limit}`;
  return await axios.get(endpoint);
}

export async function getAllPostsService(limit = 10) {
  let endpoint = `${LOCALHOST}/posts`;
  if (limit) endpoint += `?limit=${limit}`;
  return await axios.get(endpoint);
}

export async function getNextOrPreviousPageService(link) {
  return await axios.get(`${link}`);
}
