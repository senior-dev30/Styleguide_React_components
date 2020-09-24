import React from 'react';
import PropTypes from 'prop-types';
import { Box, FlexBox } from '..';

const SubtitleTitleComponent = ({
  title,
  subtitle,

  titleFontSize,
  subtitleFontSize,

  titleFontWeight,
  subtitleFontWeight,

  titleColor,
  subtitleColor,

  useBar,
  barColor,
  ...otherProps
}) => {
  let dynamicProps = {};

  if (useBar) {
    dynamicProps.borderLeft = `2px solid`;
    dynamicProps.borderLeftColor = barColor;
    dynamicProps.paddingLeft = '11px';
  }

  return (
    <FlexBox
      {...dynamicProps}
      flexDirection='column'
      justifyContent='space-between'
      {...otherProps}
    >
      <Box
        fontSize={titleFontSize}
        fontWeight={titleFontWeight}
        color={titleColor}
        letterSpacing='-0.33px'
        lineHeight='normal'
      >
        {title}
      </Box>
      <Box
        fontSize={subtitleFontSize}
        fontWeight={subtitleFontWeight}
        color={subtitleColor}
        letterSpacing='normal'
        lineHeight='normal'
        marginTop='4px'
      >
        {subtitle}
      </Box>
    </FlexBox>
  );
};

SubtitleTitleComponent.displayName = 'SubtitleTitleComponent';
SubtitleTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,

  titleFontWeight: PropTypes.number,
  subtitleFontWeight: PropTypes.number,

  titleFontSize: PropTypes.string,
  subtitleFontSize: PropTypes.string,

  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,

  /** when true, left bar will be added */
  useBar: PropTypes.bool,

  /** color of left bar, doesn't affect when useBar if `false` */
  barColor: PropTypes.string,
};

SubtitleTitleComponent.defaultProps = {
  titleFontSize: '12px',
  subtitleFontSize: '14px',

  titleFontWeight: 400,
  subtitleFontWeight: 600,

  titleColor: 'secondary',
  subtitleColor: 'secondary',

  useBar: false,
  barColor: 'secondary',
};

export default SubtitleTitleComponent;
