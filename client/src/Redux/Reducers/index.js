import { PROPERTIES, GET_FILTERED_PROPERTIES } from '../Actions/index';// para importar las variales de cada caso

const initialState = {
  count: '',
  principal: [],
  render: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case PROPERTIES:
    return {
      ...state,
      principal: action.payload.posts,
      count: action.payload.count,
    };
  case GET_FILTERED_PROPERTIES:
    return {
      ...state,
      principal: action.payload,
    };

  default:
    return state;
  }
}
