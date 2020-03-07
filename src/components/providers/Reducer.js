export default (state, action) => {
  switch (action.type) {
    case 'onSelect':
      state.convert[action.payload.Xrole] = action.payload.currency;
      return state;
    default:
      return state;
  }
};
