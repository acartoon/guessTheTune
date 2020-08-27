import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const Player = (props) => {
  const {isLoading, isPlaying, renderAudio, onPlayButtonClick} = props;

  return (
    <React.Fragment>
      <div className="track">
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={onPlayButtonClick}
        />
        <div className="track__status">
        {renderAudio()}
        </div>
      </div>
    </React.Fragment>
  );
}

Player.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};
export default Player;
