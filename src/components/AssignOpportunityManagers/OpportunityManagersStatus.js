import React from 'react';
import PropTypes from 'prop-types';

import FlexBox from '../FlexBox';
import Box from '../Box';

const OpportunityManagersStatus = ({ labels }) => {
  return (
    <FlexBox
      justifyContent='space-between'
      flexDirection='column'
      alignItems='start'
      position='relative'
      height='110px'
    >
      {labels.map((label, index) => (
        <FlexBox flexDirection='row' key={index} alignItems='center' height='30px'>
          <Box
            height='19px'
            width='102px'
            fontSize='14px'
            fontWeight='normal'
            fontStretch='normal'
            fontStyle='normal'
            lineHeight='normal'
            letterSpacing='normal'
            color='secondary'
          >
            {label}
          </Box>
          <Box
            width='200px'
            height='10px'
            borderRadius='6px'
            backgroundColor='#F2F2F2'
            position='relative'
          >
            <Box
              width='4px'
              backgroundColor='#01FF1F'
              position='absolute'
              top='-10px'
              bottom='-10px'
            />
          </Box>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

OpportunityManagersStatus.displayName = 'OpportunityManagersStatus';

OpportunityManagersStatus.propTypes = {
  /** A collection of labels containing */
  labels: PropTypes.array.isRequired,
};

export default OpportunityManagersStatus;
