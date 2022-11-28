import { useState } from 'react'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Statistic = ({name, value, symbol}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value} {symbol}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total > 0) {
    return (
      <table>
        <tbody>
          <Statistic name="Good" value={good} />
          <Statistic name="Neutral" value={neutral} />
          <Statistic name="Bad" value={bad} />
          <Statistic name="Total reviews" value={total} />
          <Statistic name="Average" value={(good - bad) / total || 0} />
          <Statistic name="Positive" value={(good / total) * 100 || 0} symbol="%" />
        </tbody>
      </table>
    )
  }
  else {
    return (
      <>
        <p>No feedback has been given</p>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const processReview = () => {
    setTotal(total + 1)
  }

  const goodReview = () => {
    setGood(good + 1)
    processReview()
  }

  const neutralReview = () => {
    setNeutral(neutral + 1)
    processReview()
  }

  const badReview = () => {
    setBad(bad + 1)
    processReview()
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={goodReview} />
      <Button text="Neutral" onClick={neutralReview} />
      <Button text="Bad" onClick={badReview} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App
