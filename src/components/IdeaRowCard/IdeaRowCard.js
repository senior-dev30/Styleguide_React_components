import React from 'react';
import PropTypes from 'prop-types';

import { Button, StarButton, SubtitleTitleComponent } from '../';
import FlexBox from '../FlexBox';
import Box from '../Box';

const IdeaRowCard = ({
  id,
  description,

  onButtonClick,
  buttonText,

  labels,

  isChecked,
  onCheck,
  onUncheck,

  isLiked,
  onLike,
  onDislike,
}) => {
  const handleCheckBoxTrigger = event => {
    if (event.target.checked) {
      onCheck();
    } else {
      onUncheck();
    }
  };

  return (
    <FlexBox
      justifyContent='space-between'
      alignItems='center'
      position='relative'
      width='1296px'
      padding='40px 60px 42px 34px'
      borderRadius='11px'
      borderColor='#ffffff'
      boxShadow='0 1px 5px 4px rgba(64, 64, 64, 0.12), 0 2px 5px 0 rgba(14, 14, 14, 0.07)'
    >
      <Box>
        <input type='checkbox' defaultChecked={isChecked} onChange={handleCheckBoxTrigger} />
      </Box>

      <Box fontFamily='Avenir' fontSize='12px' color='secondary'>
        #{id}
      </Box>

      <Box
        flexBasis='333px'
        marginRight='105px'
        position='relative'
        color='#1d2361'
        fontFamily='Avenir'
        fontWeight={500}
        fontSize='14px'
        lineHeight='normal'
        letterSpacing='-0.09px'
      >
        {description}
      </Box>

      {labels.map(({ title, subtitle, useBar = true, barColor }, index) => (
        <SubtitleTitleComponent
          key={index}
          title={title}
          subtitle={subtitle}
          useBar={useBar}
          barColor={barColor}
        />
      ))}

      <Box marginLeft='94px'>
        <Button color='secondary' outline onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Box>

      <Box as='span' position='absolute' top='10px' right='10px'>
        <StarButton isLiked={isLiked} onLike={onLike} onDislike={onDislike} />
      </Box>
    </FlexBox>
  );
};

IdeaRowCard.displayName = 'IdeaRowCard';

IdeaRowCard.propTypes = {
  /**
   * ID of the (Idea Card)
   */
  id: PropTypes.number.isRequired,

  /**
   * Text describing the idea
   */
  description: PropTypes.string.isRequired,

  /**
   * Function representing a callback after `Button` gets `Clicked`
   */
  onButtonClick: PropTypes.func.isRequired,

  /**
   * Allows customizing the button text
   */
  buttonText: PropTypes.string,

  /**
   * A collection of objects containing (`title`, `subtitle` and optional `useBar` / `barColor` attributes)
   */
  labels: PropTypes.array.isRequired,

  /**
   * Represents initial value of the Checkbox being checked
   */
  isChecked: PropTypes.bool,

  /**
   * Function representing a callback on `Checkbox` being `checked`
   */
  onCheck: PropTypes.func,

  /**
   * Function representing a callback on `Checkbox` being `UN-checked`
   */
  onUncheck: PropTypes.func,

  /**
   * Represents initial value of the Star being active
   */
  isLiked: PropTypes.bool,

  /**
   * Function representing a callback on item being `Starred`
   */
  onLike: PropTypes.func,

  /**
   * Function representing a callback on Item being `UN-Starred`
   */
  onDislike: PropTypes.func,
};

IdeaRowCard.defaultProps = {
  buttonText: 'recommend',
  isChecked: false,
  onCheck: () => {},
  onUncheck: () => {},
  isLiked: false,
  onLike: () => {},
  onDislike: () => {},
};

export default IdeaRowCard;
