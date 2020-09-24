import React from 'react';
import { Input } from 'reactstrap';

const InputTextArea = props => <Input {...props} type='textarea' />;

InputTextArea.displayName = 'InputTextArea';
InputTextArea.propTypes = {};

InputTextArea.defaultProps = {
  rows: 5,
  cols: 10,
};

export default InputTextArea;
