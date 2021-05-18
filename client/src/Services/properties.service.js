/* eslint-disable no-use-before-define */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-return-await */
import axios from 'axios';

const { REACT_APP_API_BASE_ENDPOINT } = process.env;
// const REACT_APP_API_BASE_ENDPOINT = 'http://localhost:3001';

// una funcion trae publicaciones disponible
// otra funcion trae todas
export async function getFilteredPropiertiesService(id = '', limit = 10) {
  let endpoint = `${REACT_APP_API_BASE_ENDPOINT}/posts`;
  // if (limit) endpoint += `?limit=${limit}`;
  // const querystring = window.location.search;
  // const params = new URLSearchParams(querystring);
  // console.log('params.toString(): ', params.toString());
  // endpoint += `&${params.toString()}`; // window.location.search;
  endpoint += getQuerysStrings(limit, id);
  // console.log('endpoint: ', endpoint);
  return await axios.get(endpoint);
}

// homework
// TODAS LAS PUBLICACIONES
export async function getPostsService(limit = 10) {
  let endpoint = `${REACT_APP_API_BASE_ENDPOINT}/posts`;
  if (limit) endpoint += `?limit=${limit}`;
  return await axios.get(endpoint);
}

// TODAS LA INFO DEL ADMIN
// export async function getAdminDataService(id, limit = 10) {
//   let endpoint = `${REACT_APP_API_BASE_ENDPOINT}/admin`;
//   if (limit) endpoint += `?limit=${limit}&id=${id}`;
//   return await axios.get(endpoint);
// }
// user no registrado id = undefined
// user registrado comun id = "977fb1a4-5c67-4180-863c-8b8465b2c06b"
// user registrado SuperAdmin id = "062cad5e-8820-4bf3-bd8f-a5f13fade2e3"
// todas las publicaciones para el admin
export async function getAdminDataService(id = '', limit = 10) {
  let endpoint = `${REACT_APP_API_BASE_ENDPOINT}/posts`;
  endpoint += getQuerysStrings(limit, id);
  return await axios.get(endpoint);
}
// el id por el momento no es necesario
// todos los usuarios para el admin
export async function getAdminUsersDataService(id = '', limit = 10) {
  let endpoint = `${REACT_APP_API_BASE_ENDPOINT}/users`;
  // if (limit) endpoint += `?limit=${limit}&id=${id}`;
  endpoint += getQuerysStrings(limit, id);
  return await axios.get(endpoint);
}
// el id por el momento no es necesario
// todos las reservas para el admin
export async function getAdminBookingsDataService(id = '', limit = 10) {
  let endpoint = `${REACT_APP_API_BASE_ENDPOINT}/users/bookings`;
  // if (limit) endpoint += `?limit=${limit}&id=${id}`;
  endpoint += getQuerysStrings(limit, id);
  return await axios.get(endpoint);
}

// TODA LA INFO DEL USUARIO
export async function getUserDataService(userId, limit = 10) {
  let endpoint = `${REACT_APP_API_BASE_ENDPOINT}/user/${userId}`;
  if (limit) endpoint += `?limit=${limit}`;
  return await axios.get(endpoint);
}

// DETALLES DE UN POST
export async function getPostService(id) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/post/${id}`;
  return await axios.get(endpoint);
}

// AGREGAR UN POST
export async function addPostService(post) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/post`;
  return await axios.post(endpoint, post);
}

// EDITAR UN POST
export async function editPostService(postId, post) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/post/${postId}`;
  return await axios.put(endpoint, post);
}

// ELIMINAR UN POST
export async function deletePostService(postId) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/post/${postId}`;
  return await axios.delete(endpoint);
}

// AGREGAR UN USUARIO
export async function addUserService(user) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/user`;
  return await axios.post(endpoint, user);
}

// EDITAR UN USUARIO
export async function editUserService(userId, user) {
  console.log('user service', user)
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/user/${userId}`;
  return await axios({
    method:'put',
    url: endpoint,
    data: user
  });
}

// ELIMINAR UN USUARIO
export async function deleteUserService(userId) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/user/${userId}`;
  return await axios.delete(endpoint);
}

// DETALLES DE UNA RESERVA
export async function getBookingService(bookingId) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking/${bookingId}`;
  return await axios.get(endpoint);
}

// AGREGAR UNA RESERVA
export async function addBookingService(bookingId, booking) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking/${bookingId}`;
  return await axios.post(endpoint, booking);
}

// EDITAR UNA RESERVA
export async function editBookingService(bookingId, booking) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking/${bookingId}`;
  return await axios.put(endpoint, booking);
}

// ELIMINAR UNA RESERVA
export async function deleteBookingService(bookingId) {
  const endpoint = `${REACT_APP_API_BASE_ENDPOINT}/booking/${bookingId}`;
  return await axios.delete(endpoint);
}

// FUNCION AUXILIAR
// &id=bc6b5eff-d880-4048-8c37-24e446a1962b&page=6
function getQuerysStrings(limit, id) {
  let endpoint = '';
  if (limit) endpoint += `?limit=${limit}`;
  if (id) endpoint += `&id=${id}`;
  const querystring = window.location.search;
  const params = new URLSearchParams(querystring);
  endpoint += `&${params.toString()}`;
  return endpoint;
  // return `&${params.toString()}`; // window.location.search;
}
