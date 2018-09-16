import 'whatwg-fetch';
const API = 'https://jade-whitefish.glitch.me/';

const getData = fetch(API).then(response => {
  return response.json();
});

export default getData;
