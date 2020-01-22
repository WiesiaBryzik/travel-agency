import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue }) => (

  <div className={styles.text}>
    <input className={styles.inputSmall} type='text' placeholder="text" value={currentValue} onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default OrderOptionText;
