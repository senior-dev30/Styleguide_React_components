/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import Box from '../Box';
import { useFormControl } from '../FormControl';

const RequiredIndicator = props => {
  return (
    <Box as='span' marginLeft={1} color='high-risk' aria-hidden='true' children='*' {...props} />
  );
};

export const FormLabel = forwardRef(({ children, ...props }, ref) => {
  const formControl = useFormControl(props);
  return (
    <Box
      ref={ref}
      fontSize='md'
      color={formControl.isDisabled ? 'grey-disabled' : 'grey-light'}
      paddingRight='12px'
      paddingBottom='4px'
      fontWeight='medium'
      textAlign='left'
      verticalAlign='middle'
      display='inline-block'
      as='label'
      {...props}
    >
      {children}
      {formControl.isRequired && <RequiredIndicator />}
    </Box>
  );
});

FormLabel.displayName = 'FormLabel';

export default FormLabel;
