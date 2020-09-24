import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import lottie from 'lottie-web';

// Copied from https://github.com/chenqingspring/react-lottie/blob/master/src/index.js

/**
 * A React wrapper for https://github.com/airbnb/lottie-web
 */
class Lottie extends React.Component {
  componentDidMount() {
    const { options, eventListeners } = this.props;

    const {
      loop = false,
      autoplay = true,
      segments = false,
      renderer = 'svg',
      animationData,
      rendererSettings,
    } = options;

    this.options = {
      loop,
      autoplay,
      segments,
      renderer,
      animationData,
      rendererSettings,
      container: this.el,
    };

    this.options = { ...this.options, ...options };

    this.anim = lottie.loadAnimation(this.options);
    this.registerEvents(eventListeners);
  }

  componentDidUpdate(prevProps) {
    /* Recreate the animation handle if the data is changed */
    if (this.options.animationData !== this.props.options.animationData) {
      this.deRegisterEvents(prevProps.eventListeners);
      this.destroy();
      this.options = { ...this.options, ...this.props.options };
      this.anim = lottie.loadAnimation(this.options);
      this.registerEvents(this.props.eventListeners);
    }

    if (this.props.isStopped) {
      this.stop();
    } else if (this.props.segments) {
      this.playSegments();
    } else {
      this.play();
    }

    this.pause();
    this.setSpeed();
    this.setDirection();
  }

  componentWillUnmount() {
    this.deRegisterEvents(this.props.eventListeners);
    this.destroy();
    this.options.animationData = null;
    this.anim = null;
  }

  setSpeed() {
    this.anim.setSpeed(this.props.speed);
  }

  setDirection() {
    this.anim.setDirection(this.props.direction);
  }

  play() {
    this.anim.play();
  }

  playSegments() {
    this.anim.playSegments(this.props.segments);
  }

  stop() {
    this.anim.stop();
  }

  pause() {
    if (this.props.isPaused && !this.anim.isPaused) {
      this.anim.pause();
    } else if (!this.props.isPaused && this.anim.isPaused) {
      this.anim.pause();
    }
  }

  destroy() {
    this.anim.destroy();
  }

  registerEvents(eventListeners) {
    eventListeners.forEach(eventListener => {
      this.anim.addEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  deRegisterEvents(eventListeners) {
    eventListeners.forEach(eventListener => {
      this.anim.removeEventListener(eventListener.eventName, eventListener.callback);
    });
  }

  handleClickToPause = () => {
    // The pause() method is for handling pausing by passing a prop isPaused
    // This method is for handling the ability to pause by clicking on the animation
    if (this.anim.isPaused) {
      this.anim.play();
    } else {
      this.anim.pause();
    }
  };

  render() {
    const { width, height, ariaRole, ariaLabel, isClickToPauseDisabled, title } = this.props;

    const getSize = initial => {
      let size;

      if (typeof initial === 'number') {
        size = `${initial}px`;
      } else {
        size = initial || '100%';
      }

      return size;
    };

    const lottieStyles = {
      width: getSize(width),
      height: getSize(height),
      overflow: 'hidden',
      margin: '0 auto',
      outline: 'none',
    };

    const onClickHandler = isClickToPauseDisabled ? () => null : this.handleClickToPause;

    return (
      <Box
        ref={c => {
          this.el = c;
        }}
        style={lottieStyles}
        onClick={onClickHandler}
        title={title}
        role={ariaRole}
        aria-label={ariaLabel}
        tabIndex='0'
      />
    );
  }
}

Lottie.displayName = 'Lottie';

Lottie.propTypes = {
  /**
   * This is an array of objects containing a eventName and callback function that will be registered as eventlisteners on the animation object.
   * refer to https://github.com/bodymovin/bodymovin#events where the mention using addEventListener, for a list of available custom events.
   */
  eventListeners: PropTypes.arrayOf(PropTypes.object),

  /**
   * Object representing the animation settings that will be instantiated by bodymovin.
   * Currently a subset of the bodymovin options are supported:
   *
   * 	{
   * 		loop, // [default: `false`], if `true`, animation will play in loop
   * 		autoplay, // [default: `true`], if `true`, it will start playing as soon as it is ready
   * 		segments, // [default: `false`] set it to `true`, it will play range of segments props
   * 		animationData, // [`required`] an Object with the exported animation data.
   * 		rendererSettings, // See https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
   * 		renderer, // [default: `svg`]
   *
   * 		//  any other option(s) will be passed directly to `lottie.loadAnimation`
   * 	}
   *
   */
  options: PropTypes.shape({
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    animationData: PropTypes.object,
    segments: PropTypes.bool,
    rendererSettings: PropTypes.object,
    renderer: PropTypes.any,
  }),
  /** Container's height in pixels */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Container's width in pixels */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Use `isStopped` to Stop/(Re)Start animation */
  isStopped: PropTypes.bool,

  /** Pause/Resume animation */
  isPaused: PropTypes.bool,

  /** Speed of animation */
  speed: PropTypes.number,

  /**
   * Can contain 2 numeric values that will be used as first and last frame of the animation.
   *
   * Or can contain a sequence of arrays each with 2 numeric values.
   *
   * e.g. `segments={[0, 50]}`
   * */
  segments: PropTypes.arrayOf(PropTypes.number),

  /** Set 1 to animate forward, -1 animate in backwards */
  direction: PropTypes.number,

  /** Set `role` attribute */
  ariaRole: PropTypes.string,

  /** Set aria-label attribute */
  ariaLabel: PropTypes.string,

  /** If `true`, animation will pause on click*/
  isClickToPauseDisabled: PropTypes.bool,

  /** Set title attribute */
  title: PropTypes.string,
};

Lottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: 'button',
  ariaLabel: 'animation',
  isClickToPauseDisabled: false,
  title: '',
};

export default Lottie;
