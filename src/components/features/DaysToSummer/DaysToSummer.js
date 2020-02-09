import React from 'react';
import styles from './DaysToSummer.scss';
import PropTypes from 'prop-types';
import {formatDaysToSummer} from '../../../utils/formatDaysToSummer';


class DaysToSummer extends React.Component {


  static propTypes = {
    title: PropTypes.node,
    days: PropTypes.node,
  };

  render(){
    let titleText = ' days to SUMMER!!!';
    const days = formatDaysToSummer(new Date());

    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{days}{titleText}</h3>
      </div>
    );
  }
}

DaysToSummer.propTypes = {

};

export default DaysToSummer;
