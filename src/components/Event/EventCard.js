import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { FlexBox, Box, AvatarWithNameTitle, Button, Icon, EventDate, EventHeader } from '../';

const EventCard = ({
  event: { date, title, location, usersForEvent, linkToEvent, inviter_user },
}) => {
  return (
    <FlexBox
      alignItems='center'
      width='1271px'
      height='122px'
      borderRadius='11px'
      boxShadow='0 8px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 4px 0 rgba(0, 0, 0, 0.5)'
      padding='0px 20px 0px 37px'
    >
      <Box flexBasis='108px'>
        <EventDate eventDate={date} />
      </Box>

      <Box flexBasis='267px'>
        <EventHeader
          title={title}
          time={dayjs(date).format('ha')}
          location={location}
          usersForEvent={usersForEvent}
          linkToEvent={linkToEvent}
        />
      </Box>

      <Box flexBasis='222px'>
        <AvatarWithNameTitle
          name={`${inviter_user.first_name} ${inviter_user.last_name}`}
          title={<i>invited you</i>}
          nameFontWeight='500'
          titleFontSize='14px'
          avatarProps={{
            size: '66px',
            userImageUrl: inviter_user.imageUrl,
            userProfileUrl: '/docz-mock-url/user-profile-url',
            borderRadius: '16px',
            boxShadow: '0 1px 3px 0 var(--secondary)',
            position: 'relative',
            top: '-4px',
          }}
        />
      </Box>

      <Box fontWeight='bold' position='relative' top='-2px' flexBasis='209px'>
        <Link to={linkToEvent}> see more details </Link>
      </Box>

      <FlexBox>
        <Box inlineFlex marginRight='24px'>
          <Button color='secondary' size='going' outline>
            <Icon icon='CHECK_MARK' size={18} color='secondary' />
            going
          </Button>
        </Box>
        <Button color='secondary' size='cannot-go' outline>
          <Icon icon='CLOSE' size='17px' color='secondary' />
          can't go
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

EventCard.displayName = 'EventCard';

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};

EventCard.defaultProps = {};

export default EventCard;
