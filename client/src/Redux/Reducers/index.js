// actipon types
import {
  AVAILABLE_PROPERTIES,
  GET_AVAILABLE_FILTERED_PROPERTIES,
  GET_SEARCHED_POST,
  GET_ADMIN_DATA,
  GET_USER_DATA,
  GET_PANEL_FILTERED_PROPERTIES,
  ORDER_BY,
  GET_USER,
  EDIT_USER,
  DELETE_USER,
  EDIT_POST,
  DELETE_POST,
  GET_BOOKING,
  EDIT_BOOKING,
  DELETE_BOOKING,
} from '../Actions/types';

const initialState = {
  principal: [],
  count: '',
  searched: '',
  orderProp: '',
  orderType: '',
  currentPage: '',
  selfEndpoint: '',
  message: '',
  detail: {},
  panelAdmin: { render: { posts: [], users: [], bookings: [] } },
  panelUser: { render: { posts: [], bookings: [], ownerBookings: [] } },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case AVAILABLE_PROPERTIES:
    return {
      ...state,
      principal: action.payload.posts,
      count: action.payload.count,
      currentPage: action.payload.currentPage,
      selfEndpoint: action.payload.selfEndpoint,
    };
  case GET_AVAILABLE_FILTERED_PROPERTIES:
    return {
      ...state,
      principal: action.payload.posts,
      count: action.payload.count,
      currentPage: action.payload.currentPage,
      selfEndpoint: action.payload.selfEndpoint,
    };
  case GET_SEARCHED_POST:
    return {
      ...state,
      searched: action.payload,
    };
  case ORDER_BY:
    return {
      ...state,
      orderProp: action.payload.prop,
      orderType: action.payload.type,
    };
  case GET_ADMIN_DATA:
    return {
      ...state,
      panelAdmin: {
        ...state.panelAdmin,
        render: action.payload,
        count: action.payload.count,
        currentPage: action.payload.currentPage,
        selfEndpoint: action.payload.selfEndpoint,
      },
    };
  case GET_USER_DATA:
    return {
      ...state,
      panelUser: {
        ...state.panelUser,
        render: action.payload,
        count: action.payload.count,
        currentPage: action.payload.currentPage,
        selfEndpoint: action.payload.selfEndpoint,
      },
    };
  case GET_PANEL_FILTERED_PROPERTIES:
    return {
      ...state,
      renderPanel: {
        ...state.panelAdmin,
        render: action.payload.posts,
        count: action.payload.count,
        currentPage: action.payload.currentPage,
        selfEndpoint: action.payload.selfEndpoint,
      },
    };
  case EDIT_POST:
    return {
      ...state,
      message: action.payload,
    };
  case DELETE_POST:
    return {
      ...state,
      message: action.payload,
    };
  case GET_USER:
    return {
      ...state,
      detail: action.payload,
    };
  case EDIT_USER:
    return {
      ...state,
      message: action.payload,
    };
  case DELETE_USER:
    return {
      ...state,
      message: action.payload,
    };
  case GET_BOOKING:
    return {
      ...state,
      detail: action.payload,
    };
  case EDIT_BOOKING:
    return {
      ...state,
      message: action.payload,
    };
  case DELETE_BOOKING:
    return {
      ...state,
      message: action.payload,
    };
  default:
    return state;
  }
}
