import React from 'react'
import Course from './Components/Course'
import Content from './Components/Content'
import Total from './Components/Total'


const App = () => {
  const course = [
  {
    id: 1,
    name: 'Half Stack application',
    parts:[
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      },
    ]
  },
  {
    name:'Node.js',
    id: 2,
    parts:[
      {
      name: 'Routing',
      exercises: 3,
      id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      },
    ]
  },
]
  return (
    <div>
      {course.map(( c, courseIndex ) => {
      return (
        <>
          <Course course={c.name} />
          <Content parts={c.parts} />
          <Total parts={c.parts} />
        </>
      )})}

      {/* <Course course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/> */}
    </div>
  );
}

export default App
