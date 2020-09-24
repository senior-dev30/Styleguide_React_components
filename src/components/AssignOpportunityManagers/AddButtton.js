import React from 'react';
import PropTypes from 'prop-types';
import { Box, Icon } from '..';

const AddButtton = ({ size, iconSize, borderWidth, onClick }) => {
  return (
    <Box
      backgroundColor='primary'
      width={size}
      height={size}
      borderRadius='50%'
      style={{
        padding: borderWidth,
      }}
      onClick={onClick}
    >
      <Box
        width='100%'
        height='100%'
        borderRadius='50%'
        boxShadow='0 5px 7px 0 rgba(0, 0, 0, 0.5)'
        backgroundColor='white'
        padding={`calc((${size} - ${borderWidth} * 2 - ${iconSize}) / 2)`}
      >
        <Icon icon='ADD' color='primary' className='text-center' size={iconSize} />
      </Box>
    </Box>
  );
};

AddButtton.displayName = 'AddButtton';

const NumberOrString = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

AddButtton.propTypes = {
  /** size for button icon */
  size: NumberOrString,

  /** size for add icon */
  iconSize: NumberOrString,

  /** width of border for circle */
  borderWidth: NumberOrString,
};

AddButtton.defaultProps = {
  size: '45px',
  iconSize: '35px',
  borderWidth: '5px',
};

export default AddButtton;
