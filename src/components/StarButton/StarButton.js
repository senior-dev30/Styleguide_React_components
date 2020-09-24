import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../';

const StarButton = ({ isLiked, onLike, onDislike, size }) => {
  const [active, updateActive] = useState(isLiked);

  const handleClick = () =>
    updateActive(active => {
      active ? onDislike() : onLike();

      return !active;
    });

  return (
    <button onClick={handleClick} style={{ background: 'none', border: 'none', padding: '0' }}>
      <Icon icon={active ? 'STAR_SOLID' : 'STAR'} size={size} />
    </button>
  );
};

StarButton.displayName = 'StarButton';

StarButton.propTypes = {
  /**
   * Represents initial value of the Star being active
   */
  isLiked: PropTypes.bool,

  /**
   * Function representing a callback on item being `Starred`
   */
  onLike: PropTypes.func,

  /**
   * Function representing a callback on Item being `UN-Starred`
   */
  onDislike: PropTypes.func,

  /**
   * Allows Star size modifications
   */
  size: PropTypes.string,
};

StarButton.defaultProps = {
  isLiked: false,
  onLike: () => {},
  onDislike: () => {},
  size: '24px',
};

export default StarButton;
