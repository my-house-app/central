import { PROPERTIES } from '../Actions/index';// para importar las variales de cada caso

const initialState = {
  principal: [],
  render: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case PROPERTIES:
    return {
      ...state,
      principal: action.payload,
    };

  default:
    return state;
  }
}
