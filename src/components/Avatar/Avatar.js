import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { Box } from '../';

const Avatar = React.forwardRef(
  ({ userProfileUrl, userImageUrl, className, shadowColor, avatarLinkProps, ...props }, ref) => {
    if (ref) {
      props.ref = ref;
    }

    return (
      <Link to={userProfileUrl} {...avatarLinkProps}>
        <Box
          as='img'
          src={userImageUrl}
          className={cx(className, shadowColor && `avatar-shadow-${shadowColor}`)}
          {...props}
        />
      </Link>
    );
  },
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  /**
   * To set width and height of image
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * User profile url
   */
  userProfileUrl: PropTypes.string.isRequired,

  /**
   * User image url
   */
  userImageUrl: PropTypes.string.isRequired,

  /**
   * To set radius of image
   */
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Theme color of shadow
   */
  shadowColor: PropTypes.string,

  /**
   * Avatar is wrapped inside `<Link>`, this prop provides a way to pass custom props to `<Link>`
   */
  avatarLinkProps: PropTypes.object,
};

Avatar.defaultProps = {
  shadowColor: null,
  size: 12,
  borderRadius: 12,
};

export default Avatar;
