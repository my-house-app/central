// actipon types
import {
  PROPERTIES,
  GET_FILTERED_PROPERTIES,
  GET_SEARCHED_POST,
  GET_COORDINATES,
  PROPERTIES_PANEL,
  GET_ALL_POST_PANEL_NEXT,
} from '../Actions/types';

const initialState = {
  principal: [],
  searched: '',
  count: '',
  currentPage: '',
  selfEndpoint: '',
  coordinates: {},
  renderPanel: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case PROPERTIES:
    return {
      ...state,
      principal: action.payload.posts,
      count: action.payload.count,
      currentPage: action.payload.currentPage,
      selfEndpoint: action.payload.selfEndpoint,
    };
  case GET_FILTERED_PROPERTIES:
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
  case GET_COORDINATES:
    return {
      ...state,
      coordinates: action.payload,
    };
  case PROPERTIES_PANEL:
    return {
      ...state,
      renderPanel: {
        render: action.payload.posts,
        count: action.payload.count,
        currentPage: action.payload.currentPage,
        selfEndpoint: action.payload.selfEndpoint,
      },
    };
  case GET_ALL_POST_PANEL_NEXT:
    return {
      ...state,
      renderPanel: {
        render: action.payload.posts,
        count: action.payload.count,
        currentPage: action.payload.currentPage,
        selfEndpoint: action.payload.selfEndpoint,
      },
    };
  default:
    return state;
  }
}
