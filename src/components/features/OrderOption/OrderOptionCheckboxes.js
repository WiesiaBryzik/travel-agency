import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionChechboxes = ({ values, currentValue, setOptionValue }) => (

  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.id}
          checked={currentValue[value.id]}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
        />
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionChechboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionChechboxes;
