/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { useFormControl } from '../FormControl';
import Text from '../Text';

export const FormHelperText = forwardRef((props, ref) => {
  const formControl = useFormControl(props);

  return (
    <Text
      marginTop='4px'
      fontSize='12px'
      marginLeft='16px'
      ref={ref}
      id={formControl.id ? `${formControl.id}-help-text` : null}
      color='secondary'
      lineHeight='normal'
      // fontSize='sm'
      {...props}
    />
  );
});

FormHelperText.displayName = 'FormHelperText';

export default FormHelperText;
