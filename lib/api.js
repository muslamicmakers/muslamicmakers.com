import 'whatwg-fetch';
import handleFetchErrors from './handleFetchErrors';

const API = process.env.API;
const EVENTBRITE_ENDPOINT = API + '/eventbrite';

export const getData = fetch(API)
  .then(handleFetchErrors)
  .then(response => response.json())
  .catch(error => console.error(error));

export const getEventbrite = fetch(EVENTBRITE_ENDPOINT)
  .then(handleFetchErrors)
  .then(response => response.json())
  .catch(error => console.error(error));
