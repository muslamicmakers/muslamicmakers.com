import 'whatwg-fetch';
const API = 'https://jade-whitefish.glitch.me/';

const getBios = fetch(API)
  .then(response => {
    return response.json();
  })
  .then(data => data.bioData);

export default getBios;
