import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useFormControl } from '../FormControl';
import PseudoBox from '../PseudoBox';
import useInputStyle from './styles';

const Input = forwardRef((props, ref) => {
  const {
    isReadOnly,
    isDisabled,
    isInvalid,
    isRequired,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    ...rest
  } = props;

  const inputStyleProps = useInputStyle(props);
  const formControl = useFormControl(props);

  return (
    <PseudoBox
      ref={ref}
      as='input'
      readOnly={formControl.isReadOnly}
      aria-readonly={isReadOnly}
      disabled={formControl.isDisabled}
      aria-label={ariaLabel}
      aria-invalid={formControl.isInvalid}
      required={formControl.isRequired}
      aria-required={formControl.isRequired}
      aria-disabled={formControl.isDisabled}
      aria-describedby={ariaDescribedby}
      {...inputStyleProps}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  isReadOnly: false,
  isDisabled: false,
  isInvalid: false,
  isRequired: false,
};

export default Input;
