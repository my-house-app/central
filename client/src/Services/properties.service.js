/* eslint-disable no-multi-spaces */
/* eslint-disable no-return-await */
import axios from 'axios';

const { REACT_APP_API_BASE_ENDPOINT } = process.env;
const LOCALHOST = 'http://localhost:3001';

export async function getFilteredPropiertiesService() {
  let endpoint = `${LOCALHOST}/posts`;
  endpoint += window.location.search;
  return await axios.get(endpoint);
}

export async function getAllPostsService(limit = 10) {
  let endpoint = `${LOCALHOST}/posts`;
  if (limit) endpoint += `?limit=${limit}`;
  return await axios.get(endpoint);
}

export async function getPropertyDetails(id) {
  const response = await fetch(`${REACT_APP_API_BASE_ENDPOINT}/post/${id}`);
  const propertyFetched = await response.json();
  return propertyFetched;
}
