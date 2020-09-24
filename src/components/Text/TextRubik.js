import React from 'react';
import Text from '../Text';

const TextRubik = React.forwardRef((props, ref) => {
  return <Text ref={ref} {...props} fontFamily='Rubik' />;
});

TextRubik.displayName = 'TextRubik';

export default TextRubik;
