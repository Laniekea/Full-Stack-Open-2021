import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleClick = (e) => {
    if (e.target.name === "good") {
      setGood(good+1)
    }
    else if (e.target.name === "neutral") {
      setNeutral(neutral+1)
    }
    else {
      setBad(bad+1)
    }

    setAll(good+neutral+bad)
  }

  const Button = ({type}) => {
    return (
      <button name={type} onClick={(e) => handleClick(e)}>{type}</button>
    )
  }

  const Statistics = ({good, neutral, bad, all}) => {
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        {all > 0 && <p>all {all}</p>}
        {all > 0 && <p>average {(good-bad)/all}</p>}
        {all > 0 && <p>positive {(good/all)*100}%</p>}
      </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}
export default App;
