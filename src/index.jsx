import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// components
import { Section } from 'components/Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: (prevState[type] += 1),
      };
    });
  };

  countTotalFeedback = (good, bad, neutral) => {
    return good + neutral + bad;
  };

  countPositivePercentage = (total, good) => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback(good, bad, neutral);
    const positivePercentage = this.countPositivePercentage(total, good);

    return (
      <>
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          onLeaveFeedback={this.handleFeedback}
        />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
