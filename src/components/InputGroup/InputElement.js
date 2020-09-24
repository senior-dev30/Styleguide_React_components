/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { Box } from '../';

const InputElement = forwardRef(
  ({ children, placement = 'left', disablePointerEvents = false, ...props }, ref) => {
    const placementProp = { [placement]: '0' };

    return (
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        position='absolute'
        top='0'
        height='100%'
        zIndex={2}
        ref={ref}
        {...(disablePointerEvents && { pointerEvents: 'none' })}
        {...placementProp}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

InputElement.displayName = 'InputElement';

const InputLeftElement = forwardRef((props, ref) => (
  <InputElement ref={ref} placement='left' {...props} />
));

InputLeftElement.displayName = 'InputLeftElement';

const InputRightElement = forwardRef((props, ref) => (
  <InputElement ref={ref} placement='right' {...props} />
));

InputRightElement.displayName = 'InputRightElement';

export { InputLeftElement, InputRightElement };
export default InputElement;
