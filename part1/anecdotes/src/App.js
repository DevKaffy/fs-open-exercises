import { useState } from "react";
import Button from "./Components/Button";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write that a computer can understand, Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];
  const [selected, setSelected] = useState(0);
  console.log(selected);
  const arrOfVotes = Array(anecdotes.length).fill(0);

  const [votes, setVotes] = useState(arrOfVotes);
  console.log(votes);

  const handleVotes = () => {
    const votePoints = [...votes];
    votePoints[selected] += 1;
    setVotes(votePoints);
  };

  const maxVote = Math.max(...votes);
  const highestPersisted = anecdotes[votes.indexOf(maxVote)];
  console.log(maxVote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <Button
        text="next anecdote"
        anecdotes={anecdotes}
        setSelected={setSelected}
      />
      <h1>Anecdote with most votes</h1>
      <p>{highestPersisted}</p>
      <p>has {maxVote} votes</p>
    </div>
  );
}

export default App;
