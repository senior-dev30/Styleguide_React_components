/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import Box from '../Box';
import Progress from '../Progress/Progress';
import FlexBox from '../FlexBox';

const StakeholderCard = ({ label, percentageValue }) => {
  const percentage = Math.min(percentageValue, 100);
  const widthWhen100percent = 289;
  const percentageWidth = (percentage / 100) * widthWhen100percent;

  return (
    <Box>
      <Box color='#2c384f' fontSize='15px' fontWeight='300'>
        {label}
      </Box>
      <FlexBox alignItems='flex-start' position='relative' top='-3px'>
        <Box width={`${percentageWidth}px`} maxWidth='500px'>
          <Progress value='100' className='stakeholder-progressbar' />
        </Box>
        <Box
          flexBasis='100px'
          lineHeight='13px'
          position='relative'
          top='2px'
          fontSize='12px'
          color='#a2a2a2'
          paddingLeft='2px'
        >
          {percentageValue}%
        </Box>
      </FlexBox>
    </Box>
  );
};

StakeholderCard.displayName = 'StakeholderCard';
StakeholderCard.propTypes = {
  /** label for progress bar */
  label: PropTypes.string.isRequired,

  /** progress percentage from 0 to 100 */
  percentageValue: PropTypes.number.isRequired,
};
StakeholderCard.defaultProps = {};

export default StakeholderCard;
