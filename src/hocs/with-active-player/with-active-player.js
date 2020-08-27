import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import withAudio from "../with-audio/with-audio";
import Player from "../../components/player/player.jsx";

const AudioPlayerWrapped = withAudio(Player);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };

      this.playButtonClickHandlers = this.playButtonClickHandlers.bind(this);
    }

    playButtonClickHandlers(i) {
      const {activePlayer} = this.state;

      this.setState({
        activePlayer: (activePlayer === i) ? -1 : i,
      });
    }

    render() {
      return <Component
        {...this.props}
        renderPlayer = {(it, i) => {
          return <AudioPlayerWrapped
            src={it.src}
            isPlaying={i === this.state.activePlayer}
            onPlayButtonClick={() => (this.playButtonClickHandlers(i))}
          />;
        }}
      />
    }
  }

  WithActivePlayer.prototypes = {

  }

  return WithActivePlayer;
}

export default withActivePlayer;
