import { EXAMPLE } from '../Actions/index';// para importar las variales de cada caso

const initialState = {
  render: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case EXAMPLE:
    return {

    };

  default:
    return state;
  }
}
