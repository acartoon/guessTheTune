import React from "react";
import PropTypes from "prop-types";
// import Player from "../player/player.jsx";

const Track = (props) => {
  const {index, onAnswer, answer, state, children} = props;

  const handleChangeAnswer = () => {
    onAnswer(index);
  };

  return <div className="track">
    {children}
    <div className="game__answer">

      <input
        checked={state}
        onChange = {handleChangeAnswer}
        className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${answer.genre} ${state}`} id={`answer-${answer.id}`}
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
  children: PropTypes.element.isRequired,
};


export default Track;
