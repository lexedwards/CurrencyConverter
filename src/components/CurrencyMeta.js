import React from 'react';
import PropTypes from 'prop-types';
import { useStoreValue } from './providers/Context';

const CurrencyMeta = ({}) => {
  let [{ rate }] = useStoreValue();

  return (
    <div className="flex">
      <div className="convertRate">
        <div className="w-6 h-6 rounded-full bg-teal-600 text-white text-center">
          =
        </div>
        <p>Exchange Rate: {rate.toString()}</p>
      </div>
    </div>
  );
};

CurrencyMeta.propTypes = {};

export default CurrencyMeta;
