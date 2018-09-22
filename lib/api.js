import 'whatwg-fetch';

const API = process.env.API;
const EVENTBRITE_ENDPOINT = API + '/eventbrite';

export const getData = fetch(API).then(response => response.json());

export const getEventbrite = fetch(EVENTBRITE_ENDPOINT).then(response =>
  response.json()
);
