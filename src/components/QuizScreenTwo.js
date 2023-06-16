import React, { useState } from 'react';
import { quizdata } from "./QuizData";
import QuizResult from './QuizResult';

export default function QuizScreenTwo() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const quizDataQuestion = quizdata.filter(question => question.category === 'Sports');
  const quizDataAnswer = quizdata.filter(options => options.category === 'Sports');
  
  const handleNext = () => {
    setClicked(false)
    setSelectedAnswer(null)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizDataQuestion.length) {
      setCurrentQuestion(nextQuestion)
    }
    else { setShowResult(true) }
  }

  const handleAnswr = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10)
      setCorrectAns(correctAns + 1)
    }
    setSelectedAnswer(isCorrect);
    setClicked(true);
  }

  const handlePlayAgain = () => {
    setCurrentQuestion(0)
    setScore(0)
    setCorrectAns(0)
    setShowResult(false)
  }

  return (
    <div id='quizscreentwo'>
      {showResult ? (
        <QuizResult score={score} correctAns={correctAns} quizDataQuestion={quizDataQuestion} handlePlayAgain={handlePlayAgain} />
      ) : (
        <>
          <div className='question'>
            <h3 className='scoree'>Score: {score}</h3>
            <div className='question-count'>
              <span>Question {currentQuestion + 1} out of {quizDataQuestion.length}</span>
            </div>
            <div className='question-text'>{quizDataQuestion[currentQuestion].question} </div>
          </div>
          <div className='answer'>
            {quizDataAnswer[currentQuestion].options.map((ans, i) => {
              const buttonStyle = {
                backgroundColor:
                  selectedAnswer === null
                    ? ""
                    : ans.isCorrect
                      ? "green"
                      : selectedAnswer === ans.isCorrect
                        ? "red"
                        : "",
              };
              return (
                <button
                  className='answer-button'
                  disabled={clicked}
                  key={i}
                  onClick={() => handleAnswr(ans.isCorrect)}
                  style={buttonStyle}
                >
                  {ans.answer}
                </button>
              );
            })}
            <div className='actions'>
              <button className='quit-button' onClick={handlePlayAgain}>
                Quit
              </button>
              <button className='next-button' disabled={!clicked} onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
