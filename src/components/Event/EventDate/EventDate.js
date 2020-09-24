import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Box } from '../../';

const EventDate = ({ eventDate }) => (
  <Box color='secondary' fontWeight='600' letterSpacing='normal' lineHeight='normal'>
    <Box fontSize='18px'>{dayjs(eventDate).format('MMM D')}</Box>
    <Box opacity={0.64}>{dayjs(eventDate).format('ddd')}</Box>
  </Box>
);

EventDate.displayName = 'EventDate';

EventDate.propTypes = {
  /**  The date the Event is to be held on in ISO 8601 format e.g '2020-01-20T18:30:44+0000' */
  eventDate: PropTypes.string.isRequired,
};

EventDate.defaultProps = {};

export default EventDate;
