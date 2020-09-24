/** @jsx jsx */
import { jsx } from '@emotion/core';
// // import styled from '@emotion/styled';
import { forwardRef } from 'react';
// import { useColorMode } from "../ColorModeProvider";
import FlexBox from '../FlexBox';
import { useFormControl } from '../FormControl';
// import Icon from '../Icon';
import Text from '../Text';

const FormErrorMessage = forwardRef(({ children, icon, ...props }, ref) => {
  const formControl = useFormControl(props);

  if (!formControl.isInvalid) {
    return null;
  }

  return (
    <FlexBox
      ref={ref}
      color='error'
      id={formControl.id ? `${formControl.id}-error-message` : null}
      marginTop='4px'
      marginLeft='16px'
      fontSize='12px'
      align='center'
      {...props}
    >
      {/* <Icon aria-hidden name={icon || 'warning'} mr='0.5em' /> */}
      <Text lineHeight='normal'>{children}</Text>
    </FlexBox>
  );
});

FormErrorMessage.displayName = 'FormErrorMessage';

export default FormErrorMessage;
