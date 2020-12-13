import dateFormat from 'dateformat';

export const toShortTime = time => dateFormat(time, 'shortTime');
