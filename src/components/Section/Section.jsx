import React from 'react';

// components
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const Section = ({ good, neutral, bad, total, positivePercentage, onLeaveFeedback }) => {
  return (
    <div>
      <h1 className="title">Please leave feedback</h1>
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
      <h2>Statistics</h2>
      {total === 0 ? (
        <Notification />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
};

Section.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
