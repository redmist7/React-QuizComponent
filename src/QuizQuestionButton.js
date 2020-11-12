import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <l1>
        <button>{this.props.button_text}</button>
      </l1>
    );
  }
}

export default QuizQuestionButton;
