import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const OpportunityOverViewCardBox = ({ children }) => (
  <Box width='308px' borderRadius='13px' boxShadow='0 10px 20px 0 rgba(75, 126, 153, 0.07)'>
    <Box
      height='309px'
      border='1px solid rgba(75, 126, 153, 0.08)'
      borderRadius='13px'
      backgroundColor='white'
      paddingTop='33px'
      paddingBottom='28px'
    >
      {children}
    </Box>
  </Box>
);

OpportunityOverViewCardBox.displayName = 'OpportunityOverViewCardBox';

OpportunityOverViewCardBox.propTypes = {
  children: PropTypes.node.isRequired,
};

OpportunityOverViewCardBox.defaultProps = {};

export default OpportunityOverViewCardBox;
