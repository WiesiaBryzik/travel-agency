import React from 'react';
import PropTypes from 'prop-types';
import styles from '.HappyHourAd.scss';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  };

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.promoDescription}></div>
      </div>
    );
  }
}

export default HappyHourAd;
