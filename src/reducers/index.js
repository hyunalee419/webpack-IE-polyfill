import * as Types from '../actions/types';

const InitialState = {
  isSpinFull: false,
};

const Common = (state=InitialState, action) => {
  switch (action.type) {
    case Types.IS_SPIN_FULL:
      return { ...state, isSpinFull: action.isSpinFull };

    default:
      return state;
  }
};

export default Common;
