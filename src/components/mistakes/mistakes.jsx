import PropTypes from "prop-types";
import React from "react";

const Mistakes = (props) => {
  const {countMistakes} = props;
  const mistakes = new Array(countMistakes).fill(``);

  const renderMistakes = mistakes.map((it, i) => <div key={`mistake-${i}`} className="wrong" />);

  return (
    <div className="game__mistakes">
      {renderMistakes}
    </div>
  );
};

Mistakes.propTypes = {
  countMistakes: PropTypes.number.isRequired,
};

export default Mistakes;
