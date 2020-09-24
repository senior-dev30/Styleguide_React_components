import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'reactstrap';

const ButtonGroupFilter = ({ variant, children }) => (
  <ButtonGroup className={`btn-group-filter--${variant}`}>{children}</ButtonGroup>
);

ButtonGroupFilter.displayName = 'ButtonGroupFilter';

ButtonGroupFilter.propTypes = {
  /** we've multiple design of this component, which is controlled by this prop */
  variant: PropTypes.oneOf(['default', 'purple-solid', 'outline']),
};

ButtonGroupFilter.defaultProps = {
  variant: 'default',
};

export default ButtonGroupFilter;
