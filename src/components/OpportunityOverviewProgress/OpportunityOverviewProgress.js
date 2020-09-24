import React from 'react';
import PropTypes from 'prop-types';
import { Progress, Box, FlexBox } from '../';

const OpportunityOverviewProgress = ({
  title,
  titleFlexBasis,
  titleFontSize,
  showCompleteText,
  completedCount,
  totalCount,
  progressProps,
  wrapperBoxProps,
}) => (
  <FlexBox alignItems='center' position='relative' color='secondary' {...wrapperBoxProps}>
    <Box
      flexBasis={titleFlexBasis}
      fontSize={titleFontSize}
      letterSpacing='-0.5px'
      lineHeight='normal'
    >
      {title}
    </Box>
    <Box flexGrow='1'>
      <Progress value={(completedCount / totalCount) * 100} {...progressProps} />
    </Box>

    {showCompleteText && (
      <Box
        position='absolute'
        top='-18px'
        right='0px'
        fontSize='12px'
        letterSpacing='-0.33px'
        lineHeight='normal'
      >
        {completedCount}/{totalCount} complete
      </Box>
    )}
  </FlexBox>
);

OpportunityOverviewProgress.displayName = 'OpportunityOverviewProgress';
OpportunityOverviewProgress.propTypes = {
  title: PropTypes.string.isRequired,
  titleFlexBasis: PropTypes.string,
  titleFontSize: PropTypes.string,
  completedCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  showCompleteText: PropTypes.bool,

  /**
   * props to `Progress`
   */
  progressProps: PropTypes.object,

  /**
   * props to wrapper `Box`
   */
  wrapperBoxProps: PropTypes.object,
};

OpportunityOverviewProgress.defaultProps = {
  showCompleteText: false,
};

export default OpportunityOverviewProgress;
