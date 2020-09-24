import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, Box, FlexBox } from '../';

const AvatarWithNameTitle = ({
  name,
  title,
  avatarPosition,
  avatarProps,
  rootBoxProps,
  nameFontSize,
  nameFontWeight,
  titleFontSize,
  titleFontWeight,
  nameColor,
  titleColor,
  nameLetterSpacing,
  titleLetterSpacing,
  nameTitleBoxProps,
}) => {
  const nameTitleProps = {};
  if (avatarPosition === 'left') nameTitleProps.marginLeft = 20;
  else if (avatarPosition === 'right') nameTitleProps.marginRight = 20;
  else if (avatarPosition === 'top') nameTitleProps.marginTop = 20;

  return (
    <FlexBox
      inlineFlex
      flexDirection={avatarPosition === 'top' ? 'column' : 'row'}
      {...rootBoxProps}
    >
      {(avatarPosition === 'left' || avatarPosition === 'top') && <Avatar {...avatarProps} />}

      <FlexBox
        flexDirection='column'
        justifyContent='center'
        {...nameTitleProps}
        {...nameTitleBoxProps}
      >
        <Link to={avatarProps.userProfileUrl}>
          <Box
            color={nameColor}
            fontSize={nameFontSize}
            fontWeight={nameFontWeight}
            letterSpacing={nameLetterSpacing}
          >
            {name}
          </Box>
        </Link>
        <Box
          color={titleColor}
          fontSize={titleFontSize}
          fontWeight={titleFontWeight}
          letterSpacing={titleLetterSpacing}
        >
          {title}
        </Box>
      </FlexBox>

      {avatarPosition === 'right' && <Avatar {...avatarProps} />}
    </FlexBox>
  );
};

AvatarWithNameTitle.displayName = 'AvatarWithNameTitle';

const NumberOrString = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

AvatarWithNameTitle.propTypes = {
  name: PropTypes.node.isRequired,
  title: PropTypes.node,
  avatarPosition: PropTypes.oneOf(['left', 'right', 'top']),
  avatarProps: PropTypes.object,
  rootBoxProps: PropTypes.object,

  /** fontSize for name */
  nameFontSize: NumberOrString,

  /** fontSize for title */
  titleFontSize: NumberOrString,

  /** fontWeight for name */
  nameFontWeight: NumberOrString,

  /** fontWeight for title */
  titleFontWeight: NumberOrString,

  /** text-color for name */
  nameColor: PropTypes.string,

  /** text-color for title */
  titleColor: PropTypes.string,

  /** letterSpacing for name */
  nameLetterSpacing: NumberOrString,

  /** letterSpacing for title */
  titleLetterSpacing: NumberOrString,

  /** props for NameTitle container Box  */
  nameTitleBoxProps: PropTypes.object,
};

AvatarWithNameTitle.defaultProps = {
  avatarPosition: 'left',
  nameFontSize: '16',
  nameFontWeight: '600',
  titleFontSize: '16',
  titleFontWeight: '500',
  nameColor: 'secondary',
  titleColor: 'secondary',
  nameLetterSpacing: -0.44,
  titleLetterSpacing: -0.39,
};

export default AvatarWithNameTitle;
