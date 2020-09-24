import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../';

const ToggleButton = ({ label, toggleOnLabel, toggleOffLabel, isToggleOn, onToggle }) => (
  <Button
    color={isToggleOn ? 'toggle-on' : 'toggle-off'}
    size='toggle'
    onClick={() => onToggle(!isToggleOn)}
  >
    {isToggleOn ? toggleOnLabel || label : toggleOffLabel || label}
  </Button>
);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.propTypes = {
  /** controls the on/off state of toggle */
  isToggleOn: PropTypes.bool,

  /** sets the text  */
  label: PropTypes.string,

  /** use `toggleOnLabel` to set label when toggle is 'on', it falls back to `label` when `toggleOnLabel` is absent */
  toggleOnLabel: PropTypes.string,

  /** use `toggleOffLabel` to set label when toggle is 'off', it falls back to `label` when `toggleOffLabel` is absent */
  toggleOffLabel: PropTypes.string,

  /** callback with changed value (Bool) of toggle  */
  onToggle: PropTypes.func,
};

ToggleButton.defaultProps = {
  isToggleOn: false,
  label: 'label',
  onToggle: () => null,
};

export default ToggleButton;
