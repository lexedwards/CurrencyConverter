import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'currency-flags/dist/currency-flags.css';
import { useStoreValue } from './providers/Context';
import fetchXC from '../api/fetchXC';

const CurrencySelect = ({ Xrole }) => {
  const [{ convert, rates }, dispatch] = useStoreValue();

  const [showMenu, toggleMenu] = useState(false);

  const onSelect = currency => {
    dispatch({ type: 'onSelect', payload: { xrole: Xrole, currency } });
    toggleMenu(!showMenu);
  };

  const onSelectKbd = (evt, value) => {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      numericInput.current.focus();
      toggleMenu(!showMenu);
    }
    if (evt.keyCode === 13 || evt.keyCode === 32) {
      onSelect(value);
    }
  };

  const handleChange = evt => {
    dispatch({
      type: 'updateInput',
      payload: { xrole: Xrole, value: evt.target.value },
    });
  };

  const dataList = [];

  const currencyList = async () => {
    try {
      const defaultRates = Object.keys(rates).length;
      if (defaultRates === 2) {
        const data = await fetchXC();
        dispatch({ type: 'updateRates', payload: { values: data.rates } });
      }
    } catch (error) {
      dataList.push(<li>Error: {error}</li>);
    } finally {
      for (const currency in rates) {
        if (rates.hasOwnProperty(currency)) {
          dataList.push(
            <li
              key={currency}
              className="flex items-center p-2 cursor-pointer mt-2 mb-2"
              tabIndex="0"
              role="option"
              aria-selected={currency === convert.base}
              onClick={() => onSelect(currency)}
              onKeyUp={evt => onSelectKbd(evt, currency)}
            >
              <div
                className={`currency-flag currency-flag-${currency.toLowerCase()} mr-2`}
              />
              <p className="font-bold">{currency}</p>
            </li>
          );
        }
      }
    }
  };
  currencyList();

  const arrowRotation = showMenu ? 'rotate(180deg)' : 'rotate(0deg)';

  return (
    <div className="currency-select relative">
      <div className="flex">
        <input
          pattern="^(\d*\.)?\d+$"
          inputMode="numeric"
          className="p-2 rounded-l-sm flex-auto w-1 bg-gray-700"
          onChange={handleChange}
          value={convert[Xrole].value}
        />
        <button
          className="p-2 flex items-center justify-between rounded-r-sm bg-teal-500 w-32 cursor-pointer"
          onClick={() => toggleMenu(!showMenu)}
        >
          <div
            className={`currency-flag currency-flag-${convert[
              Xrole
            ].name.toLowerCase()}`}
          />
          <p className="font-bold">{convert[Xrole].name}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            viewBox="0 0 320 512"
            style={{ transform: arrowRotation }}
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
          </svg>
        </button>
      </div>
      {showMenu && (
        <ul
          className="currency-list overflow-y-scroll absolute right-0 z-10 w-32 bg-teal-600"
          tabIndex="-1"
        >
          {dataList}
        </ul>
      )}
    </div>
  );
};

CurrencySelect.propTypes = {
  Xrole: PropTypes.string.isRequired,
};

export default CurrencySelect;
