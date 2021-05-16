/* eslint-disable no-console */
/* eslint-disable func-names */
import {
  getPostsService,
  getFilteredPropiertiesService,
  getAdminDataService,
  getUserDataService,
  addPostService,
  editPostService,
  deletePostService,
  getUserService,
  addUserService,
  editUserService,
  deleteUserService,
  getBookingService,
  addBookingService,
  editBookingService,
  deleteBookingService,
  getAdminUsersDataService,
  getAdminBookingsDataService,
} from '../../Services/properties.service';
// actipon types
import {
  AVAILABLE_PROPERTIES,
  GET_AVAILABLE_FILTERED_PROPERTIES,
  GET_ADMIN_DATA,
  GET_USER_DATA,
  GET_SEARCHED_POST,
  GET_PANEL_FILTERED_PROPERTIES,
  ORDER_BY,
  GET_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  GET_BOOKING,
  ADD_BOOKING,
  EDIT_BOOKING,
  DELETE_BOOKING,
  GET_ADMIN_USERS_DATA,
} from './types';

// Actions

// ALL AVAILABLE POSTS
export const getAvailablePosts = () => async function (dispatch) {
  return getPostsService()
    .then((res) => {
      dispatch(
        {
          type: AVAILABLE_PROPERTIES,
          payload: res.data,
        },
      );
    })
    .catch((e) => console.log('Error getAvailablePosts: ', e));
};

// AVAILABLE FILTERED POSTS
export function getAvailableFilteredPropierties(queryBlock) {
  return async function (dispatch) {
    return getFilteredPropiertiesService(queryBlock)
      .then((res) => {
        dispatch(
          {
            type: GET_AVAILABLE_FILTERED_PROPERTIES,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error getAvailableFilteredPropiertiesService: ', e));
  };
}

// INPUT SEARCHED
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

// ORDER SELECTED
export function orderBy(payload) {
  return function (dispatch) {
    dispatch(
      {
        type: ORDER_BY,
        payload,
      },
    );
  };
}

// ALL ADMIN DATA
export const getAdminData = (id) => async function (dispatch) {
  return getAdminDataService(id)
    .then((res) => {
      dispatch(
        {
          type: GET_ADMIN_DATA,
          payload: res.data,
        },
      );
    })
    .catch((e) => console.log('Error getAdminData: ', e));
};
// ALL ADMIN USERS DATA
export const getAdminUsersData = (id) => async function (dispatch) {
  return getAdminUsersDataService(id)
    .then((res) => {
      dispatch(
        {
          type: GET_ADMIN_USERS_DATA,
          payload: res.data,
        },
      );
    })
    .catch((e) => console.log('Error getAdminData: ', e));
};
// ALL ADMIN BOOKINGS DATA
export const getAdminBookingsData = (id) => async function (dispatch) {
  return getAdminBookingsDataService(id)
    .then((res) => {
      dispatch(
        {
          type: GET_ADMIN_USERS_DATA,
          payload: res.data,
        },
      );
    })
    .catch((e) => console.log('Error getAdminData: ', e));
};

// ALL USER DATA
export const getUserData = (userId) => async function (dispatch) {
  return getUserDataService(userId)
    .then((res) => {
      dispatch(
        {
          type: GET_USER_DATA,
          payload: res.data.user,
        },
      );
    })
    .catch((e) => console.log('Error getAdminData: ', e));
};

// ALL FILTERED POSTS
export function getPanelFilteredProperties(queryBlock) {
  return async function (dispatch) {
    return getFilteredPropiertiesService(queryBlock)
      .then((res) => {
        dispatch(
          {
            type: GET_PANEL_FILTERED_PROPERTIES,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error getPanelFilteredPropiertiesService: ', e));
  };
}

// ADD POST
export function addPost(postId, post) {
  return async function (dispatch) {
    return addPostService(postId, post)
      .then((res) => {
        dispatch(
          {
            type: ADD_POST,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error addPostService: ', e));
  };
}

// EDIT POST
export function editPost(postId, post) {
  return async function (dispatch) {
    return editPostService(postId, post)
      .then((res) => {
        dispatch(
          {
            type: EDIT_POST,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error editPostService: ', e));
  };
}

// DELETE POST
export function deletePost(postId) {
  return async function (dispatch) {
    return deletePostService(postId)
      .then((res) => {
        dispatch(
          {
            type: DELETE_POST,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error deletePostService: ', e));
  };
}

// GET USER
export function getUser(userId) {
  return async function (dispatch) {
    return getUserService(userId)
      .then((res) => {
        dispatch(
          {
            type: GET_USER,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error getUserService: ', e));
  };
}

// ADD USER
export function addUser(userId, user) {
  return async function (dispatch) {
    return addUserService(userId, user)
      .then((res) => {
        dispatch(
          {
            type: ADD_USER,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error addUserService: ', e));
  };
}

// EDIT USER
export function editUser(userId, user) {
  return async function (dispatch) {
    return editUserService(userId, user)
      .then((res) => {
        dispatch(
          {
            type: EDIT_USER,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error editUserService: ', e));
  };
}

// DELETE USER
export function deleteUser(userId) {
  return async function (dispatch) {
    return deleteUserService(userId)
      .then((res) => {
        dispatch(
          {
            type: DELETE_USER,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error deleteUserService: ', e));
  };
}

// ADD BOOKING
export function addBooking(bookingId, booking) {
  return async function (dispatch) {
    return addBookingService(bookingId, booking)
      .then((res) => {
        dispatch(
          {
            type: ADD_BOOKING,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error addBookingService: ', e));
  };
}

// EDIT BOOKING
export function editBooking(bookingId, booking) {
  return async function (dispatch) {
    return editBookingService(bookingId, booking)
      .then((res) => {
        dispatch(
          {
            type: EDIT_BOOKING,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error editBookingService: ', e));
  };
}

// DELETE BOOKING
export function deleteBooking(bookingId) {
  return async function (dispatch) {
    return deleteBookingService(bookingId)
      .then((res) => {
        dispatch(
          {
            type: DELETE_BOOKING,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error deleteBookingService: ', e));
  };
}

// GET BOOKING
export function getBooking(bookingId) {
  return async function (dispatch) {
    return getBookingService(bookingId)
      .then((res) => {
        dispatch(
          {
            type: GET_BOOKING,
            payload: res.data,
          },
        );
      })
      .catch((e) => console.log('Error getBookingService: ', e));
  };
}
