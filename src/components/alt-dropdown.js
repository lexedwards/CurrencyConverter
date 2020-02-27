import React, { useState } from 'react';
import PropType from 'prop-types';

const Select = ({ data }) => {
  const [viewList, setList] = useState(false);

  const SAMPLE_DATA = {
    USD: {
      label: 'USD',
      name: 'United States Dollar',
      value: 1,
      icon: 'https://restcountries.eu/data/usa.svg',
    },
    EUR: {
      label: 'EUR',
      name: 'Euro',
      value: 0.9,
      icon: 'https://restcountries.eu/data/eur.svg',
    },
    GBP: {
      label: 'GBP',
      name: 'Pound Sterling',
      value: 0.78,
      icon: 'https://restcountries.eu/data/gbp.svg',
    },
    JPY: {
      label: 'JPY',
      name: 'Japanese Yen',
      value: 110,
      icon: 'https://restcountries.eu/data/jpy.svg',
    },
  };

  const handleClick = () => {
    setList(!viewList);
  };

  const hangleChange = () => {};

  return (
    <div className="Select relative">
      <button type="button" className="Select_Title flex" onClick={handleClick}>
        <span className="Select_Icon w-4">i</span>
        <span className="Select_Label">usd</span>
      </button>
      {viewList && (
        <ul className="Select_Options absolute">
          <Option onChange={hangleChange} />
        </ul>
      )}
    </div>
  );
};

const Option = ({ group, icon, label, onChange, selected, value }) => {
  // Find a way to inherit group from 'Select' function

  return (
    <li className="Select_Option">
      <label className="Option_Label">
        <input
          type="radio"
          name={group}
          value={value}
          selected={selected === value}
          onChange={onChange}
        />
        <span className="Option_Icon"></span>
        <span className="Option_Label">{label}</span>
      </label>
    </li>
  );
};

Option.propTypes = {
  group: PropType.string,
  icon: PropType.string,
  label: PropType.string,
  onChange: PropType.func,
  selected: PropType.oneOfType([PropType.string, PropType.number]),
  value: PropType.oneOfType([PropType.string, PropType.number]),
};

Select.propTypes = {
  data: PropType.object,
};

export { Select };
