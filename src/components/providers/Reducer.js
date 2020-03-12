export default (state, { type, payload }) => {
  switch (type) {
    case 'onSelect':
      let newState = { ...state };
      newState.convert[payload.Xrole] = payload.currency;
      newState.rate = newConvertRate(newState.convert, newState.rates);
      return newState;
    case 'updateRates':
      return { ...state, rates: payload.values };
    case 'swapRates':
      return {
        ...state,
        rate: newConvertRate(payload, state.rates),
        convert: { ...payload },
      };
    default:
      return state;
  }
};

const newConvertRate = ({ base, target }, rates) => {
  const baseRate = rates[base];
  const targetRate = rates[target];

  let rounded;

  if (typeof baseRate === 'number' && typeof targetRate === 'number') {
    rounded = (targetRate / baseRate) * 100;
  } else {
    rounded = "Error: Can't find Currency Exchange";
  }

  return rounded;
};
