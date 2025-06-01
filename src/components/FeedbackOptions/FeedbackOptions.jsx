import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="buttons">
      <button onClick={() => onLeaveFeedback('good')} className="good">
        Good
      </button>
      <button onClick={() => onLeaveFeedback('neutral')} className="neutral">
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback('bad')} className="bad">
        Bad
      </button>
    </div>
  );
};
