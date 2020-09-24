import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Box from '../Box';
import FlexBox from '../FlexBox';

const ContributorCard = ({ title, subtitle, positionNumber, avatarProps }) => (
  <FlexBox>
    <Box position='relative'>
      <Box
        as='span'
        fontFamily='Rubik'
        position='absolute'
        userSelect='none'
        top='17.5px'
        left='-12.5px'
        fontSize='12px'
        lineHeight='25px'
        fontWeight='500'
        backgroundColor='white'
        borderRadius='full'
        size='25px'
        textAlign='center'
        border='1px solid'
        borderColor='primary'
        fontStretch='normal'
        color='black'
        boxShadow='0 5px 10px 0 rgba(75, 126, 153, 0.3)'
      >
        {positionNumber}
      </Box>
      <Avatar
        {...avatarProps}
        size='60px'
        borderRadius='7px'
        boxShadow='0 1px 3px 0 #77869e, 0 1px 3px 0 rgba(0, 0, 0, 0.5)'
      />
    </Box>

    <FlexBox marginLeft='22px' flexDirection='column' justifyContent='center' fontFamily='Rubik'>
      <Box color='#2e384d' lineHeight='1.38' fontWeight='500'>
        {title}
      </Box>
      <Box color='#8798ad' fontSize='12px' lineHeight='1.83'>
        {subtitle}
      </Box>
    </FlexBox>
  </FlexBox>
);

ContributorCard.displayName = 'ContributorCard';
ContributorCard.propTypes = {
  /** Contributor name */
  title: PropTypes.string.isRequired,

  /** Contribution description */
  subtitle: PropTypes.string.isRequired,

  /** position number in contributors list */
  positionNumber: PropTypes.number.isRequired,

  /** avatar props which will be passed to `Avatar` component */
  avatarProps: PropTypes.object.isRequired,
};

ContributorCard.defaultProps = {};

export default ContributorCard;
