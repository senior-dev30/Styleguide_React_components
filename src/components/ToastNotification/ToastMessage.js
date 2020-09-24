import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import FlexBox from '../FlexBox';
import Text from '../Text';

const ToastMessage = ({ toastText, buttonText, onButtonClick }) => (
  <Box fontSize='12px' lineHeight='normal'>
    <Text
      color='white'
      letterSpacing='normal'
      fontWeight='500'
      paddingRight='8px'
      marginBottom='12px'
    >
      {toastText}
    </Text>

    <FlexBox justifyContent='center'>
      <Box
        as='button'
        fontFamily='Avenir'
        borderRadius='3px'
        backgroundColor='white'
        height='21px'
        paddingHorizontal='26px'
        letter-spacing='-0.33px'
        textAlign='center'
        color='primary'
        border='none'
        onClick={onButtonClick}
      >
        {buttonText}
      </Box>
    </FlexBox>
  </Box>
);

ToastMessage.displayName = 'ToastMessage';

ToastMessage.propTypes = {
  /** Toast message text*/
  toastText: PropTypes.node.isRequired,

  /** button text */
  buttonText: PropTypes.string.isRequired,

  /** onClick event handler for button */
  onButtonClick: PropTypes.func,
};

ToastMessage.defaultProps = {
  onButtonClick: () => null,
};

export default ToastMessage;
