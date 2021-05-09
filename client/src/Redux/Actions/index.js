/* eslint-disable no-console */
/* eslint-disable func-names */
import { getFilteredPropiertiesService, getAllPostsService } from '../../Services/properties.service';
// variables que se exportan para el reducer
export const PROPERTIES = 'properties';
export const GET_FILTERED_PROPERTIES = 'GET_FILTERED_PROPERTIES';
export const GET_SEARCHED_POST = 'GET_SEARCHED_POST';

// Actions
export const getAllPost = () => async function (dispatch) {
  return getAllPostsService()
    .then((res) => {
      dispatch(
        {
          type: PROPERTIES,
          payload: res.data,
        },
      );
    })
    .catch((e) => console.log('Error getAllPost: ', e));
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

export function searchedPost(payload) {
  return function (dispatch) {
    dispatch(
      {
        type: GET_SEARCHED_POST,
        payload,
      },
    );
  };
}
