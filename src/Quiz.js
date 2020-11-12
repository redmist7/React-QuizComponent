import React, { Component } from 'react';
import QuizEnd from './QuizEnd';
import QuizQuestion from './QuizQuestion';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  render() {
    const isQuizEnd =
      quizData.quiz_questions.length === this.state.quiz_position - 1;
    return (
      <div>
        {isQuizEnd ? (
          <QuizEnd></QuizEnd>
        ) : (
          <QuizQuestion
            className='QuizQuestion'
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
          ></QuizQuestion>
        )}
      </div>
    );
  }
}

export default Quiz;
