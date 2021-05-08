/* eslint-disable func-names */
import axios from 'axios';
import { getFilteredPropiertiesService, getAllPostsService } from '../../Services/properties.service';
// variables que se exportan para el reducer
export const PROPERTIES = 'properties';
export const GET_FILTERED_PROPERTIES = 'GET_FILTERED_PROPERTIES';

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
