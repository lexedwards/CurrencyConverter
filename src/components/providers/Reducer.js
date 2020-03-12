export default (state, { type, payload }) => {
  switch (type) {
    case 'onSelect':
      let newState = { ...state };
      newState.convert[payload.xrole].name = payload.currency;
      newState.convert.rate = newConvertRate(newState.convert, newState.rates);
      return newState;
    case 'updateRates':
      return {
        ...state,
        rates: payload.values,
      };
    case 'swapRates':
      return {
        ...state,
        convert: {
          ...state.convert,
          ...payload,
          rate: newConvertRate(payload, state.rates),
        },
      };
    case 'updateInput':
      return {
        ...state,
        convert: dynaInput({
          Xrole: payload.xrole,
          value: payload.value,
          convert: state.convert,
        }),
      };
    default:
      return state;
  }
};

const newConvertRate = ({ base, target }, rates) => {
  const baseRate = rates[base.name];
  const targetRate = rates[target.name];

  let rounded;

  if (typeof baseRate === 'number' && typeof targetRate === 'number') {
    rounded = targetRate / baseRate;
  } else {
    rounded = "Error: Can't find Currency Exchange";
  }

  return rounded;
};

const dynaInput = ({ Xrole = 'base', value = 0, convert = {} }) => {
  /**
   * Establish which input has been altered
   *  Xrole = 'base' || 'target'
   * if empty, set 0;
   *  convert[Xrole].value = value || 0;
   */

  const newConvert = { ...convert };

  newConvert[Xrole].value = value;

  if (Xrole === 'base') {
    newConvert.target.value =
      Math.floor(newConvert.base.value * convert.rate * 100) / 100;
  } else {
    newConvert.base.value =
      Math.floor((newConvert.target.value / convert.rate) * 100) / 100;
  }

  return newConvert;
};
