import React from 'react'

const Total = ({parts}) => {
  const total = 
  parts.reduce((acc, cur) => { console.log(acc, cur)
    return cur.exercises + acc},0
    );
    // console.log(total);
  return (
    <div>
        <h3>total of {total} exercises</h3>
    </div>
  )
}

export default Total