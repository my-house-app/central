/* eslint-disable no-multi-spaces */
/* eslint-disable no-return-await */
import axios from 'axios';

const LOCALHOST = 'http://localhost:3001';

export async function getFilteredPropiertiesService(block, limit = 10, offset = 0) {
  let endpoint = `${LOCALHOST}/posts?offset=${offset}`;
  if (block.post_name) endpoint += `&post_name=${block.post_name}`;
  if (block.city) endpoint += `&city=${block.city}`;
  if (block.neighborhood) endpoint += `&neighborhood=${block.neighborhood}`;
  if (block.priceMin) endpoint += `&priceMin=${block.priceMin}`;
  if (block.priceMax) endpoint += `&priceMax=${block.priceMax}`;
  if (block.areaMin) endpoint += `&areaMin=${block.areaMin}`;
  if (block.areaMax) endpoint += `&areaMax=${block.areaMax}`;
  if (block.stratum) endpoint += `&stratum=${block.stratum}`;
  if (block.rooms) endpoint += `&rooms=${block.rooms}`;
  if (block.bathrooms) endpoint += `&bathrooms=${block.bathrooms}`;
  if (block.years) endpoint += `&years=${block.years}`;
  if (block.prop_type) endpoint += `&prop_type=${block.prop_type}`;
  if (block.pool) endpoint += `&pool=${block.pool}`;
  if (block.backyard) endpoint += `&backyard=${block.backyard}`;
  if (block.gym) endpoint += `&gym=${block.gym}`;
  if (block.bbq) endpoint += `&bbq=${block.bbq}`;
  if (block.parking_lot) endpoint += `&parking_lot=${block.parking_lot}`;
  if (block.elevator) endpoint += `&elevator=${block.elevator}`;
  if (block.security) endpoint += `&security=${block.security}`;
  if (block.garden) endpoint += `&garden=${block.garden}`;
  if (limit) endpoint += `&limit=${limit}`;
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
