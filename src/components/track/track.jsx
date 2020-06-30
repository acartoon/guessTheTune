import React from "react";
import PropTypes from "prop-types";


const Track = (props) => {
  const {index, onAnswer, answer, state} = props;
  // const {screenIndex, question, onAnswer} = props;
  // console.log(answer);

  const handleChangeAnswer = (evt) => {
    evt.preventDefault();
    // console.log(index)
    onAnswer(index);
  };

  return <div className="track">
    <button className="track__button track__button--play" type="button"></button>
    <div className="track__status">
      <audio src={`${answer.src}`}></audio>
    </div>
    <div className="game__answer">

      <input onChange = {handleChangeAnswer}
        className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${answer.genre}`} id={`answer-${answer.id}`}
        checked={state}
      />
      <label className="game__check" htmlFor= {`answer-${answer.id}`} >Отметить</label>
    </div>
  </div>;
};

Track.propTypes = {
  index: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired,
  state: PropTypes.bool.isRequired,
};


export default Track;
