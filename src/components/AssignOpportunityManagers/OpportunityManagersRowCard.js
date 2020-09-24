import React from 'react';
import PropTypes from 'prop-types';
import AddButtton from './AddButtton';

import { Box, FlexBox, SubtitleTitleComponent } from '..';
import OpportunityManagersStatus from './OpportunityManagersStatus';

const OpportunityManagersRowCard = ({
  id,
  description,
  onButtonClick,
  groupType,
  group,
  ideaType,
  topic,
  value,
  risk,
  riskBarColor,
}) => {
  const labels = [
    { title: groupType, subtitle: group, barColor: '#D8D8D8' },
    { title: ideaType, subtitle: topic, barColor: '#D8D8D8' },
    { title: 'value', subtitle: value, barColor: '#01ff1f' },
    { title: 'risk', subtitle: risk, barColor: riskBarColor },
  ];

  return (
    <FlexBox
      width='1271px'
      height='154px'
      paddingLeft='43px'
      paddingRight='42px'
      alignItems='center'
      borderRadius='11px'
      boxShadow='0 8px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.5)'
      backgroundColor='white'
    >
      <AddButtton size='45px' borderWidth='5px' iconSize='25px' onClick={onButtonClick} />
      <Box flexBasis='344px' height='110px' fontSize='12px' color='secondary' marginLeft='58px'>
        <Box marginTop='2px'>#{id}</Box>
        <Box
          marginTop='20px'
          fontSize='14px'
          fontWeight='normal'
          fontStretch='normal'
          fontStyle='normal'
          lineHeight='19px'
          color='#1d2361'
          letterSpacing='-0.09px'
        >
          {description}
        </Box>
      </Box>
      <FlexBox flexBasis='373px' height='44px' marginLeft='27px' justifyContent='space-between'>
        {labels.map(({ title, subtitle, useBar = true, barColor }, index) => (
          <SubtitleTitleComponent
            key={index}
            title={title}
            subtitle={subtitle}
            useBar={useBar}
            barColor={barColor}
            titleFontWeight='normal'
            titleColor='grey-light'
            paddingTop='4px'
            paddingBottom='4px'
          />
        ))}
      </FlexBox>
      <Box marginLeft='40px'>
        <OpportunityManagersStatus labels={['Team', 'Resources', 'Stakehoders']} />
      </Box>
    </FlexBox>
  );
};

OpportunityManagersRowCard.displayName = 'OpportunityManagersRowCard';

OpportunityManagersRowCard.propTypes = {
  /** ID of the (Idea Card) */
  id: PropTypes.number.isRequired,

  /** Text describing the idea */
  description: PropTypes.string.isRequired,

  /** Function representing a callback after `+ ` button gets `Clicked` */
  onButtonClick: PropTypes.func.isRequired,

  /** Group Type Prop */
  groupType: PropTypes.string.isRequired,

  /** Group Prop */
  group: PropTypes.string.isRequired,

  /** Idea Type Prop */
  ideaType: PropTypes.string.isRequired,

  /** Topic Value */
  topic: PropTypes.string.isRequired,

  /** Value Prop */
  value: PropTypes.string.isRequired,

  /** Risk Prop */
  risk: PropTypes.string.isRequired,

  /** Risk bar Color prop */
  riskBarColor: PropTypes.string.isRequired,
};

OpportunityManagersRowCard.defaultProps = {
  onButtonClick: () => {},
};

export default OpportunityManagersRowCard;
