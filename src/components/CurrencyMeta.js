import React from 'react';
import PropTypes from 'prop-types';
import { useStoreValue } from './providers/Context';

const CurrencyMeta = ({}) => {
  let [{ convert }, dispatch] = useStoreValue();

  return (
    <div className="convertRate flex">
      <div className="w-6 h-6 rounded-full bg-teal-600 text-white text-center">
        =
      </div>
      <p>
        Exchange Rate:{' '}
        {typeof convert.rate === 'number'
          ? (Math.round(convert.rate * 100) / 100).toString()
          : convert.rate}
      </p>
      <button
        className="w-6 h-6 rounded-full bg-green-600 text-white text-center"
        onClick={() => {
          dispatch({
            type: 'swapRates',
            payload: { base: convert.target, target: convert.base },
          });
        }}
      >
        ⇆
      </button>
    </div>
  );
};

CurrencyMeta.propTypes = {};

export default CurrencyMeta;
