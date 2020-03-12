import React from 'react';
import PropTypes from 'prop-types';
import { useStoreValue } from './providers/Context';

const CurrencyMeta = ({}) => {
  let [{ convert, rate }, dispatch] = useStoreValue();

  return (
    <div className="convertRate flex">
      <div className="w-6 h-6 rounded-full bg-teal-600 text-white text-center">
        =
      </div>
      <p>
        Exchange Rate:{' '}
        {typeof rate === 'number' ? (Math.round(rate) / 100).toString() : rate}
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
