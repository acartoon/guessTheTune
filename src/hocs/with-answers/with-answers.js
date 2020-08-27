import React, {PureComponent} from "react";

const withAnswers = (Component) => {
  class WithAnswers extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(4).fill(false),
      };

      this._onChange = this._onChange.bind(this);
      this._onAnswer = this._onAnswer.bind(this);
    }

    _onChange(i) {
      const answers = this.state.answers.slice(0);
      answers[i] = !answers[i];
      console.log(answers)
      this.setState({answers});
    }

    _onAnswer() {
      this.props.onAnswer(this.state.answers, this.props.question);
    }

    render() {
      return <Component
        {...this.props}
        onAnswer={this._onAnswer}
        onChange={this._onChange}
        answers={this.state.answers}
      />;
    }
  }
  WithAnswers.prototypes = {
  };

  return WithAnswers;
}

export default withAnswers;
