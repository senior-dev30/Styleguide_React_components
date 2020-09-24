import React from 'react';
import PropTypes from 'prop-types';
// import { Box } from './../../';
import PseudoBox from '../../PseudoBox';
import FlexBox from '../../FlexBox';
import Box from '../../Box';

const PipelineHeaderCard = ({
  title,
  amountInMillions,
  isSelected,
  selectedBorderColor,
  onClick,
}) => {
  return (
    <PseudoBox
      display='flex'
      flexDirection='column'
      width='175px'
      height='133px'
      borderRadius='15px'
      boxShadow='0 1px 10px 0 rgba(182, 194, 200, 0.5)'
      paddingTop='20px'
      flexShrink='0'
      onClick={onClick}
      cursor='pointer'
      border='1px solid'
      borderColor='transparent'
      aria-selected={isSelected}
      _selected={{ borderColor: selectedBorderColor }}
    >
      <Box
        textAlign='center'
        fontSize='13px'
        lineHeight='normal'
        fontWeight='normal'
        flexBasis='25px'
        style={{ color: '#8798ad' }}
      >
        {title}
      </Box>

      <FlexBox justifyContent='center' flexBasis='42px'>
        <Box
          textAlign='center'
          fontSize='35px'
          fontWeight={300}
          letterSpacing='-0.44px'
          position='relative'
          lineHeight='normal'
          style={{ color: '#2e384d' }}
        >
          <Box position='absolute' left='-13px' top='8px' fontSize='20px' letterSpacing='-0.25px'>
            $
          </Box>
          {amountInMillions}
        </Box>
      </FlexBox>

      <Box
        fontWeight={300}
        textAlign='center'
        fontSize='13px'
        letterSpacing='-0.16px'
        lineHeight='normal'
        style={{ color: '#2e384d' }}
      >
        million
      </Box>
    </PseudoBox>
  );
};

PipelineHeaderCard.displayName = 'PipelineHeaderCard';

PipelineHeaderCard.propTypes = {
  title: PropTypes.string.isRequired,
  amountInMillions: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  selectedBorderColor: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  marginRight: PropTypes.string,
};

PipelineHeaderCard.defaultProps = {
  onClick: () => null,
  isSelected: false,
};

export default PipelineHeaderCard;
