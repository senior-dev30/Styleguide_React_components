import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Box } from '../';

const ToggleSwitch = React.forwardRef(({ label, isChecked, onChange, ...props }, ref) => {
  if (ref) {
    props.ref = ref;
  }

  return (
    <FlexBox alignItems='center'>
      <label className='switch'>
        <input type='checkbox' role='switch' {...props} checked={isChecked} onChange={onChange} />
        <span className='slider round'></span>
      </label>
      {!!label && (
        <Box marginLeft='16px'>
          <label> {label} </label>
        </Box>
      )}
    </FlexBox>
  );
});

ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.propTypes = {
  /** sets the label if provided */
  label: PropTypes.string,

  /** controls the state of checkbox*/
  isChecked: PropTypes.bool,

  /** called on checked state change with first param as changed value and Event as second param */
  onChange: PropTypes.func,
};

ToggleSwitch.defaultProps = {
  isChecked: false,
  onChange: () => null,
};

export default ToggleSwitch;
