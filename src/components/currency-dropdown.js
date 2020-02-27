import React from 'react';
import PropTypes from 'prop-types';

const CurrencyDropdown = ({ data }) => {
  return (
    <select className="currency_select p-6">
      <option className="select_option p6" value="1">
        1
      </option>
      <option className="selection" value="2">
        2
      </option>
      <option className="selection" value="3">
        3
      </option>
      <option className="selection" value="4">
        4
      </option>
      <option className="selection" value="5">
        5
      </option>
    </select>
  );
};

CurrencyDropdown.propTypes = {
  data: PropTypes.object,
};

export default CurrencyDropdown;
