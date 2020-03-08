export default (state, { type, payload }) => {
  switch (type) {
    case 'onSelect':
      state.convert[payload.Xrole] = payload.currency;
      state.rate = newConvertRate(state.convert, state.rates);
      return state;
    case 'updateRates':
      state.rates = payload.values;
      return state;
    default:
      return state;
  }
};

const newConvertRate = ({ base, target }, rates) => {
  const rounded = Math.round(rates[base] * rates[target] * 100);
  const newRate = rounded / 100;
  return newRate;
};
