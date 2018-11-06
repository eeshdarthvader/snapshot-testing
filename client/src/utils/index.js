export const dateFormat = (value) => {
  const h = new Date(value).getHours();
  const m = (new Date(value).getMinutes() < 10 ? '0' : '') + new Date(value).getMinutes();
  return `${h}:${m}`;
};

export const convertMinsToHrsMins = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? `${h}` : h;
  m = m < 10 ? `${m}` : m;
  return `${h}h ${m}`;
};

export const formatPrice = value => Math.floor(value);

export const dateString = dateValue =>
  `${dateValue.getFullYear()}-${dateValue.getMonth() + 1}-${dateValue.getDate()}`;

export const closestMonday = (addDays = 0) => {
  const currDate = new Date(); // current date
  const dayInfo = 8.64e7; // milliseconds per day
  const daysToMonday = 8 - currDate.getDay(); // days left to closest Monday
  const generateInfo = daysToMonday * dayInfo;
  const mondayInSec = currDate.getTime() + generateInfo;
  const nextMonday = new Date(mondayInSec); // Monday in date object
  nextMonday.setHours(0, 0, 0);

  if (addDays) {
    const tomDate = new Date();
    tomDate.setDate(nextMonday.getDate() + addDays);
    return dateString(tomDate);
  }
  return dateString(nextMonday);
};
