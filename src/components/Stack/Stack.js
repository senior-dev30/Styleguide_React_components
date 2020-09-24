/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import FlexBox from '../FlexBox';
import Box from '../Box';

// TODO: Reduce complexity by deprecating isInline and isReversed prop
const Stack = ({ children, spacing, shouldWrapChildren }) => {
  const validChildren = Children.toArray(children).filter(isValidElement);

  return (
    <FlexBox flexDirection='column'>
      {validChildren.map((child, index) => {
        let isLastChild = validChildren.length === index + 1;

        let spacingProps = { marginBottom: isLastChild ? null : spacing };

        if (shouldWrapChildren) {
          return (
            <Box display='inline-block' {...spacingProps} key={`stack-box-wrapper-${index}`}>
              {child}
            </Box>
          );
        }
        return cloneElement(child, spacingProps);
      })}
    </FlexBox>
  );
};

Stack.displayName = 'Stack';

Stack.propTypes = {
  /** the space between two stack items */
  spacing: PropTypes.string,

  /**
   *  if `true`, every child is be wrapped inside `Box` with `display='inline-block'` and spacing is added to wrapper `Box`
   *  if `false`, every child is be cloned and `marginBottom` is added to child
   *
   */
  shouldWrapChildren: PropTypes.bool,
};

Stack.defaultProps = {
  spacing: '24px',
  shouldWrapChildren: true,
};

export default Stack;
