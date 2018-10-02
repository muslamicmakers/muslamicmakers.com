import 'whatwg-fetch';
import handleFetchErrors from './handleFetchErrors';

const API = process.env.API;
const EVENTBRITE_ENDPOINT = API + '/eventbrite';

export const getData = new Promise((resolve, reject) => {
  const sessionData = window.sessionStorage.getItem('data');
  if (sessionData) return resolve(JSON.parse(sessionData));

  return fetch(API)
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(data => {
      window.sessionStorage.setItem('data', JSON.stringify(data));
      return resolve(data);
    })
    .catch(error => reject(error));
});

export const getEventbrite = new Promise((resolve, reject) => {
  const sessionData = window.sessionStorage.getItem('eventbriteData');
  if (sessionData) return resolve(JSON.parse(sessionData));

  return fetch(EVENTBRITE_ENDPOINT)
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(data => {
      window.sessionStorage.setItem('sessionData', JSON.stringify(data));
      return resolve(data);
    })
    .catch(error => reject(error));
});
