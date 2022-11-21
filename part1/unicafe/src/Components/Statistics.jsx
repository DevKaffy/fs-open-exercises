import React from "react";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad, canCalculate }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={good + neutral + bad} />
      <StatisticsLine
        text="average"
        value={
          canCalculate ? (good + bad - neutral) / (good + neutral + bad) : 0
        }
      />
      <StatisticsLine
        text="positive"
        value={(canCalculate ? (good / (good + neutral + bad)) * 100 : 0) + "%"}
      />
    </div>
  );
};

export default Statistics;
