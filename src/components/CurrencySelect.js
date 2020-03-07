import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import 'currency-flags/dist/currency-flags.css';
import mock from '../../__mocks__/oxcLatest.json';
import { useStateValue } from './providers/Context';

const CurrencySelect = ({}) => {
  const [selected, setSelected] = useState('USD');
  const rates = mock.rates;

  const [showMenu, toggleMenu] = useState(false);
  const items = [];
  const numericInput = useRef();

  const onSelect = code => {
    setSelected(code);
    numericInput.current.focus();
    toggleMenu(!showMenu);
  };
  const onSelectKbd = (evt, value) => {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      numericInput.current.focus();
      toggleMenu(!showMenu);
    }
  };

  for (const currency in rates) {
    if (rates.hasOwnProperty(currency)) {
      items.push(
        <li
          className="flex items-center p-2 cursor-pointer mt-2 mb-2"
          tabIndex="0"
          role="option"
          aria-selected={currency === selected}
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

  const arrowRotation = showMenu ? 'rotate(180deg)' : 'rotate(0deg)';

  return (
    <div className="currency-select relative">
      <div className="flex">
        <input
          pattern="^(\d*\.)?\d+$"
          inputMode="numeric"
          className="p-2 rounded-l-sm flex-auto w-1"
          ref={numericInput}
        />
        <button
          className="p-2 flex items-center justify-between rounded-r-sm bg-teal-200 w-32 cursor-pointer"
          onClick={() => toggleMenu(!showMenu)}
        >
          <div className={`currency-flag currency-flag-${selected.toLowerCase()}`} />
          <p className="font-bold">{selected}</p>
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
          className="currency-list overflow-y-scroll absolute right-0 z-10 w-32 bg-teal-300"
          tabIndex="-1"
        >
          {items}
        </ul>
      )}
    </div>
  );
};

CurrencySelect.propTypes = {};

export default CurrencySelect;