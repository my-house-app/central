import {
  PROPERTIES, GET_FILTERED_PROPERTIES, GET_NEXT_OR_PREVIOUS_PAGE, GET_SEARCHED_POST,
} from '../Actions/index';// para importar las variales de cada caso

const initialState = {
  principal: [],
  searched: '',
  count: '',
  currentPage: '',
  selfEndpoint: '',
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
  case GET_NEXT_OR_PREVIOUS_PAGE:
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

  default:
    return state;
  }
}
