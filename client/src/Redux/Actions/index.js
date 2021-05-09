/* eslint-disable func-names */
import axios from 'axios';
import { getFilteredPropiertiesService, getAllPostsService, getNextOrPreviousPageService } from '../../Services/properties.service';
// variables que se exportan para el reducer
export const PROPERTIES = 'properties';
export const GET_FILTERED_PROPERTIES = 'GET_FILTERED_PROPERTIES';
export const GET_SEARCHED_POST = 'GET_SEARCHED_POST';
export const GET_NEXT_OR_PREVIOUS_PAGE = 'GET_NEXT_OR_PREVIOUS_PAGE';

// Actions
export const detailPokemon = () => async function (dispatch) {
  return getAllPostsService()
    .then((res) => {
      dispatch(
        {
          type: PROPERTIES,
          payload: res.data,
        },
      );
    })
    .catch((e) => console.log('Error detailPokemon: ', e));
};

export function getFilteredPropierties(queryBlock) {
  return async function (dispatch) {
    return getFilteredPropiertiesService(queryBlock)
      .then((res) => {
        dispatch(
          {
            type: GET_FILTERED_PROPERTIES,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error getFilteredPropiertiesService: ', e));
  };
}

export function getSearchedPost(payload) {
  return function (dispatch) {
    // eslint-disable-next-line no-console
    console.log('payload: ', payload);
    dispatch(
      {
        type: GET_SEARCHED_POST,
        payload,
      },
    );
  };
}

export function getNextOrPreviousPage(link) {
  return async function (dispatch) {
    return getNextOrPreviousPageService(link)
      .then((res) => {
        dispatch(
          {
            type: GET_NEXT_OR_PREVIOUS_PAGE,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Pagina, error del pedido: ', e));
  };
}
