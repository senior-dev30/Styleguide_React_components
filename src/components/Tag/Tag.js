import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../';

const Tag = ({ tag, isSelected, toggleSelection }) => (
  <Button
    color={isSelected ? 'tag-selected' : 'tag-normal'}
    size='tag'
    onClick={() => toggleSelection(!isSelected)}
  >
    {tag}
  </Button>
);

Tag.displayName = 'Tag';

Tag.propTypes = {
  tag: PropTypes.string,
  isSelected: PropTypes.bool,
  toggleSelection: PropTypes.func,
};

Tag.defaultProps = {
  toggleSelection: () => null,
  isSelected: false,
  tag: 'tag',
};

export default Tag;
