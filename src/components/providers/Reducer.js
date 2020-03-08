export default (state, { type, payload }) => {
  switch (type) {
    case 'onSelect':
      const newState = { ...state };
      newState.convert[payload.Xrole] = payload.currency;
      newState.rate = newConvertRate(newState.convert, newState.rates);
      return newState;
    case 'updateRates':
      return { ...state, rates: payload.values };
    default:
      return state;
  }
};

const newConvertRate = ({ base, target }, rates) => {
  const rounded = Math.round(rates[base] * rates[target] * 100);
  const newRate = rounded / 100;
  return newRate;
};
