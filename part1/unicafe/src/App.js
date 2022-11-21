import { useState } from "react";
import Statistics from "./Components/Statistics";
import Button from "./Components/Button";

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const canCalculate = bad || good || neutral

  return (
    <div className="App">
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} canCalculate={canCalculate}
      />
    </div>
  );
}

export default App;
