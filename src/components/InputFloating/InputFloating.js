import React from 'react';

import { Input } from '../';

const InputFloating = props => (
  <Input
    height='60px'
    fontSize='16px'
    color='rgba(0, 0, 0, 0.39)'
    border='none'
    borderRadius='16px'
    boxShadow='0 1px 10px 0 #dbe4f3'
    {...props}
  />
);

InputFloating.displayName = 'InputFloating';

export default InputFloating;
