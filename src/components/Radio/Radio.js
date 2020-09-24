/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ControlBox from '../ControlBox';
// import { useColorMode } from '../ColorModeProvider';
import VisuallyHidden from '../VisuallyHidden';
// import useCheckboxStyle from '../Checkbox/styles';
import Box from '../Box';

// import { useVariantColorWarning } from '../utils';

const radioBaseStyles = {
  userSelect: 'none',
  border: '1px',
  borderRadius: 'sm',
  borderColor: 'yellow',
  transition: 'background-color 120ms, box-shadow 250ms',
};

const interactionProps = ({ color, isInvalid }) => {
  return {
    backgroundColor: 'white',
    borderColor: 'grey-light',
    borderStyle: 'solid',
    _hover: {
      borderColor: isInvalid ? undefined : 'secondary',
    },
    _checked: {
      backgroundColor: color,
      borderColor: color,
      color: 'white',
    },
    // _checkedAndDisabled: {
    //   borderColor: 'gray.200',
    //   bg: 'gray.200',
    //   color: 'gray.500',
    // },
    _disabled: {
      backgroundColor: 'disabled-bg',
      borderColor: 'disabled-bg',
    },
    // _focus: {
    //   boxShadow: 'outline',
    // },
    _invalid: {
      borderColor: 'error',
    },
  };
};

const useRadioStyle = props => {
  const sizes = {
    sm: '16px',
    md: '20px',
    lg: '24px',
  };

  return {
    ...radioBaseStyles,
    ...interactionProps(props),
    size: sizes[props.size],
  };
};

const Radio = forwardRef(
  (
    {
      id,
      name,
      value,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      color = 'primary',
      defaultIsChecked,
      isChecked,
      isFullWidth,
      size = 'md',
      isDisabled,
      isInvalid,
      onChange,
      onBlur,
      onFocus,
      children,
      ...rest
    },
    ref,
  ) => {
    // Wrong usage of `variantColor` prop is quite common
    // Let's add a warning hook that validates the passed variantColor
    // useVariantColorWarning('Radio', variantColor);

    const styleProps = useRadioStyle({
      color,
      isInvalid,
      size,
    });

    const textFontSizes = {
      sm: '10px',
      md: '12px',
      lg: '16px',
    };

    return (
      <Box
        as='label'
        display='inline-flex'
        verticalAlign='top'
        htmlFor={id}
        alignItems='center'
        width={isFullWidth ? 'full' : undefined}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        {...rest}
      >
        <VisuallyHidden
          as='input'
          type='radio'
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          id={id}
          ref={ref}
          name={name}
          value={value}
          aria-invalid={isInvalid}
          defaultChecked={defaultIsChecked}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          checked={isChecked}
          disabled={isDisabled}
        />
        <ControlBox {...styleProps} type='radio' borderRadius='full'>
          <Box
            as='svg'
            padding='1px'
            xmlns='http://www.w3.org/2000/svg'
            size={styleProps.size}
            viewBox='0 0 48 48'
          >
            <path
              d='M20.2 37.91a3.49 3.49 0 01-5.067 0l-9.085-9.422c-1.397-1.453-1.397-3.806 0-5.26a3.494 3.494 0 015.066 0l6.552 6.799L36.884 10.09a3.487 3.487 0 015.065 0c1.401 1.45 1.401 3.802 0 5.255L20.2 37.91z'
              fill='white'
            />
          </Box>
        </ControlBox>
        {children && (
          <Box
            marginLeft='16px'
            position='relative'
            top='3px'
            fontSize={textFontSizes[size]}
            userSelect='none'
            color={isDisabled ? 'grey-disabled' : undefined}
          >
            {children}
          </Box>
        )}
      </Box>
    );
  },
);

Radio.displayName = 'Radio';

Radio.propTypes = {
  /** The id assigned to input field */
  id: PropTypes.string,

  /** The name of the input field in a radio (Useful for form submission)  */
  name: PropTypes.string,

  /** The value to be used in the radio input. This is the value that will be returned on form submission */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** If `true`, the radio will be initially checked */
  defaultIsChecked: PropTypes.bool,

  /** If `true`, the radio will be checked. You'll need to pass `onChange` to update it's value (since it's now controlled) */
  isChecked: PropTypes.bool,

  /** If `true`, the radio should take up the full width of the parent */
  isFullWidth: PropTypes.bool,

  /** The size (width and height) of the radio, text font-size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** If `true`, the radio will be disabled */
  isDisabled: PropTypes.bool,

  /** If `true`, the radio is marked as invalid. Changes style of unchecked state */
  isInvalid: PropTypes.bool,

  /** The children of the radio e.g. \<Radio\> I'm children \</Radio\> */
  children: PropTypes.node,

  /** Function called when the state of the radio changes  */
  onChange: PropTypes.func,

  /** Function called when you blur out of the radio  */
  onBlur: PropTypes.func,

  /** Function called when the radio receive focus   */
  onFocus: PropTypes.func,

  /** The color of radio when selected, by default uses 'primary' */
  color: PropTypes.string,

  /** An accessible label for the radio in event there's no visible label or `children` was passed */
  'aria-label': PropTypes.string,

  /** Id that points to the label for the radio in event no `children` was passed */
  'aria-labelledby': PropTypes.string,
};

Radio.defaultProps = {};

export default Radio;
