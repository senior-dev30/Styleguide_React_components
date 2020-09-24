import React from 'react';
import { Input } from 'reactstrap';

const InputText = props => {
  return <Input {...props} type='text' />;
};

InputText.displayName = 'InputText';
InputText.propTypes = {};

InputText.defaultProps = {};

export default InputText;
