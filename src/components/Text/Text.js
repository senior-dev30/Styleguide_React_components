import React from 'react';
import Box from '../Box';

const Text = React.forwardRef((props, ref) => {
  return <Box ref={ref} as='p' fontFamily='Avenir' {...props} />;
});

Text.displayName = 'Text';

export default Text;
