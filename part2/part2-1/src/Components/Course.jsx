import React from 'react'
import Header from './Header'


const Course = ({ course }) => {
  // console.log(course)
  return (
    <div>
      <Header course={course} />
    </div>
  );
}

export default Course