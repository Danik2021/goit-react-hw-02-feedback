import React from 'react';
import css from './Statistics.module.css';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className={css.statistics}>
        <li className="good">Good: {good}</li>
        <li className="neutral">Neutral: {neutral}</li>
        <li className="bad">Bad: {bad}</li>
        <li className="total">Total: {total}</li>
        <li className="positive">Positive feedback: {positivePercentage}%</li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
