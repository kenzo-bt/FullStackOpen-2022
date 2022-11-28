const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

const Part = (props) => (
  <>
    <p>{props.partName} {props.exerciseNum}</p>
  </>
)

const Content = (props) => {
  return (
    <>
      {props.exercises.map(x => <Part partName={x.name} exerciseNum={x.exercises} />)}
    </>
  )
}

const Total = (props) => {
  let total = 0
  props.exercises.forEach(x => {
    total = total + x.exercises
  })
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name}/>
      <Content exercises={course.parts} />
      <Total exercises={course.parts} />
    </>
  )
}

export default App
