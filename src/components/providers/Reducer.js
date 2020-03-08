export default (state, { type, payload }) => {
  switch (type) {
    case 'onSelect':
      state.convert[payload.Xrole] = payload.currency;
      return state;
    case 'calcRate':
      if (state.convert.base === 'USD') {
        state.rate = data[state.convert.target];
      }
      return state;
    case 'updateRates':
      console.log('triggerd Update Rates: ', payload.values);
      state.rates = payload.values;
      return state;
    default:
      return state;
  }
};
