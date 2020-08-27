import React from "react";
import PropTypes from "prop-types";
// import Player from "../player/player.jsx";

const Track = (props) => {
  const {index, onChange, answer, checked} = props;
  console.log(checked)
  const handleChangeAnswer = () => {
    onChange(index);
  };

  return <div className="game__answer">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange = {handleChangeAnswer}
        className="game__input visually-hidden" name="answer" value={`answer-${answer.genre}`} id={`answer-${answer.id}`}
      />
      <label className="game__check" htmlFor= {`answer-${answer.id}`} >Отметить</label>
    </div>;
};

Track.propTypes = {
  index: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired,
  state: PropTypes.bool.isRequired,
};


export default Track;
