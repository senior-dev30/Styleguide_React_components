/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Children, cloneElement, isValidElement } from 'react';

import Box from '../Box';
import { InputLeftElement, InputRightElement } from '../';

const InputGroup = ({ children, ...props }) => {
  const defaultWidth = '45px';
  const addons = [InputLeftElement, InputRightElement];

  let paddingLeft = null;
  let paddingRight = null;

  return (
    <Box display='flex' position='relative' {...props}>
      {Children.map(children, child => {
        if (!isValidElement(child)) return;
        if (!addons.includes(child.type)) return;

        if (child.type === InputLeftElement) {
          paddingLeft = child.props.width || defaultWidth;

          return cloneElement(child, {
            width: paddingLeft,
          });
        }

        if (child.type === InputRightElement) {
          paddingRight = child.props.width || defaultWidth;

          return cloneElement(child, {
            width: paddingRight,
          });
        }
      })}

      {Children.map(children, child => {
        if (addons.includes(child.type)) return;

        return cloneElement(child, {
          paddingLeft: child.props.paddingLeft || paddingLeft,
          paddingRight: child.props.paddingRight || paddingRight,
        });
      })}
    </Box>
  );
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;
