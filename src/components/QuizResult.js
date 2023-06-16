import React from 'react'

const QuizResult = (props) => {
  return (
    <div id='score-section'>
      <h2>Completed!</h2>
      <h4>Total score {props.score}</h4>
      <h4>Total correct answers {props.correctAns} out of {props.quizDataQuestion.length}</h4>
      <button type="button" className="btn btn-outline-dark fw-bold" onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default QuizResult
