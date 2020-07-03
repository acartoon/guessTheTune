import React from "react";
import PropTypes from "prop-types";


const Artist = (props) => {
  const {onAnswer, question, i} = props;

  return <div className="artist">
    <input onChange={(evt) => {
      evt.preventDefault();
      onAnswer(question.artist);
    }}

    className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}/>
    <label className="artist__name" htmlFor={`answer-${i}`}>
      <img className="artist__picture" src={question.picture} alt={question.artist}/>
      {question.artist}
    </label>
  </div>;
};

Artist.propTypes = {
  question: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired
};


export default Artist;
