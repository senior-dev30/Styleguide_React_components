import React, { forwardRef } from 'react';
import Box from '../Box';

const FlexBox = forwardRef(({ align, justify, wrap, direction, ...rest }, ref) => (
  <Box ref={ref} {...rest} display='flex' />
));

FlexBox.displayName = 'FlexBox';

export default FlexBox;
