import produce from 'immer';

const INITIAL_STATE = {
  address: null,
  number: null,
  compl: null,
  city: null,
  UF: null,
  CEP: null,
};
export default function address(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@address/SAVE_ADDRESS': {
        draft.address = action.payload.address;
        draft.number = action.payload.number;
        draft.compl = action.payload.compl;
        draft.city = action.payload.city;
        draft.UF = action.payload.UF;
        draft.CEP = action.payload.CEP;
        break;
      }
      default:
    }
  });
}
