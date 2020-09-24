import React from 'react';
import PropTypes from 'prop-types';
import { TextRubik } from '../Text';

const OpportunityOverViewCardBoxHeading = ({ children }) => (
  <TextRubik
    color='#8798ad'
    fontSize='14px'
    letterSpacing='1.31px'
    textAlign='center'
    lineHeight='normal'
    fontWeight='normal'
    fontStretch='normal'
    fontStyle='normal'
    textTransform='uppercase'
    marginBottom='10px'
  >
    {children}
  </TextRubik>
);

OpportunityOverViewCardBoxHeading.displayName = 'OpportunityOverViewCardBoxHeading';

OpportunityOverViewCardBoxHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

OpportunityOverViewCardBoxHeading.defaultProps = {};

export default OpportunityOverViewCardBoxHeading;
