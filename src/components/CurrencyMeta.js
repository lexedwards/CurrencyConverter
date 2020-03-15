import React from 'react';
import PropTypes from 'prop-types';
import { useStoreValue } from './providers/Context';

const CurrencyMeta = ({}) => {
  let [{ convert }, dispatch] = useStoreValue();

  return (
    <div className="convertRate flex justify-around p-4">
      <div className="flex">
        <p>
          Exchange Rate:{' '}
          {typeof convert.rate === 'number'
            ? (Math.round(convert.rate * 100) / 100).toString()
            : convert.rate}
        </p>
      </div>
      <button
        className="w-6 h-6 rounded-full bg-green-500 opacity-75 text-white text-center"
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
