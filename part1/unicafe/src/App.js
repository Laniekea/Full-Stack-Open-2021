import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    console.log(e.target.name)
    if (e.target.name === "good") {
      setGood(good+1)
    }
    else if (e.target.name === "neutral") {
      setNeutral(neutral+1)
    }
    else {
      setBad(bad+1)
    }
  }

  const Button = ({type}) => {
    return (
      <button name={type} onClick={(e) => handleClick(e)}>{type}</button>
    )
  }

  return (
    <div>
      <h4>Give Feedback</h4>
      <p>
        <Button type={"good"} value={good} />
        <Button type={"neutral"} value={neutral} />
        <Button type={"bad"} value={bad} />
      </p>
      <h4>Statistics</h4>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}
export default App;
