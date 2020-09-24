import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FlexBox, Box } from '../../';

const EventHeader = ({ title, time, location, linkToEvent, usersForEvent }) => {
  const totalUsersForEvent = usersForEvent.length;

  const firstUser = totalUsersForEvent > 0 && usersForEvent[0];
  const secondUser = totalUsersForEvent > 1 && usersForEvent[1];
  const thirdUser = totalUsersForEvent > 2 && usersForEvent[2];

  return (
    <div className='event--header'>
      <Box
        color='primary'
        fontWeight='bold'
        textTransform='capitalize'
        className='font-weight-bold text-primary text-capitalize'
      >
        <Link to={linkToEvent}>{title}</Link>
      </Box>

      <FlexBox
        fontSize='14px'
        color='secondary'
        alignItems='baseline'
        className='font-14px d-flex text-secondary align-items-baseline'
      >
        <div>{time}</div>
        <Box
          size='6px'
          border='solid 1px var(--secondary)'
          borderRadius='3px'
          marginHorizontal='7px'
          style={{ backgroundColor: 'var(--secondary)' }}
        />
        <div>{location}</div>
      </FlexBox>

      {totalUsersForEvent > 0 && (
        <div className='d-inline'>
          {/** images */}
          {firstUser && (
            <Box
              as='img'
              size='16px'
              borderRadius='13px'
              src={firstUser.image}
              alt={firstUser.first_name}
            />
          )}

          {secondUser && (
            <Box
              as='img'
              size='16px'
              borderRadius='13px'
              src={secondUser.image}
              alt={secondUser.first_name}
            />
          )}
          {/** first_name(s) and count */}
          <Box as='span' color='secondary' fontSize='12px' paddingLeft='1px'>
            {totalUsersForEvent === 1 && <span>{firstUser.first_name} is</span>}
            {totalUsersForEvent === 2 && (
              <span>
                {firstUser.first_name}
                {' and '}
                {secondUser.first_name}
              </span>
            )}
            {totalUsersForEvent > 2 && (
              <span>
                {thirdUser.first_name} and {totalUsersForEvent - 1} others
              </span>
            )}{' '}
            going
          </Box>
        </div>
      )}
    </div>
  );
};

EventHeader.displayName = 'EventHeader';

EventHeader.propTypes = {
  /** title of event, it will capitalize it automatically */
  title: PropTypes.string.isRequired,

  /** link to event */
  linkToEvent: PropTypes.string.isRequired,

  /** time of event */
  time: PropTypes.string,

  /** location of event */
  location: PropTypes.string,

  /** users going to the event */
  usersForEvent: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};

EventHeader.defaultProps = {
  usersForEvent: [],
};

export default EventHeader;
