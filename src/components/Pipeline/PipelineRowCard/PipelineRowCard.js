import React from 'react';
import PropTypes from 'prop-types';
import { AvatarWithNameTitle, SubtitleTitleComponent as SubtitleTitle } from '../../';
import Box from '../../Box';
import FlexBox from '../../FlexBox';

/** extract common props/design so we don't have to duplicate */
const SubtitleTitleBoxForPipeline = props => (
  <Box flexBasis='105px' paddingLeft={props.useBar ? '0px' : '12px'}>
    <SubtitleTitle titleColor='grey-light' {...props} />
  </Box>
);

const PipelineRowCard = ({ useBar }) => (
  <FlexBox
    alignItems='center'
    width='1264px'
    height='154px'
    borderRadius='11px'
    boxShadow='0 8px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.5)'
  >
    <Box flexShrink='0' flexBasis='120px' marginLeft='26px'>
      <AvatarWithNameTitle
        name='Ryan Jones'
        avatarPosition='top'
        nameFontSize='14px'
        nameFontWeight={500}
        nameLetterSpacing='normal'
        avatarProps={{
          userImageUrl: 'https://imgbbb.com/images/2020/01/16/16.jpg',
          userProfileUrl: '/docz-mock-url/user-profile-url',
          size: '66px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px 0 var(--secondary)',
          marginHorizontal: 'auto',
          display: 'flex',
          justifyContent: 'center',
          lineHeight: 'normal',
          avatarLinkProps: {
            style: {
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          },
        }}
        nameTitleBoxProps={{
          marginTop: '12px',
          marginHorizontal: 'auto',
        }}
      />
    </Box>

    <Box
      flexBasis='384px'
      flexShrink='0'
      paddingRight='30px'
      lineHeight='normal'
      letterSpacing='normal'
      position='relative'
      top='-14px'
    >
      <Box
        fontSize='12px'
        boxShadow='0 1px 0 rgba(255, 255, 255, 0.5)'
        style={{ color: '#4a4a4a' }}
        marginBottom='20px'
      >
        #234
      </Box>
      <Box fontSize='14px' letterSpacing='-0.09px' color='#1d2361' lineHeight='normal'>
        Reduce costs by reducing dedicated fleet by getting deal with bulk pricing rideshare
        agreement
      </Box>
    </Box>

    <SubtitleTitleBoxForPipeline
      titleColor='secondary'
      title='cost savings'
      subtitle='sales'
      useBar={useBar}
    />

    <SubtitleTitleBoxForPipeline title='automation' subtitle='fleet' useBar={useBar} />

    <SubtitleTitleBoxForPipeline
      title='status'
      subtitle='at risk'
      subtitleColor='golden-yellow'
      useBar={useBar}
    />

    <SubtitleTitleBoxForPipeline title='plan' subtitle='$2,167' useBar={useBar} />

    <SubtitleTitleBoxForPipeline
      title='variance'
      subtitle='- $20k'
      subtitleColor='golden-yellow'
      useBar={useBar}
    />

    <SubtitleTitleBoxForPipeline title='plan' subtitle='Jan 2019' useBar={useBar} />

    <SubtitleTitleBoxForPipeline
      title='actual'
      subtitle='Jan 2021'
      subtitleColor='golden-yellow'
      useBar={useBar}
    />
  </FlexBox>
);

PipelineRowCard.displayName = 'PipelineRowCard';

PipelineRowCard.propTypes = {
  useBar: PropTypes.bool,
};

PipelineRowCard.defaultProps = {
  useBar: false,
};

export default PipelineRowCard;
