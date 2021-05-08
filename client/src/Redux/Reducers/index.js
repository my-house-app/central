import { PROPERTIES, GET_FILTERED_PROPERTIES } from '../Actions/index';// para importar las variales de cada caso

const initialState = {
  count: '',
  principal: [],
  render: [],
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

  default:
    return state;
  }
}
