import * as Types from './types';

export const SetIsSpinFull = (isSpinFull) => {
  return ({
    type: Types.IS_SPIN_FULL,
    isSpinFull
  });
}
