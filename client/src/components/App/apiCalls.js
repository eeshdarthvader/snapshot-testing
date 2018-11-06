import querystring from 'querystring';

export const toQueryString = (object, sep = '&', eq = '=') =>
  querystring.stringify(object, sep, eq);

export const fetchItineraries = async (data) => {
  const response = await fetch(`http://localhost:4000/api/search?${toQueryString(data)}`);
  if (response.status >= 400) {
    throw new Error('Error fetching itineriaries');
  } else {
    return response.json();
  }
};
